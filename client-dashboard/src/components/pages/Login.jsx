// src/components/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate('/');
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card bg-base-100  w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title ">Login</h2>
                    <button className="btn bg-purple-400" onClick={handleGoogleLogin}>Login with Google</button>
                </div>
            </div>
        </div>
    );
}
