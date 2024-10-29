import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              123 Plumbing Street
              <br />
              City, State 12345
              <br />
              (555) 123-4567
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-900">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-900">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-900">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-900">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
