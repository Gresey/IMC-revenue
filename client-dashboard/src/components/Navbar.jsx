import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebaseConfig'; // Import Firebase auth

export default function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/whatsapp-registration">WhatsApp Registration</Link></li>
                            <li><Link to="/view-receipts">View Receipts</Link></li>
                            <li><Link to="/payments">Payments</Link></li>
                            <li><Link to="/admin">Admin Dashboard</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="btn btn-ghost text-xl">IMC Indore</Link>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center">
                            <img
                                src={user.photoURL}
                                alt={user.displayName}
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="mr-4">{user.displayName}</span>
                            <button
                                className="btn btn-ghost"
                                onClick={() => auth.signOut()}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="btn btn-ghost">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
}
