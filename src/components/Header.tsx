"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/Valtflow icon.png"
            alt="Vaultflow Logo"
            width={32}
            height={32}
          />
          <span className="text-white font-semibold">Vaultflow</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link className="text-gray-300 hover:text-white" href="#features">
            Features
          </Link>
          <Link className="text-gray-300 hover:text-white" href="#pricing">
            Pricing
          </Link>
          <Link className="text-gray-300 hover:text-white" href="#about">
            About us
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white">
            Download the app
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Talk to an expert
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            <Link
              className="text-gray-300 hover:text-white py-2"
              href="#features"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              className="text-gray-300 hover:text-white py-2"
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              className="text-gray-300 hover:text-white py-2"
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Button
              variant="ghost"
              className="text-white w-full justify-center"
            >
              {" "}
              {/* Centering button text */}
              Download the app
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full justify-center">
              {" "}
              {/* Centering button text */}
              Talk to an expert
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
