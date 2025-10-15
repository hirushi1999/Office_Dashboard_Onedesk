import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        {/* Brand Section */}
        <p className="text-sm text-center sm:text-left">
          © 2025 <span className="text-white font-semibold">Onedesk</span>. All rights reserved.
        </p>

        {/* Divider for small screens */}
        <div className="hidden sm:block h-5 w-px bg-gray-700 mx-4"></div>

        {/* Powered By Section */}
        <p className="text-sm text-center sm:text-right">
          Powered and secured by{" "}
          <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
            Hiru
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
