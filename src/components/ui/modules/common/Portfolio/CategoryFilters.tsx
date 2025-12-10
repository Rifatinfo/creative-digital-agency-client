'use client';

import { Button } from "@/components/ui/button";

export interface FilterCategory {
  id: string;
  label: string;
}

interface CategoryFiltersProps {
  categories: FilterCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryFilters({ categories, activeCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? 'default' : 'secondary'}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={
            activeCategory === category.id
              ? 'bg-[#c73450] hover:bg-[#b12d46] text-white rounded-full h-11 px-6'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full h-11 px-6'
          }
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
