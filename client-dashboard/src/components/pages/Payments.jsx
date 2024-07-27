import React from 'react';
import PaymentCard from '../PaymentCard';

export default function Payments() {
    const paymentOptions = [
        { title: 'Water Tax', imageUrl: 'https://images.pexels.com/photos/67184/pexels-photo-67184.jpeg', redirectUrl: '/payment/water-tax' },
        { title: 'Property Tax', imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg', redirectUrl: '/payment/property-tax' },
        { title: 'Garbage Tax', imageUrl: 'https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg', redirectUrl: '/payment/garbage-tax' },
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
