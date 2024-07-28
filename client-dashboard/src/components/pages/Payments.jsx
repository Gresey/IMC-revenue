import React from 'react';
import PaymentCard from '../PaymentCard';

export default function Payments() {
    // Define payment options with titles, image URLs, and redirect URLs
    const paymentOptions = [
        { title: 'Water Tax', imageUrl: 'https://images.pexels.com/photos/67184/pexels-photo-67184.jpeg', redirectUrl: '/payment/water-tax' },
        { title: 'Property Tax', imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg', redirectUrl: '/payment/property-tax' },
        { title: 'Garbage Tax', imageUrl: 'https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg', redirectUrl: '/payment/garbage-tax' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-12">
            <h1 className="text-3xl font-bold text-center mb-8">Tax Payment</h1> {/* Heading for the section */}
            <div className="flex justify-center gap-5 flex-wrap">
                {paymentOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/3 md:w-1/4 p-2"> {/* Responsive width and padding */}
                        <PaymentCard {...option} />
                    </div>
                ))}
            </div>
        </div>
    );
}
