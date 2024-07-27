import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsappRegistration from './components/pages/WhatsappRegistration';
import ViewReceipts from './components/pages/ViewReceipts';
import Payments from './components/pages/Payments';
import Home from './components/Home';
import AboutPage from './components/pages/AboutPage';
import WaterTax from './components/pages/tax/WaterTax';
import PropertyTax from './components/pages/tax/PropertyTax';
import GarbageTax from './components/pages/tax/GarbageTax';
import Login from './components/pages/Login';
import { ToastContainer } from 'react-toastify';
import { auth } from './components/firebaseConfig';
// import ChatbotComponent from './components/chatbot/ChatbotComponent';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <Router>
            <ToastContainer />
            {user ? (
                <>
                    <Navbar />
                    {/* <ChatbotComponent/> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/payment/water-tax" element={<WaterTax />} />
                        <Route path="/payment/property-tax" element={<PropertyTax />} />
                        <Route path="/payment/garbage-tax" element={<GarbageTax />} />
                        <Route path="/whatsapp-registration" element={<WhatsappRegistration />} />
                        <Route path="/view-receipts" element={<ViewReceipts />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/AboutPage" element={<AboutPage />} />
                        {/* Add other routes as needed */}
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="*" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;
