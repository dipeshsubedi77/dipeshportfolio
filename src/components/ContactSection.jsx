"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully! I will get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)

      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-custom mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out through any of the following channels. I typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a
                    href="mailto:hello@yourname.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    hello@yourname.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">San Francisco, California</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium flex items-center gap-2 hover:gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
              </motion.button>

              {/* Form Status */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

