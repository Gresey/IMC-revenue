require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

// Initialize Express
const app = express();
const port = process.env.PORT || 3000;

// Twilio credentials
const accountSid = process.env.TWILLIO_SID;
const authToken = process.env.TWILLIO_TOKEN;
const client = new twilio(accountSid, authToken);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Webhook endpoint to handle incoming messages
app.post('/webhook', (req, res) => {
    const incomingMessage = req.body.Body;
    const from = req.body.From;

    console.log('Incoming message:', incomingMessage);

    let replyMessage;

    // Logic to reply to specific messages
    if (incomingMessage.toLowerCase().includes('hello')) {
        replyMessage = 'Hi there! How can I help you today? To pay your latest taxes type "pay" or type "bill" to get your latest bill with all taxes included.';
    } else if (incomingMessage.toLowerCase().includes('pay')) {
        replyMessage = 'Our prices start at $10. For more details, visit our website.';
    } else {
        replyMessage = 'I am sorry, I didn\'t understand that. Can you please rephrase?';
    }

    // Send the reply via Twilio
    client.messages.create({
        body: replyMessage,
        from: 'whatsapp:+14155238886', // From a valid Twilio WhatsApp number
        to: from
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
