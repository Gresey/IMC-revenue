import React from 'react';
import PaymentCard from '../PaymentCard';

export default function Payments() {
    const paymentOptions = [
        { title: 'Water Tax', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp', redirectUrl: '/payment/water-tax' },
        { title: 'Property Tax', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp', redirectUrl: '/payment/property-tax' },
        { title: 'Garbage Tax', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp', redirectUrl: '/payment/garbage-tax' },
    ];

    return (
        <div className="flex justify-center gap-4 flex-wrap">
            {paymentOptions.map((option, index) => (
                <div key={index} className="w-full sm:w-1/3">
                    <PaymentCard {...option} />
                </div>
            ))}
        </div>
    );
}
