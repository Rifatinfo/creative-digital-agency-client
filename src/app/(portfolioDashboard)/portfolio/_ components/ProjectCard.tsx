'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Play } from 'lucide-react'
import { Project } from './types/portfolio'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'


interface ProjectCardProps {
    project: Project
    viewMode: 'grid' | 'list'
    index: number
    onClick: () => void
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
    ({ project, viewMode, index, onClick }, ref) => {
        return (
            <motion.div
                ref={ref}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                onClick={onClick}
                className={`group cursor-pointer ${viewMode === 'list' ? 'flex gap-4' : ''}`}
            >
                <div
                    className={`group relative overflow-hidden rounded-2xl ${viewMode === 'list'
                            ? 'w-48 sm:w-64 flex-shrink-0'
                            : 'aspect-video'
                        }`}
                >
                    {/* Thumbnail */}
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#a6293e] rounded-full flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform">
                            <Play className="text-white fill-white ml-1" size={22} />
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 bg-black/90 text-white text-xs px-2 py-1 rounded-md">
                        {project.duration}
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                        <div className="absolute top-2 left-2 bg-[#a6293e] text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                            Featured
                        </div>
                    )}
                </div>


                <div className={`${viewMode === 'list' ? 'flex-1' : 'mt-2 sm:mt-3'}`}>
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1 group-hover:text-brand-primary transition-colors line-clamp-2">
                        {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                        <Badge variant="secondary" className="text-xs font-medium">
                            {project.subcategory}
                        </Badge>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                        <span>{project.views} views</span>
                        <span>•</span>
                        <span>{project.date}</span>
                    </div>
                </div>
            </motion.div>
        )
    }
)

ProjectCard.displayName = 'ProjectCard'