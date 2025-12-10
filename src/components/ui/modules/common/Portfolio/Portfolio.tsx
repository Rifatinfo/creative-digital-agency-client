
'use client';

import { FilterCategory } from "./CategoryFilters";
import { PortfolioSection } from "./PortfolioSection";
import { Project } from "./ProjectCard";


const categories: FilterCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'content', label: 'Content Development' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'branding', label: 'Branding' },
  { id: 'webApp', label: 'Web & App' },
  { id: 'events', label: 'Events' },
  { id: 'software', label: 'Software' },
];

const projects: Project[] = [
  {
    id: '1',
    title: 'CRM Implementation',
    category: 'software',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    category: 'webApp',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-blue-400 to-blue-500',
    videoUrl: 'https://vimeo.com/76979871',
  },
  {
    id: '4',
    title: 'Social Media Campaign',
    category: 'marketing',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-pink-400 to-pink-500',
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
  },
  {
    id: '5',
    title: 'Content Strategy',
    category: 'content',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-green-400 to-green-500',
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
  },
   {
    id: '6',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '7',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '8',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '9',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '10',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '11',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '12',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '13',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '14',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '15',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '16',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '17',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '18',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '19',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
   {
    id: '20',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
  },
];
const Portfolio = () => {
    return (
        <div className="min-h-screen bg-white">
            <PortfolioSection
                categories={categories}
                projects={projects}
                defaultCategory="all"
            />
        </div>
    );
};

export default Portfolio;
