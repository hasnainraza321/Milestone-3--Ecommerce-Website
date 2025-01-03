import React from 'react';

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/banner.png"
          alt="Pizza and promotional banner"
           className="w-full h-full object-cover"
        />
      </div>

      {/* Text and Button */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-base sm:text-lg text-center mb-6 max-w-xl font-medium">
          Shop Now and Get 20% Off for the New Year Offer
        </p>
        <button
          type="button"
          className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
          Exciting Deals at 12 PM!
        </button>
      </div>
    </div>
  );
}
