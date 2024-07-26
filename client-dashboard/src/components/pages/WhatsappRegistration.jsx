import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WhatsappRegistration() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleGetOtp = async (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      phoneNumber: number,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/send-otp",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Optionally, handle the response data
      console.log(response.data);
      setIsOtpSent(true);
      toast.success("OTP sent successfully!", {
        autoClose: 3000,
        closeOnClick: true,
      });
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to send OTP!", {
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();

    const otpData = {
      phoneNumber: number,
      otp: otp,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/verify-otp",
        otpData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Optionally, handle the response data
      console.log("done");
      console.log(response.data);
      toast.success("OTP Verified Successfully!", {
        autoClose: 3000,
        closeOnClick: true,
      });
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to verify OTP!", {
        autoClose: 3000,
        closeOnClick: true,
      });
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
                  <button className="btn btn-primary" onClick={handleGetOtp}>
                    Get Otp
                  </button>
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
                  <button
                    className="btn btn-primary mt-4"
                    onClick={handleSubmitOtp}
                  >
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
