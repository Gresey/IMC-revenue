import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentCard({ title, imageUrl, redirectUrl }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(redirectUrl);
    };

    return (
        <div className="card bg-base-100 w-80 h-96 shadow-xl flex flex-col">
            <figure className="flex-shrink-0">
                <img
                    src={imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                    alt={title}
                    className="w-full h-48 object-cover" // Ensures the image covers the space without distortion
                />
            </figure>
            <div className="card-body flex flex-col  h-full p-4">
                <h2 className="card-title text-lg font-bold">{title}</h2>
                <p className="text-sm mt-2 mb-4">If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex justify-end">
                    <button className="btn bg-purple-600 text-white" onClick={handleButtonClick}>Pay Now</button>
                </div>
            </div>
        </div>
    );
}
