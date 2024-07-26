import React from 'react';

export default function PropertyTax() {
    const name = 'Mukund Solanki';
    const uid = '6969696';
    const amount = '200'; // Amount in rupees

    const handlePayment = () => {
        const options = {
            key: 'rzp_test_HSfViGruO1HmgB', // Replace with your Razorpay key ID
            amount: amount * 100, // Razorpay amount is in paise, so multiply by 100
            currency: 'INR',
            name: 'IMC Indore',
            description: 'Property Tax Payment',
            handler: function (response) {
                // This function will handle the response after the payment is successful
                console.log(response);
                alert('Payment Successful!');
            },
            prefill: {
                name: name,
                email: 'mukund.dev665@gmail.com',
                contact: '7440399548',
            },
            theme: {
                color: '#3399cc'
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-5xl font-bold">{name}</h1>
                <h2 className="text-2xl mt-4">UID: {uid}</h2>
                <h2 className="text-2xl mt-4">Amount: ₹{amount}</h2>
                <div className="mt-6">
                    <button type="button" className="btn btn-primary" onClick={handlePayment}>Pay Now</button>
                </div>
            </div>
        </div>
    );
}
