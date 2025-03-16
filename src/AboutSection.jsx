"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Mail, MapPin, GraduationCap, Briefcase } from "lucide-react"

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("story")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tabs = [
    { id: "story", label: "My Story" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "personal", label: "Personal" },
  ]

  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "TechVision",
      period: "2021 - Present",
      description:
        "Lead the design team in creating user-centered interfaces for enterprise clients. Established design systems and workflows that improved team efficiency by 35%.",
    },
    {
      title: "UI Designer",
      company: "CreativeAgency",
      period: "2018 - 2021",
      description:
        "Designed interfaces for web and mobile applications. Collaborated with developers to ensure pixel-perfect implementation of designs.",
    },
    {
      title: "Graphic Designer",
      company: "DesignStudio",
      period: "2016 - 2018",
      description:
        "Created visual assets for digital and print media. Worked directly with clients to understand their brand vision and translate it into compelling designs.",
    },
  ]

  const education = [
    {
      degree: "Master of Fine Arts in Design",
      institution: "California Institute of Arts",
      period: "2014 - 2016",
      description:
        "Specialized in digital media and interactive design. Thesis focused on typography in responsive web design.",
    },
    {
      degree: "Bachelor of Arts in Graphic Design",
      institution: "University of Creative Arts",
      period: "2010 - 2014",
      description:
        "Graduated with honors. Coursework included typography, color theory, UI/UX design, and digital illustration.",
    },
    {
      degree: "Certificate in Web Development",
      institution: "Tech Academy",
      period: "2013",
      description: "Intensive program covering HTML, CSS, JavaScript, and responsive design principles.",
    },
  ]

  const personalItems = [
    {
      title: "Photography",
      description:
        "I'm an avid street photographer and love capturing urban landscapes and candid moments in my free time.",
      icon: "📷",
    },
    {
      title: "Travel",
      description:
        "I've visited over 20 countries and draw inspiration from different cultures and architectural styles.",
      icon: "✈️",
    },
    {
      title: "Reading",
      description:
        "I enjoy books on design theory, psychology, and science fiction. Currently reading 'Design for the Real World' by Victor Papanek.",
      icon: "📚",
    },
    {
      title: "Rock Climbing",
      description:
        "I started indoor climbing three years ago and recently began exploring outdoor routes. It's a perfect balance to desk work.",
      icon: "🧗",
    },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "story":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate designer and developer with over 7 years of experience creating digital experiences that
              delight users and solve real problems. My journey began with a fascination for the intersection of
              aesthetics and functionality, which led me to pursue formal education in both design and development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              What drives me is the belief that thoughtful design has the power to transform how we interact with
              technology. I specialize in creating clean, intuitive interfaces that prioritize user needs while
              maintaining visual harmony and accessibility.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Throughout my career, I've had the privilege of working with startups, agencies, and enterprise clients
              across various industries. This diverse experience has taught me to adapt my approach to different
              contexts while maintaining a consistent focus on quality and attention to detail.
            </p>
            <div className="pt-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:gap-3 transition-all"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>
          </motion.div>
        )
      case "experience":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-500"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )
      case "education":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{edu.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )
      case "personal":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {personalItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-center mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-purple-600 dark:text-purple-400 font-medium mb-2"
            >
              Get to know me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 mx-auto"
            ></motion.div>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1"
            >
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-3 shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src="src/assets/images/pp2.png"
                      alt="Dipesh Subedi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 rounded-lg border-4 border-purple-200 dark:border-purple-900/30"></div>
                <div className="absolute -z-10 -top-4 -left-4 w-32 h-32 rounded-full border-4 border-blue-200 dark:border-blue-900/30"></div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                    <Mail size={18} />
                  </div>
                  <a
                    href="mailto:hello@johndoe.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    dipeshfitness74@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                    <MapPin size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">MadhyaNepal'7' Lamjung</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                    <GraduationCap size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">MFA in Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                    <Briefcase size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">7+ Years Experience</span>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2"
            >
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {renderTabContent()}
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Years Experience", value: "7+" },
              { label: "Projects Completed", value: "120+" },
              { label: "Happy Clients", value: "50+" },
              { label: "Awards Won", value: "12" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 p-10 rounded-2xl text-white text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-medium italic mb-6">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <cite className="text-lg">— Steve Jobs</cite>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

