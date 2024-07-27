const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Function to create a PDF invoice and save locally
const createInvoice = (invoiceData) => {
    return new Promise((resolve, reject) => {
        // Create a new PDF document
        const doc = new PDFDocument();

        // Create a write stream to a local file
        const localFilePath = path.join(__dirname, `${invoiceData.invoiceNumber}.pdf`);
        const writeStream = fs.createWriteStream(localFilePath);
        doc.pipe(writeStream);

        // Add content to the PDF
        doc.fontSize(20).text('Invoice', { align: 'center' });
        doc.moveDown();
        doc.fontSize(12).text(`Date: ${invoiceData.date}`);
        doc.text(`Invoice Number: ${invoiceData.invoiceNumber}`);
        doc.moveDown();

        // Add table headers
        doc.fontSize(12).text('Description', { width: 200, continued: true });
        doc.text('Quantity', { width: 100, continued: true, align: 'center' });
        doc.text('Price', { width: 100, align: 'right' });
        doc.moveDown();

        // Add table rows
        invoiceData.items.forEach(item => {
            doc.fontSize(10).text(item.description, { width: 200, continued: true });
            doc.text(item.quantity, { width: 100, continued: true, align: 'center' });
            doc.text(`$${item.price}`, { width: 100, align: 'right' });
            doc.moveDown();
        });

        // Add total
        doc.moveDown();
        doc.fontSize(12).text(`Total: $${invoiceData.total}`, { align: 'right' });

        // Finalize the PDF and end the stream
        doc.end();

        writeStream.on('finish', () => {
            console.log(`PDF saved locally as ${localFilePath}`);
            resolve(`PDF saved locally as ${localFilePath}`);
        });

        writeStream.on('error', reject);
    });
};

// Example usage
const exampleInvoiceData = {
    date: '2024-07-27',
    invoiceNumber: 'INV-12345',
    items: [
        { description: 'Item 1', quantity: 2, price: 30 },
        { description: 'Item 2', quantity: 1, price: 20 },
    ],
    total: 80,
};

createInvoice(exampleInvoiceData)
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
