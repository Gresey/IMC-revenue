const twilio = require('twilio');
const accountSid = process.env.TWILLIO_SID;
const authToken = process.env.TWILLIO_TOKEN;
const client = new twilio(accountSid, authToken);

// Function to send a WhatsApp message
const sendWhatsAppMessage = async (to, body) => {
    try {
        const message = await client.messages.create({
            body: body, // Message body
            from: 'whatsapp:+14155238886', // From a valid Twilio WhatsApp number
            to: `whatsapp:${to}` // The recipient's WhatsApp number
        });
        console.log('Message sent:', message.sid);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};


const sendWhatsAppMessageImage = async (to, body, mediaUrl) => {
    try {
        const message = await client.messages.create({
            body: body, // Message body
            from: 'whatsapp:+14155238886', // From a valid Twilio WhatsApp number
            to: `whatsapp:${to}`, // The recipient's WhatsApp number
            mediaUrl: mediaUrl // URL of the media (photo)
        });
        console.log('Message sent:', message.sid);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

// Example usage
sendWhatsAppMessageImage(
    '+919669384428',
    'Hello, this is a test message from Twilio WhatsApp with a photo!',
    'https://storage.googleapis.com/' // Replace with your photo URL
);


// sendWhatsAppMessage('+919669384428', 'Hello, this is a test message from Twilio WhatsApp!');
