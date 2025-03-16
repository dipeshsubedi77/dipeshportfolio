"use client"

import { useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, User, Tag, ExternalLink, Github } from "lucide-react"

const ProjectDetail = ({ projects }) => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    if (!project) {
      navigate("/projects")
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [project, navigate])

  if (!project) return null

  return (
    <div className="pt-20 pb-20">
      <div className="container-custom mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white mb-8 group transition-colors"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-sm font-medium px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 rounded-full">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{project.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{project.client}</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag size={18} />
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-sm">
                    {tag}
                    {index < project.tags.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-4 max-w-4xl mx-auto mb-12">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                <ExternalLink size={18} />
                View Live Project
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium flex items-center gap-2 hover:gap-3 transition-all hover:border-gray-900 dark:hover:border-gray-300"
              >
                <Github size={18} />
                View Code
              </a>
            )}
          </div>
        )}

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <img
              src={project.coverImage || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase">Client</h4>
                  <p>{project.client}</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase">Timeline</h4>
                  <p>{project.timeline}</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase">Services</h4>
                  <ul className="list-disc list-inside">
                    {project.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase">Tools Used</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="max-w-5xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next/Previous Project */}
        <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {project.prevProject ? (
              <Link to={`/projects/${project.prevProject.slug}`} className="group flex items-center gap-3 mb-4 sm:mb-0">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Previous Project</div>
                  <div className="font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.prevProject.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div></div> // Empty div for spacing when no previous project
            )}

            {project.nextProject && (
              <Link to={`/projects/${project.nextProject.slug}`} className="group flex items-center gap-3 text-right">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Next Project</div>
                  <div className="font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.nextProject.title}
                  </div>
                </div>
                <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail

