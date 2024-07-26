import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentCard({ title, imageUrl, redirectUrl }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(redirectUrl);
    };

    return (
        <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
                <img
                    src={imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleButtonClick}>Pay Now</button>
                </div>
            </div>
        </div>
    );
}
