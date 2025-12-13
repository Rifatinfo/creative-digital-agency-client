'use client'

import { motion, AnimatePresence } from 'motion/react'
import { Filter } from 'lucide-react'
import { ProjectCard } from './ProjectCard'
import { Project } from './types/portfolio'

interface ProjectGridProps {
  projects: Project[]
  viewMode: 'grid' | 'list'
  onProjectClick: (project: Project) => void
}

export function ProjectGrid({
  projects,
  viewMode,
  onProjectClick,
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12 sm:py-20">
        <Filter className="mx-auto text-gray-300 mb-4" size={48} />
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          No projects found
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          Try adjusting your filters or search query
        </p>
      </div>
    )
  }

  return (
    <motion.div
      layout
      className={`grid gap-4 sm:gap-6 ${
        viewMode === 'grid'
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
      }`}
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            viewMode={viewMode}
            index={index}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
