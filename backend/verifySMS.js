const express = require('express');
const twilio = require('twilio');
const { authenticator } = require('otplib');
const cors = require('cors');

const app = express();
const port = 5000; // Ensure this matches your frontend

const accountSid = process.env.TWILLIO_SID;
const authToken = process.env.TWILLIO_TOKEN;
const client = twilio(accountSid, authToken);

app.use(express.json());
app.use(cors());

const otpStore = {};
const secret = authenticator.generateSecret();

function generateOTP() {
    const token = authenticator.generate(secret);
    console.log(`Generated OTP: ${token}`);
    return token;
}

app.post('/send-otp', (req, res) => {
    const { name, phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).send('Phone number is required');
    }

    const otp = generateOTP();
    const expires = Date.now() + 5 * 60 * 1000;

    otpStore[phoneNumber] = { otp, expires };

    client.messages
        .create({
            body: `Hello ${name}, \nYour OTP is: ${otp}`,
            messagingServiceSid: process.env.MESSAGE_SID,
            to: "+91" + phoneNumber,
        })
        .then(message => {
            console.log(message.sid);
            res.send(`Message sent with SID: ${message.sid}`);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Failed to send message');
        });
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
