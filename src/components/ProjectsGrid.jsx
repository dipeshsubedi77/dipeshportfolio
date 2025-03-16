"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./ProjectCard"

const ProjectsGrid = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeFilter, setActiveFilter] = useState("all")

  // Extract unique categories from projects
  const categories = ["all", ...new Set(projects.map((project) => project.category))]

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter, projects])

  return (
    <section className="py-20">
      <div className="container-center mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">My Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsGrid

