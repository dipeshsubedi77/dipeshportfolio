"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("design")

  const skillCategories = [
    {
      id: "design",
      label: "Design",
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Graphic Design", level: 85 },
        { name: "Typography", level: 95 },
        { name: "Brand Identity", level: 80 },
        { name: "Motion Design", level: 75 },
        { name: "Illustration", level: 70 },
      ],
    },
    {
      id: "development",
      label: "Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "Version Control", level: 75 },
      ],
    },
    {
      id: "tools",
      label: "Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Photoshop", level: 90 },
        { name: "Adobe Illustrator", level: 85 },
        { name: "Adobe After Effects", level: 70 },
        { name: "Sketch", level: 80 },
        { name: "InVision", level: 75 },
      ],
    },
  ]

  const activeSkills = skillCategories.find((category) => category.id === activeTab)?.skills || []

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container-center mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            I've developed a diverse set of skills throughout my career, allowing me to create comprehensive design
            solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === category.id
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software Icons */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-center mb-10">Software & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {/* Replace with actual icons or logos */}
            {["Figma", "Photoshop", "Illustrator", "After Effects", "React", "Tailwind CSS"].map((software) => (
              <div key={software} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  {/* Placeholder for software icon */}
                  <div className="text-2xl font-bold text-gray-400">{software.charAt(0)}</div>
                </div>
                <p className="text-sm">{software}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

