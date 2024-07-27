// import React from 'react';

// export default function ReceiptCard({ date, price }) {

//   const downloadInvoice = () => {
//     // Simulate a PDF blob (you can replace this with your actual PDF blob data)
//     const pdfBlob = new Blob(
//       [`
//       %PDF-1.4
//       1 0 obj
//       << /Type /Catalog /Pages 2 0 R >>
//       endobj
//       2 0 obj
//       << /Type /Pages /Kids [3 0 R] /Count 1 >>
//       endobj
//       3 0 obj
//       << /Type /Page /Parent 2 0 R /MediaBox [0 0 300 144] /Contents 4 0 R >>
//       endobj
//       4 0 obj
//       << /Length 55 >>
//       stream
//       BT
//       /F1 24 Tf
//       100 100 Td
//       (Hello, PDF!) Tj
//       ET
//       endstream
//       endobj
//       5 0 obj
//       << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
//       endobj
//       xref
//       0 6
//       0000000000 65535 f
//       0000000010 00000 n
//       0000000053 00000 n
//       0000000104 00000 n
//       0000000175 00000 n
//       0000000306 00000 n
//       trailer
//       << /Size 6 /Root 1 0 R >>
//       startxref
//       390
//       %%EOF
//       `], 
//       { type: 'application/pdf' }
//     );

//     // Create a URL for the blob
//     const url = window.URL.createObjectURL(pdfBlob);

//     // Create a link element, set its href to the URL, and trigger a click to download
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'invoice.pdf'); // Set the filename for download
//     document.body.appendChild(link);
//     link.click();

//     // Clean up
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <div className="card bg-base-100 w-96 shadow-xl">
//         <figure>
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//             alt="Shoes"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             Date: {date}
//             <button
//               onClick={downloadInvoice}
//               className="ml-4 px-2 py-1 text-white bg-secondary hover:bg-secondary-dark rounded"
//             >
//               History
//             </button>
//           </h2>
//           <p>Price: {price}</p>
//           <div className="card-actions justify-end">
//             <div className="badge badge-outline">Paid</div>
//             <div className="badge badge-outline">No Due</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { jsPDF } from 'jspdf';

export default function ReceiptCard({ date, price }) {

  const downloadInvoice = () => {
    // Read the image file and convert it to a Base64 string
    const imgPath = 'ss.png'; // Update with the correct path

    fetch(imgPath)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;

          // Create a new PDF
          const pdf = new jsPDF();

          // Add the image to the PDF
          pdf.addImage(base64data, 'PNG', 0, 0, 210, 297); // Assuming A4 size paper

          // Generate the PDF as a Blob
          const pdfBlob = pdf.output('blob');

          // Create a URL for the Blob
          const url = URL.createObjectURL(pdfBlob);

          // Create a link element, set its href to the URL, and trigger a click to download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'invoice.pdf'); // Set the filename for download
          document.body.appendChild(link);
          link.click();

          // Clean up
          document.body.removeChild(link);
        };
      })
      .catch(error => {
        console.error('Error fetching the image', error);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Date: {date}
            <button
              onClick={downloadInvoice}
              className="ml-4 px-2 py-1 text-white bg-secondary hover:bg-secondary-dark rounded"
            >
              History
            </button>
          </h2>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Paid</div>
            <div className="badge badge-outline">No Due</div>
          </div>
        </div>
      </div>
    </div>
  );
}
