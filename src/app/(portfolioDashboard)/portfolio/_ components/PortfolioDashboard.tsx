"use client";

import { useState } from "react";
import { Project, VideoModalData } from "./types/portfolio";
import { categories, projects } from "./data/projects";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ProjectGrid } from "./ProjectGrid";
import { VideoModal } from "@/components/ui/modules/common/Portfolio/VideoModal";

const PortfolioDashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Projects')
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
        null,
    )
    const [expandedCategories, setExpandedCategories] = useState<string[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedVideo, setSelectedVideo] = useState<VideoModalData | null>(
        null,
    )
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSearchExpanded, setIsSearchExpanded] = useState(false)
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    const toggleCategory = (categoryName: string) => {
        setExpandedCategories((prev) =>
            prev.includes(categoryName)
                ? prev.filter((c) => c !== categoryName)
                : [...prev, categoryName],
        )
    }

    const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(categoryName)
        setSelectedSubcategory(null)
        if (window.innerWidth < 1024) {
            setIsSidebarOpen(false)
        }
    }

    const handleSubcategoryClick = (
        categoryName: string,
        subcategoryName: string,
    ) => {
        setSelectedCategory(categoryName)
        setSelectedSubcategory(subcategoryName)
        if (window.innerWidth < 1024) {
            setIsSidebarOpen(false)
        }
    }

    const handleProjectClick = (project: Project) => {
        setSelectedVideo({
            url: project.videoUrl,
            title: project.title,
        })
    }

    const filteredProjects = projects.filter((project) => {
        const matchesCategory =
            selectedCategory === 'All Projects' ||
            project.category === selectedCategory
        const matchesSubcategory =
            !selectedSubcategory || project.subcategory === selectedSubcategory
        const matchesSearch = project.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSubcategory && matchesSearch
    })

    return (
        <div>
            <div className="min-h-screen bg-white">
                <Header
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isSearchExpanded={isSearchExpanded}
                    setIsSearchExpanded={setIsSearchExpanded}
                />

                <div className="flex pt-14 sm:pt-16">
                    <Sidebar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        categories={categories}
                        selectedCategory={selectedCategory}
                        selectedSubcategory={selectedSubcategory}
                        expandedCategories={expandedCategories}
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        onCategoryClick={handleCategoryClick}
                        onSubcategoryClick={handleSubcategoryClick}
                        onToggleCategory={toggleCategory}
                    />

                    <main className="flex-1 p-4 sm:p-6 lg:pl-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between mb-4 sm:mb-6">
                                <h2 className="text-lg sm:text-2xl font-bold">
                                    {selectedSubcategory || selectedCategory}
                                    <span className="text-gray-500 text-sm sm:text-lg ml-2">
                                        ({filteredProjects.length})
                                    </span>
                                </h2>
                            </div>

                            <ProjectGrid
                                projects={filteredProjects}
                                viewMode={viewMode}
                                onProjectClick={handleProjectClick}
                            />
                        </div>
                    </main>
                </div>

                <VideoModal
                    isOpen={!!selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                    videoUrl={selectedVideo?.url || ''}
                    title={selectedVideo?.title || ''}
                />
                
            </div>
        </div>
    );
};

export default PortfolioDashboard;