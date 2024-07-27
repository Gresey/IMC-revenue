import React from 'react';

export default function Home() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold">IMC Indore</h1>
            <p className="mb-5">
              A sustainable future for Indore. Stay updated, pay taxes, and access services seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
