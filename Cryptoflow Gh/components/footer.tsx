import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  console.log("Footer component rendered")

  const quickLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Buy Crypto", href: "/buy" },
    { name: "Sell Crypto", href: "/sell" },
    { name: "Gift Cards", href: "/gift-cards" },
    { name: "Current Rates", href: "/rates" },
    { name: "Become Trader", href: "/trader" },
  ]

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ]

  return (
    <footer className="bg-crypto-navy dark:bg-crypto-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-crypto-green">
                <span className="text-white font-bold text-lg">CF</span>
              </div>
              <span className="text-xl font-bold text-crypto-green">
                Crypto Flow
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The most reliable platform for buying and selling cryptocurrencies and gift cards. 
              Trusted by thousands across Ghana and Africa.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="h-4 w-4 text-crypto-green" />
              <span>cryptoflowgh@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-crypto-green">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-crypto-green transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-crypto-green">Support</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-crypto-green transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-crypto-green">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-crypto-green/20 hover:bg-crypto-green transition-colors"
                  >
                    <Icon className="h-5 w-5 text-crypto-green hover:text-white" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Stay updated with the latest crypto trends, trading tips, and platform updates.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Crypto Flow. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Trusted by 10,000+ users across Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}