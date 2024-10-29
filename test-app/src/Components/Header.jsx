import React from 'react'

export const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-indigo-900">Plumbing Co.</div>
          <div className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-900">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-900">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
