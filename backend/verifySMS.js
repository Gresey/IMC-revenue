const express = require('express');
const { MongoClient } = require("mongodb");
const twilio = require('twilio');
const { authenticator } = require('otplib');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const bodyParser = require('body-parser');
const mongoClient = new MongoClient(String(process.env.MONGO_URI));

const app = express();
const port = 5000; // Ensure this matches your frontend
const toNumber = String(process.env.TO_NUMBER);

const accountSid = String(process.env.TWILLIO_SID);
const authToken = String(process.env.TWILLIO_TOKEN);
const client = require('twilio')(String(accountSid), String(authToken));

app.use(express.json());
app.use(cors());

const otpStore = {};
const secret = authenticator.generateSecret();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const convertPhoneNumber = (phoneNumber) => {
    // Check if the phone number starts with 'whatsapp:+91'
    const prefix = 'whatsapp:+91';
    if (phoneNumber.startsWith(prefix)) {
        // Remove the prefix to get the remaining part of the phone number
        return phoneNumber.slice(prefix.length);
    }
    // Return the original number if it doesn't match the expected format
    return phoneNumber;
};

function generateOTP() {
    const token = authenticator.generate(secret);
    console.log(`Generated OTP: ${token}`);
    return token;
}

const sendWhatsAppMessage = async (to, body) => {
    try {
        const message = await client.messages.create({
            body: body, // Message body
            from: toNumber, // From a valid Twilio WhatsApp number
            to: `whatsapp:${to}` // The recipient's WhatsApp number
        });
        console.log('Message sent:', message.sid);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

app.post('/send-otp', async (req, res) => {
    const { name, phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).send('Phone number is required');
    }

    const otp = generateOTP();
    const expires = Date.now() + 5 * 60 * 1000;

    otpStore[phoneNumber] = { otp, expires };

    await client.messages
        .create({
            body: `Hello ${name}, \nYour OTP is: ${otp}`,
            messagingServiceSid: String(process.env.MESSAGE_SID),
            to: String("+91" + phoneNumber),
        })
        .then(message => {
            console.log(message.sid);
            res.send(`Message sent with SID: ${message.sid}`);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Failed to send message');
        });


    await sendWhatsAppMessage(`+91${phoneNumber}`, `Hello ${name}, \n This is an automated message from IMC for your otp if ${otp}.`);
});

app.post('/verify-otp', (req, res) => {
    const { phoneNumber, otp } = req.body;

    if (!phoneNumber || !otp) {
        return res.status(400).send('Phone number and OTP are required');
    }

    const storedOtpData = otpStore[phoneNumber];

    if (!storedOtpData) {
        return res.status(400).send('No OTP sent to this phone number');
    }

    const { otp: storedOtp, expires } = storedOtpData;

    if (Date.now() > expires) {
        delete otpStore[phoneNumber];
        return res.status(400).send('OTP expired');
    }

    if (storedOtp !== otp) {
        return res.status(400).send('Invalid OTP');
    }

    delete otpStore[phoneNumber];

    res.status(200).send('OTP verified successfully');
});

// Webhook endpoint to handle incoming messages
app.post('/webhook', async (req, res) => {
    const incomingMessage = req.body.Body;
    const from = req.body.From;
    const database = mongoClient.db("imc");
    const propertyDep = database.collection("propertyTax");
    const waterDep = database.collection("propertyTax");
    const garbageDep = database.collection("propertyTax");
    const phone = '9669384428';
    const result1 = await propertyDep.findOne({ phoneNumber: phone });
    const result2 = await waterDep.findOne({ phoneNumber: phone });
    const result3 = await garbageDep.findOne({ phoneNumber: phone });
    const name = result1.name;
    console.log(req)
    console.log('Incoming message:', incomingMessage);

    let replyMessage;

    // Logic to reply to specific messages
    if (incomingMessage.toLowerCase().includes('hello')) {
        replyMessage = `Hi ${name}! How can I help you today? To pay your latest taxes type "pay" or type "bill" to get your latest bill with all taxes included.`;
    } else if (incomingMessage.toLowerCase().includes('pay')) {
        replyMessage = `Your total bill is ${result1.fees + result2.fees + result3.fees}\n To pay your fees now click on the link below \n upi://pay?pa=dakshkitukale03@okaxis&pn=IMC&tn=TestingGpay&am=${result1.fees + result2.fees + result3.fees}&cu=INR`;
    } else {
        replyMessage = 'I am sorry, I didn\'t understand that. Can you please rephrase?';
    }

    // Send the reply via Twilio
    client.messages.create({
        body: replyMessage,
        from: toNumber, // From a valid Twilio WhatsApp number
        to: from,
    }).then(message => {
        console.log('Reply sent:', message.sid);
        res.send('<Response></Response>');
    }).catch(error => {
        console.error('Error sending reply:', error);
        res.status(500).send('Error sending reply');
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
