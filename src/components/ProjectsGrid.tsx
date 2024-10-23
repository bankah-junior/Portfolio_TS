import { useState } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const ITEMS_PER_PAGE = 6;

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  // Get the current page's projects
  const currentProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handler for next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handler for previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full">
      {/* Grid displaying the projects */}
      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white bg-blue-600 rounded-lg transition-all ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          Previous
        </button>

        <span className="px-4 py-2 text-lg text-white">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white bg-blue-600 rounded-lg transition-all ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
