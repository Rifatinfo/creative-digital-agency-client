'use client'

import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Category } from './types/portfolio'
import { Button } from '@/components/ui/button'


interface CategoryListProps {
  categories: Category[]
  selectedCategory: string
  selectedSubcategory: string | null
  expandedCategories: string[]
  onCategoryClick: (categoryName: string) => void
  onSubcategoryClick: (categoryName: string, subcategoryName: string) => void
  onToggleCategory: (categoryName: string) => void
}

export function CategoryList({
  categories,
  selectedCategory,
  selectedSubcategory,
  expandedCategories,
  onCategoryClick,
  onSubcategoryClick,
  onToggleCategory,
}: CategoryListProps) {
  return (
    <nav className="space-y-1">
      {categories.map((category) => (
        <div key={category.name}>
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => onCategoryClick(category.name)}
              className={`flex-1 justify-start h-auto px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base ${
                selectedCategory === category.name && !selectedSubcategory
                  ? 'bg-[#c73450]/10 text-[#c73450] font-semibold hover:bg-brand-primary/10'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </Button>

            {category.subcategories.length > 0 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onToggleCategory(category.name)}
                className="rounded-lg"
              >
                {expandedCategories.includes(category.name) ? (
                  <ChevronDown size={18} className="text-gray-600" />
                ) : (
                  <ChevronRight size={18} className="text-gray-600" />
                )}
              </Button>
            )}
          </div>

          <AnimatePresence>
            {expandedCategories.includes(category.name) &&
              category.subcategories.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="ml-4 sm:ml-6 mt-1 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <Button
                        key={subcategory}
                        variant="ghost"
                        onClick={() =>
                          onSubcategoryClick(category.name, subcategory)
                        }
                        className={`w-full justify-start h-auto px-3 sm:px-4 py-2 text-xs sm:text-sm ${
                          selectedSubcategory === subcategory
                            ? 'bg-[#c73450]/10 text-[#c73450] font-medium hover:bg-[#c73450]/10'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {subcategory}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  )
}
