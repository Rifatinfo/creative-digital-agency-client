'use client'

import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

import { CategoryList } from './CategoryList'
import { PortfolioStats } from './PortfolioStats'
import { Category } from './types/portfolio'
import { Button } from '@/components/ui/button'

interface SidebarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (open: boolean) => void
  categories: Category[]
  selectedCategory: string
  selectedSubcategory: string | null
  expandedCategories: string[]
  viewMode: 'grid' | 'list'
  setViewMode: (mode: 'grid' | 'list') => void
  onCategoryClick: (categoryName: string) => void
  onSubcategoryClick: (categoryName: string, subcategoryName: string) => void
  onToggleCategory: (categoryName: string) => void
}

export function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  categories,
  selectedCategory,
  selectedSubcategory,
  expandedCategories,
  onCategoryClick,
  onSubcategoryClick,
  onToggleCategory,
}: SidebarProps) {
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />

          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
            }}
            className="fixed top-14 sm:top-16 left-0 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] w-64 sm:w-72 bg-white border-r border-gray-200 overflow-y-auto z-40 shadow-xl lg:shadow-none"
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="font-semibold text-[#c73450] sm:text-lg">Categories</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarOpen(false)}
                  className="rounded bg-[#c73450]/10 text-[#c73450] "
                >
                  <X size={30} className="" />
                </Button>
              </div>

              <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                expandedCategories={expandedCategories}
                onCategoryClick={onCategoryClick}
                onSubcategoryClick={onSubcategoryClick}
                onToggleCategory={onToggleCategory}
              />

              <PortfolioStats />

            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
