import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between gap-8">
        {/* Products Column */}
        <div className="min-w-48">
          <h3 className="text-white text-lg font-semibold mb-6">Products</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bottles</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electric Appliances</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hair Care</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookware</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lights</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Heaters & Geysers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fans & AC</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tableware (Spoons, forks)</a></li>
          </ul>
        </div>

        {/* Who we are Column */}
        <div className="min-w-36">
          <h3 className="text-white text-lg font-semibold mb-6">Who we are</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About our brand</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact us</a></li>
          </ul>
        </div>

        {/* Appliance Care Column */}
        <div className="min-w-36">
          <h3 className="text-white text-lg font-semibold mb-6">Appliance Care</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">My Products</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Complaints</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Servicing</a></li>
          </ul>
        </div>

        {/* Catalog Column */}
        <div className="min-w-24">
          <h3 className="text-white text-lg font-semibold mb-6">Catalog</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Downloads</a></li>
          </ul>
        </div>

        {/* Other Column */}
        <div className="min-w-36">
          <h3 className="text-white text-lg font-semibold mb-6">Other</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Term & Condition</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-500 text-sm">
          ©2024 Balajee Home Appliances Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Footer
