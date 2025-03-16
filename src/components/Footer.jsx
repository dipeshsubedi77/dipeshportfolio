"use client"

import { Link } from "react-router-dom"
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-playfair text-2xl font-bold tracking-tight">
              John<span className="text-gray-500 dark:text-gray-400">Doe</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Creating beautiful, functional designs that help businesses stand out and connect with their audience.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>

              <a
                href="mailto:hello@yourname.com"
                className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/ui-design"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/graphic-design"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/brand-identity"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/illustration"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Illustration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-300 mb-2">San Francisco, California</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <a
                  href="mailto:hello@yourname.com"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  hello@yourname.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="tel:+11234567890"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

