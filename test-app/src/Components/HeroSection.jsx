import React from 'react'

export const HeroSection = () => {
  return (
    <div className="bg-indigo-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">
          Professional Plumbing Services
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Reliable plumbing solutions for your home and business
        </p>
        <button className="bg-indigo-900 text-white px-6 py-2 rounded-lg hover:bg-indigo-800">
          Get Started
        </button>
      </div>
    </div>
  );
}
