import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
            <Link href="julianjohari02@gmail.com" className="block text-gray-400 hover:text-white">julianjohari02@gmail.com</Link>
            <Link href="https://www.linkedin.com/in/julian-johari-b72720262/" className="block text-gray-400 hover:text-white">LinkedIn</Link>
            <Link href="https://satu-x.com/julian/" className="block text-gray-400 hover:text-white">My Website</Link>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Address</h4>
          <p className="text-gray-400">Kuala Lumpur City</p>
          <p className="text-gray-400">Federal Territory of Kuala Lumpur, Malaysia</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Social</h4>
          <div className="space-y-2">
            <Link href="#" className="block text-gray-400 hover:text-white">Twitter</Link>
            <Link href="#" className="block text-gray-400 hover:text-white">Instagram</Link>
            <Link href="#" className="block text-gray-400 hover:text-white">TikTok</Link>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Image src="/Valtflow icon.png" alt="Vaultflow Logo" width={32} height={32} />
          <span className="text-white font-semibold">Vaultflow</span>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        © 2024 SilvaLian ( Julian ). All Rights Reserved.
      </div>
    </footer>
  )
}