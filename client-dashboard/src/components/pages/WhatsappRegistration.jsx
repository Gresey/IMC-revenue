import React, { useState } from 'react';
import axios from 'axios';

export default function WhatsappRegistration() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleGetOtp = async (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            number: number
        };

        try {
            const response = await axios.post('http://192.168.237.246:5000/send-otp', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Optionally, handle the response data
            console.log(response.data);
            setIsOtpSent(true);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    const handleSubmitOtp = async (e) => {
        e.preventDefault();

        const otpData = {
            name: name,
            number: number,
            otp: otp
        };

        try {
            const response = await axios.post('http://192.168.237.246:5000/send-otp', otpData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Optionally, handle the response data
            console.log('done');
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="name"
                                    className="input input-bordered"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">WhatsApp Number</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="number"
                                    className="input input-bordered"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    required
                                />
                            </div>
                            {!isOtpSent ? (
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" onClick={handleGetOtp}>Get Otp</button>
                                </div>
                            ) : (
                                <div className="form-control mt-6">
                                    <label className="label">
                                        <span className="label-text">OTP</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        className="input input-bordered"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                    <button className="btn btn-primary mt-4" onClick={handleSubmitOtp}>Submit</button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
