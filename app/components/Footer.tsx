import Link from "next/link"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-8 dark:bg-zinc-950">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              Dreamworks Infotech is a premier IT consulting firm delivering cutting-edge digital solutions since 2009.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#e53a20]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-600 hover:text-[#e53a20]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/client" className="text-gray-600 hover:text-[#e53a20]">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#e53a20]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#e53a20]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-600 hover:text-[#e53a20]">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/service/information-security" className="text-gray-600 hover:text-[#e53a20]">
                  Information Security
                </Link>
              </li>
              <li>
                <Link href="/service/software-development" className="text-gray-600 hover:text-[#e53a20]">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/service/it-consulting" className="text-gray-600 hover:text-[#e53a20]">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">277 K-5, Kanke, Ranchi, Jharkhand, India 834008</p>
            <p className="text-gray-600 mb-2">651 310 0515</p>
            <p className="text-gray-600 mb-4">support@dwinfotech.in</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#e53a20]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#e53a20]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#e53a20]">
                <LinkedIn size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#e53a20]">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2023 Dreamworks Infotech. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-[#e53a20] text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-[#e53a20] text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

