import React from 'react';
import AboutImage1 from '../../assets/revenue.png';
import AboutImage2 from '../../assets/User Interface.png';

import Footer from './Footer';
export default function AboutPage() {
  return (
    <div className="p-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-purple-600 p-5">About Our Revenue Management System</h1>

     
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-xl">
          <p className="text-base mb-4 p-4">The revenue department of municipal corporations plays a critical role in ensuring the financial health of urban areas through tax and fee collection. Their work ensures that essential services are funded and maintained efficiently.</p>
          
          <h5 className="text-xl font-bold mt-2 mb-4 ">Challenges</h5>
          <ul className="list-disc ml-6 text-base">
            <li>Inefficiencies in re venue collection leading to potential losses.</li>
            <li>Manual processing errors causing delays and inaccuracies.</li>
            <li>Lack of transparency, resulting in reduced public trust.</li>
          </ul>
          
          <h5 className="text-xl font-bold mt-4 mb-2 ">Need</h5>
          <p className="text-base">A robust revenue management system to significantly enhance the efficiency and accuracy of revenue collection and management, ensuring transparency and timely processing.</p>
        </div>

        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          <img src={AboutImage1} alt="Dashboard" className="w-full h-auto max-w-lg" />
        </div>
      </div>
    

     {/* <img src="path/to/your/image1.jpg" alt="Revenue Management System" className="mb-8 w-full h-auto" /> */}
     <section className="mb-8 p-12">
    <h2 className="text-4xl font-bold mb-4 text-purple-600 ">Features</h2>
    <div className="flex flex-wrap gap-12 justify-center p-7">
        <div className="card bg-gradient-to-br from-purple-400 via-purple-500 to-blue-400 text-white shadow-xl h-96 w-full md:w-1/4">
            <div className="card-body">
                <h2 className="card-title text-white">WhatsApp Interface Integration</h2>
                <ul className="list-disc ml-5">
                 
                    <li>Facilitates secure and easy tax payments directly through WhatsApp.</li>
                    <li>Sends reminders and notifications for upcoming payment deadlines, overdue taxes, and other important updates.</li>
                    <li>Enhances user convenience and reduces the need for physical document handling.</li>
                </ul>
            </div>
        </div>
        <div className="card bg-gradient-to-br from-purple-400 via-purple-500 to-blue-400 text-white shadow-xl h-96 w-full md:w-1/4">
            <div className="card-body">
                <h2 className="card-title text-white">Admin Dashboard</h2>
                <ul className="list-disc ml-5">

                    <li>Heatmap visualization of tax collection efficiency.</li>
                    <li>Provides real-time insights into revenue collection from various sources (property tax, water tax, garbage collection tax, etc.).</li>
                    <li>Automates tax assessments and sends notifications to citizens regarding their tax obligations.</li>
                </ul>
            </div>
        </div>
        <div className="card bg-gradient-to-br from-purple-400 via-purple-500 to-blue-400 text-white shadow-xl h-96 w-full md:w-1/4">
            <div className="card-body">
                <h2 className="card-title text-white">UTI ID Integration</h2>
                <ul className="list-disc ml-5">
                    <li>One ID for all tax payments simplifies the process & simplifies record-keeping and reporting.</li>
                    <li>Transfer existing tax IDs to the new UTI ID system.</li>
                    <li>Simplified system reduces manual errors and inefficiencies.</li>
                </ul>
            </div>
        </div>
    </div>
</section>


<section className="mb-8">
    <h1 className="text-4xl font-bold mb-4 text-purple-600 text-center">Flowgraph</h1>
    <div className="flex items-center">
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <img src={AboutImage2} alt="Dashboard" className="w-full h-auto" />
        </div>
        <div className=" md:w-1/2 p-4 card bg-base-100 shadow-xl rounded-lg">
            <h3 className="font-bold">Centralized Data Management and Service Integration</h3>
            <br />
            <p className="text-base">
                The system integrates data from three departments (Property, Water, and Garbage Collection Tax) into a centralized database, which is accessed through a web server
                providing user and admin interfaces, and enhanced by backend services including AI. User interactions are facilitated through a WhatsApp Chat Bot, ensuring efficient, real-time communication and service delivery.
            </p>
        </div>
    </div>
</section>
      {/* <img src="path/to/your/image2.jpg" alt="Dashboard" className="mb-8 w-full h-auto" /> */}
      
     

      <section className="mb-8">
  <div className="card bg-base-100 shadow-xl p-6 rounded-lg">
    <h2 className="text-4xl font-bold mb-4 text-purple-600">Objectives</h2>
    <ul className="list-disc ml-5">
      <li>Create an automated tax assessment system to accurately calculate and notify citizens of their tax obligations.</li>
      <li>Consider property tax, water tax, garbage collection tax etc. for tax calculation.</li>
      <li>Implement a revenue reporting system to monitor collection performance and identify areas for revenue collection.</li>
      <li>Design a user-friendly interface for citizens to access (through proper authorization) their tax information, make payments, and receive prior notifications.</li>
      <li>Integrate chatbot for the tax information and provide the reports as per pre-defined FAQs.</li>
      <li>Citizens can download tax statements, receipts, and other certificates from their login by identifying their property (if owned multiple properties).</li>
      <li>Develop an interface for online payment to facilitate easy and secure tax and fee payments (non-functional) and display the success/failure of transaction.</li>
    </ul>
  </div>
</section>

<div>
            {/* Other content */}
            <Footer />
        </div>
    </div>
  );
}
