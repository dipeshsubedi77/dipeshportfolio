import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.coverImage || "/placeholder.svg"} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Link 
            to={`/projects/${project.slug}`}
            className="bg-white text-black dark:bg-black dark:text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:gap-3 transition-all"
          >
            <Eye size={18} />
            View Project
          </Link>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          <Link 
            to={`/projects/${project.slug}`}
            className="text-sm font-medium text-purple-600 dark:text-purple-400 flex items-center gap-1 hover:gap-2 transition-all"
          >
            Details
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
