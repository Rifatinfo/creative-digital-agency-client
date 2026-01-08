'use client';

import { useEffect, useState } from 'react';
import { ProjectCard, type Project } from './ProjectCard';
import { CategoryFilters, type FilterCategory } from './CategoryFilters';
import AnimatedSectionTitle from '../sectionTitle/AnimatedSectionTitle';
import { GoArrowUpRight } from 'react-icons/go';

interface PortfolioSectionProps {
  title?: string;
  description?: string;
  categories: FilterCategory[];
  projects: Project[];
  defaultCategory?: string;
}

export function PortfolioSection({
  categories,
  defaultCategory = 'all'
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true)

        const res = await fetch(
          `https://creative-digital-agency-server.vercel.app/api/v1/campaign`,
          {
            cache: "no-store",
          }
        )

        if (!res.ok) {
          throw new Error("Failed to fetch campaigns")
        }

        const data = await res.json();

        console.log(data?.data?.data);

        setProjects(data?.data?.data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCampaigns();
  }, [])

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);



  return (
    <section>
      {/* Header */}

      <div>
        <AnimatedSectionTitle
          title="Our Work"
          subtitle="Explore our portfolio of successful projects"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-10 px-6">
        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {filteredProjects.slice(0, 15).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}


        {filteredProjects.length >= 15 && (
          <div className="flex items-center text-center mt-10">
            <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
              See More <span className="text-lg"><GoArrowUpRight /></span>
            </button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found in this category.</p>
        </div>
      )}
    </section>
  );
}
