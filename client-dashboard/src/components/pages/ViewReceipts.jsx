// import React from 'react';
// import ReceiptCard from '../ReceiptCard';

// const generateRandomDate = () => {
//   const start = new Date(2022, 0, 1);
//   const end = new Date();
//   const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
// };

// const generateRandomPrice = () => {
//   return (Math.random() * (500 - 100) + 100).toFixed(2); // Random price between 100 and 500
// };

// export default function ViewReceipts() {
//   const receipts = Array.from({ length: 1 }, () => ({
//     date: generateRandomDate(),
//     price: generateRandomPrice(),
//   }));

//   return (
//     <div className="flex flex-wrap justify-center gap-4">
//       {receipts.map((receipt, index) => (
//         <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
//           <ReceiptCard date={receipt.date} price={receipt.price} />
//         </div>
//       ))}
//     </div>
//   );
// }
import React from 'react';
import ReceiptCard from '../ReceiptCard';

function generateRandomDate() {
  const start = new Date(2024, 0, 1);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}

// Helper function to create receipt data
const createReceipts = (count) => Array.from({ length: count }, () => ({
  date: generateRandomDate(),
}));

export default function ViewReceipts() {
  // Generate receipts for different categories
  const waterTaxReceipts = createReceipts(1);
  const propertyTaxReceipts = createReceipts(1);
  const garbageReceipts = createReceipts(1);

  return (
    <div className="min-h-screen bg-gray-100 p-9">
       <div><h1 className='text-3xl font-bold text-center mb-8'>Receipt History</h1></div>
      <div className="flex justify-center gap-4 p-4">
        {/* Container for all cards in one row */}
        
        <div className="flex flex-col items-center w-1/3 px-2">
         
          {waterTaxReceipts.map((receipt, index) => (
            <ReceiptCard key={index} date={receipt.date} />
          ))}
        </div>
        
        <div className="flex flex-col items-center w-1/3 px-2">
          
          {propertyTaxReceipts.map((receipt, index) => (
            <ReceiptCard key={index} date={receipt.date} />
          ))}
        </div>
        
        <div className="flex flex-col items-center w-1/3 px-2">
         
          {garbageReceipts.map((receipt, index) => (
            <ReceiptCard key={index} date={receipt.date} />
          ))}
        </div>
      </div>
    </div>
  );
}
