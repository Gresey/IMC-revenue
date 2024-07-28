// import React from 'react';
// import { jsPDF } from 'jspdf';

// export default function ReceiptCard({ date, price }) {

//   const downloadInvoice = () => {
//     // Read the image file and convert it to a Base64 string
//     const imgPath = 'ss.png'; // Update with the correct path

//     fetch(imgPath)
//       .then(response => response.blob())
//       .then(blob => {
//         const reader = new FileReader();
//         reader.readAsDataURL(blob);
//         reader.onloadend = () => {
//           const base64data = reader.result;

//           // Create a new PDF
//           const pdf = new jsPDF();

//           // Add the image to the PDF
//           pdf.addImage(base64data, 'PNG', 0, 0, 210, 297); // Assuming A4 size paper

//           // Generate the PDF as a Blob
//           const pdfBlob = pdf.output('blob');

//           // Create a URL for the Blob
//           const url = URL.createObjectURL(pdfBlob);

//           // Create a link element, set its href to the URL, and trigger a click to download
//           const link = document.createElement('a');
//           link.href = url;
//           link.setAttribute('download', 'invoice.pdf'); // Set the filename for download
//           document.body.appendChild(link);
//           link.click();

//           // Clean up
//           document.body.removeChild(link);
//         };
//       })
//       .catch(error => {
//         console.error('Error fetching the image', error);
//       });
//   };

//   return (
//     <div>
//       <div className="card bg-base-100 w-96 shadow-xl">
//         <figure>
//           <img
//             src="hp"
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
import receipt from '../assets/Receipt.png'; // Ensure this path is correct

export default function ReceiptCard({ date }) {
  return (
    
    <div className="card bg-base-100 w-80 h-70  bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 shadow-xl flex flex-col items-center justify-center p-3"> {/* Adjusted width and height */}
     
      <figure>
        <img
          src={receipt}
          alt="Receipt"
          className="h-40 w-80 object-cover" // Ensures the image fits within the card and maintains aspect ratio
        />
      </figure>
      <div className="  card-body text-center mt-4">
        <p className="text-lg text-white font-semibold">Due Date: {date}</p>
      </div>
    </div>
  );
}
