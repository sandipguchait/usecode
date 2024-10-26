import React from 'react';
import Logo from '../ui/Logo';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 flex items-center">
              <Logo />
              <h3 className="text-2xl font-bold ml-2 text-gray-800">useCode</h3>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-8">
              <Link href="/about" className="text-gray-800 hover:text-gray-600">About</Link>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
              <Link href="/privacy" className="text-gray-800 hover:text-gray-600">Privacy</Link>
              <Link href="/terms" className="text-gray-800 hover:text-gray-600">Terms</Link>
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-300 text-center text-gray-800">
            <p>&copy; {new Date().getFullYear()} useCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
