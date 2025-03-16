"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, Github } from "lucide-react"
import { motion } from "framer-motion"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-20 right-[10%] w-72 h-72 rounded-full bg-purple-200 dark:bg-purple-900/20 blur-3xl opacity-0 transition-opacity duration-1000 ease-out ${isVisible ? "opacity-60" : ""}`}
        ></div>
        <div
          className={`absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-blue-200 dark:bg-blue-900/20 blur-3xl opacity-0 transition-opacity duration-1000 delay-300 ease-out ${isVisible ? "opacity-60" : ""}`}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container-center mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center md:text-left">
            <div
              className={`space-y-3 transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                Full Stack Developer
              </motion.p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Creating digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-400">
                  experiences
                </span>{" "}
                that matter
              </h1>
            </div>

            <p
              className={`text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 transition-all duration-700 delay-150 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              I design and build applications that are not only beautiful but also functional and accessible.
              Specializing in modern web technologies and typography-focused design.
            </p>

            <div
              className={`flex flex-wrap justify-center md:justify-start gap-4 transition-all duration-700 delay-300 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium flex items-center gap-2 hover:gap-3 transition-all group"
              >
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium flex items-center gap-2 hover:gap-3 transition-all hover:border-gray-900 dark:hover:border-gray-300"
              >
                Resume
                <Download size={18} />
              </a>

              <a
                href="https://github.com/dipeshsubedi77"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium flex items-center gap-2 hover:gap-3 transition-all hover:border-gray-900 dark:hover:border-gray-300"
              >
                GitHub
                <Github size={18} />
              </a>
            </div>

            <div
              className={`pt-6 transition-all duration-700 delay-500 ease-out text-center md:text-left ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by companies like</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-8 items-center opacity-70">
                <div className="h-8 w-auto">
                  <svg
                    className="h-full w-auto text-gray-800 dark:text-gray-200"
                    viewBox="0 0 124 34"
                    fill="currentColor"
                  >
                    <path d="M17 34C7.6 34 0 26.4 0 17C0 7.6 7.6 0 17 0C26.4 0 34 7.6 34 17C34 26.4 26.4 34 17 34ZM17 4C9.8 4 4 9.8 4 17C4 24.2 9.8 30 17 30C24.2 30 30 24.2 30 17C30 9.8 24.2 4 17 4Z" />
                    <path d="M52.1 25.5H47.8V8.5H52.1V25.5ZM47.6 4.4C47.6 3.1 48.7 2 50 2C51.3 2 52.4 3.1 52.4 4.4C52.4 5.7 51.3 6.8 50 6.8C48.7 6.8 47.6 5.7 47.6 4.4Z" />
                    <path d="M62.3 26C58.5 26 55.8 23.1 55.8 19.3C55.8 15.5 58.5 12.6 62.3 12.6C66.1 12.6 68.8 15.5 68.8 19.3C68.8 23.1 66.1 26 62.3 26ZM62.3 16.3C60.8 16.3 59.8 17.5 59.8 19.3C59.8 21.1 60.8 22.3 62.3 22.3C63.8 22.3 64.8 21.1 64.8 19.3C64.8 17.5 63.8 16.3 62.3 16.3Z" />
                    <path d="M83.3 12.6C80.9 12.6 79.3 13.7 78.5 15.5V13H74.5V25.5H78.5V19.1C78.5 17.3 79.7 16.3 81.2 16.3C82.7 16.3 83.7 17.3 83.7 19.1V25.5H87.7V18.1C87.7 14.7 86 12.6 83.3 12.6Z" />
                    <path d="M105.9 13H102.1L98.9 21.7L95.7 13H91.7L97.1 25.5H100.7L106.1 13H105.9Z" />
                    <path d="M123.9 18.9C123.9 14.7 120.8 12.6 117.4 12.6C113.8 12.6 110.5 15.1 110.5 19.3C110.5 23.5 113.8 26 117.4 26C120.2 26 122.6 24.5 123.6 22.1H119.6C119.2 22.7 118.4 23.1 117.4 23.1C116 23.1 114.9 22.3 114.5 20.9H123.9C123.9 20.1 123.9 19.5 123.9 18.9ZM114.7 18.1C115.1 16.7 116 15.9 117.4 15.9C118.8 15.9 119.7 16.7 120.1 18.1H114.7Z" />
                  </svg>
                </div>
                <div className="h-5 w-auto">
                  <svg
                    className="h-full w-auto text-gray-800 dark:text-gray-200"
                    viewBox="0 0 124 24"
                    fill="currentColor"
                  >
                    <path d="M24 12C24 5.4 18.6 0 12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z" />
                    <path d="M36 20H40V4H36V20Z" />
                    <path d="M56 4H52V12.7L46 4H42V20H46V11.3L52 20H56V4Z" />
                    <path d="M68 16.7C66.8 16.7 66 15.9 66 14.7V14.3C66 13.1 66.8 12.3 68 12.3H72V10.3C72 9.1 71.2 8.3 70 8.3C68.8 8.3 68 9.1 68 10.3H64C64 6.9 66.4 4.7 70 4.7C73.6 4.7 76 6.9 76 10.3V20H72V18.3C71.2 19.5 69.6 20.3 68 20.3C65.6 20.3 64 18.7 64 16.3V16C64 13.9 65.6 12.3 68 12.3V16.7Z" />
                    <path d="M88 4H84V5.7C83.2 4.5 81.6 3.7 80 3.7C76.4 3.7 74 6.7 74 10.3V13.7C74 17.3 76.4 20.3 80 20.3C81.6 20.3 83.2 19.5 84 18.3V20H88V4ZM80 16.7C78.4 16.7 78 15.1 78 13.7V10.3C78 8.9 78.4 7.3 80 7.3C81.6 7.3 82 8.9 82 10.3V13.7C82 15.1 81.6 16.7 80 16.7Z" />
                    <path d="M96 8.3V20H92V8.3H90V4.7H92V0.7H96V4.7H98V8.3H96Z" />
                    <path d="M110 4H106V5.7C105.2 4.5 103.6 3.7 102 3.7C98.4 3.7 96 6.7 96 10.3V13.7C96 17.3 98.4 20.3 102 20.3C103.6 20.3 105.2 19.5 106 18.3V20H110V4ZM102 16.7C100.4 16.7 100 15.1 100 13.7V10.3C100 8.9 100.4 7.3 102 7.3C103.6 7.3 104 8.9 104 10.3V13.7C104 15.1 103.6 16.7 102 16.7Z" />
                    <path d="M124 10.3C124 6.9 121.6 4.7 118 4.7C114.4 4.7 112 6.9 112 10.3V13.7C112 17.1 114.4 19.3 118 19.3C121.6 19.3 124 17.1 124 13.7V10.3ZM118 15.7C116.8 15.7 116 14.9 116 13.7V10.3C116 9.1 116.8 8.3 118 8.3C119.2 8.3 120 9.1 120 10.3V13.7C120 14.9 119.2 15.7 118 15.7Z" />
                  </svg>
                </div>
                <div className="h-6 w-auto">
                  <svg
                    className="h-full w-auto text-gray-800 dark:text-gray-200"
                    viewBox="0 0 124 28"
                    fill="currentColor"
                  >
                    <path d="M26.8 12.6H13.4V15.4H26.8V12.6Z" />
                    <path d="M26.8 19.6H13.4V22.4H26.8V19.6Z" />
                    <path d="M13.4 5.6H26.8V8.4H13.4V5.6Z" />
                    <path d="M7.8 5.6H0V22.4H7.8C9.8 22.4 11.2 21 11.2 19V9C11.2 7 9.8 5.6 7.8 5.6ZM7.8 19H3.6V9H7.8V19Z" />
                    <path d="M47.9 5.6H41.5L37.5 12.5L33.5 5.6H27.1L34.7 17.8V22.4H40.3V17.8L47.9 5.6Z" />
                    <path d="M49 5.6V22.4H63.8V19H52.6V15.4H61.8V12H52.6V9H63.8V5.6H49Z" />
                    <path d="M81.3 5.6H77.1L69.5 22.4H73.5L75.1 19H83.3L84.9 22.4H88.9L81.3 5.6ZM76.7 15.4L79.2 9.8L81.7 15.4H76.7Z" />
                    <path d="M97.4 15.4C99.4 15.4 100.8 14 100.8 12V9C100.8 7 99.4 5.6 97.4 5.6H89.6V22.4H93.2V15.4H94.8L98.8 22.4H103L98.2 14.6C97.8 15 97.6 15.4 97.4 15.4ZM97.2 12H93.2V9H97.2V12Z" />
                    <path d="M107.3 5.6H103.7V22.4H107.3V5.6Z" />
                    <path d="M123.3 5.6H119.7V14.8L112.1 5.6H108.5V22.4H112.1V13.2L119.7 22.4H123.3V5.6Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div
            className={`relative transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-10 opacity-0 rotate-3"}`}
          >
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  {/* Replace with your actual image */}
                  <img
                    src="src/assets/images/pp2.png"
                    alt="Portrait of John Doe"
                    className="w-full h-full object-cover"
                  />

                  {/* Animated overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 text-white">
                      <div className={`w-3 h-3 rounded-full bg-green-500 animate-pulse`}></div>
                      <p className="font-medium">Available for projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 rounded-lg border-4 border-purple-200 dark:border-purple-900/30"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 rounded-full border-4 border-blue-200 dark:border-blue-900/30"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

