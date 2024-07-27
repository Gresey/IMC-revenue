import React from 'react';
import ReceiptCard from '../ReceiptCard';

const generateRandomDate = () => {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
};

const generateRandomPrice = () => {
  return (Math.random() * (500 - 100) + 100).toFixed(2); // Random price between 100 and 500
};

export default function ViewReceipts() {
  const receipts = Array.from({ length: 6 }, () => ({
    date: generateRandomDate(),
    price: generateRandomPrice(),
  }));

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {receipts.map((receipt, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
          <ReceiptCard date={receipt.date} price={receipt.price} />
        </div>
      ))}
    </div>
  );
}
