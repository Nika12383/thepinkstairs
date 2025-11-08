"use client";

import { Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/thepinkstairs.official/", icon: Instagram },
    { name: "Facebook", href: "https://facebook.com/thepinkstairs", icon: Facebook },
    { name: "Email", href: "mailto:info@thepinkstairs.org", icon: Mail },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-pink-50 border-t border-pink-200 text-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand and mission */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-pink-600">The Pink Stairs</h3>
          <p className="max-w-sm mt-2 text-gray-600">
            Empowering young women and children through education, art, and community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-pink-600 mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-lg font-semibold text-pink-600 mb-3">Connect</h4>
          <div className="flex space-x-5">
            {socials.map(({ name, href, icon: Icon }) => (
              <motion.div key={name} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <Icon size={22} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-pink-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} The Pink Stairs. All rights reserved.
      </div>
    </footer>
  );
}
