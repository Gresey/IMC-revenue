import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsappRegistration from './components/pages/WhatsappRegistration';
import ViewReceipts from './components/pages/ViewReceipts';
import Payments from './components/pages/Payments';
import Home from './components/Home';
import WaterTax from './components/pages/tax/WaterTax';
import PropertyTax from './components/pages/tax/PropertyTax';
import GarbageTax from './components/pages/tax/GarbageTax';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/payment/water-tax" element={<WaterTax />} />
                <Route path="/payment/property-tax" element={<PropertyTax />} />
                <Route path="/payment/garbage-tax" element={<GarbageTax />} />
                <Route path="/whatsapp-registration" element={<WhatsappRegistration />} />
                <Route path="/view-receipts" element={<ViewReceipts />} />
                <Route path="/payments" element={<Payments />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
