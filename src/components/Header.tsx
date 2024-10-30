import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export function Header() {
  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/Valtflow icon.png" alt="Vaultflow Logo" width={32} height={32} />
          <span className="text-white font-semibold">Vaultflow</span>
        </div>
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
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white">
            Download the app
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Talk to an expert
          </Button>
        </div>
      </div>
    </nav>
  )
}