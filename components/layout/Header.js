"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-3xl font-bold text-white">useCode</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-yellow-300 transition duration-300">Home</Link>
            <Link href="/topics" className="text-white hover:text-yellow-300 transition duration-300">Topics</Link>
            <Link href="/about" className="text-white hover:text-yellow-300 transition duration-300">About</Link>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <nav className="flex flex-col space-y-2 px-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 py-2 text-lg">Home</Link>
              <Link href="/topics" className="text-gray-600 hover:text-gray-900 py-2 text-lg">Topics</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 py-2 text-lg">About</Link>
            </nav>
          </div>
        )}
      </header>
    )
}

export default Header;
