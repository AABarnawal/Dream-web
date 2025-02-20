"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ThemeToggle } from "./ThemeToggle"
import { useTheme } from "next-themes"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Service", href: "/services" },
    { name: "Career", href: "/career" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", updateScrolled)
    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 dark:bg-zinc-950/70 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative w-48 h-16">
            <Image
              src={resolvedTheme === "dark" ? "/assets/DW_dark.webp" : "/assets/DW_light.webp"}
              alt="Dreamworks Infotech Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-black dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors group ${
                    pathname === item.href ? "font-semibold" : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 dark:bg-red-400 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 px-4 text-black dark:text-white hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  pathname === item.href ? "font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header

