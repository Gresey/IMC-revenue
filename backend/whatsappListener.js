const { MongoClient } = require("mongodb");
const mongoClient = new MongoClient();
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

// Initialize Express
const app = express();
const port = 5000;

// Twilio credentials
const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

// Middleware
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

// Webhook endpoint to handle incoming messages
app.post('/webhook', async (req, res) => {
    const incomingMessage = req.body.Body;
    const from = req.body.From;
    const database = mongoClient.db("imc");
    const propertyDep = database.collection("propertyTax");
    const waterDep = database.collection("propertyTax");
    const garbageDep = database.collection("propertyTax");
    const phone = convertPhoneNumber(from);
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
        from: 'whatsapp:+14155238886', // From a valid Twilio WhatsApp number
        to: from,
    }).then(message => {
        console.log('Reply sent:', message.sid);
        res.send('<Response></Response>');
    }).catch(error => {
        console.error('Error sending reply:', error);
        res.status(500).send('Error sending reply');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
