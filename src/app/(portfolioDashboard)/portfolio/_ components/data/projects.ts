
import { Category, Project } from "../types/portfolio"

export const categories: Category[] = [
  {
    name: 'All Projects',
    subcategories: [],
  },
  {
    name: 'Content Development',
    subcategories: [
      'Social Media Content',
      'Digital Media Content',
      'Content Writing',
      'Photography',
      'Design',
      'Audio & Visual',
      'CG',
    ],
  },
  {
    name: 'Digital Marketing',
    subcategories: [
      'SEO',
      'SEM',
      'Social Ads',
      'Email Marketing',
      'Analytics',
      'Content Marketing',
    ],
  },
  {
    name: 'Branding & Promotion',
    subcategories: [
      'Brand Identity',
      'Campaign Strategy',
      'PR',
      'Influencer Marketing',
      'Brand Guidelines',
    ],
  },
  {
    name: 'Web & App',
    subcategories: [
      'Web Development',
      'Mobile Apps',
      'UI/UX Design',
      'E-commerce',
      'Progressive Web Apps',
    ],
  },
  {
    name: 'Events & Activation',
    subcategories: [
      'Event Planning',
      'Experiential Marketing',
      'Product Launches',
      'Trade Shows',
      'Virtual Events',
    ],
  },
  {
    name: 'Software Management',
    subcategories: [
      'CRM Solutions',
      'Project Management',
      'Custom Software',
      'IT Consulting',
      'Cloud Solutions',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Brand Campaign 2024 - Complete Digital Transformation',
    category: 'Branding & Promotion',
    subcategory: 'Campaign Strategy',
    thumbnail:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '125K',
    date: '2 months ago',
    duration: '5:32',
    featured: true,
  },
  {
    id: 2,
    title: 'Social Media Strategy - Viral Campaign Success',
    category: 'Content Development',
    subcategory: 'Social Media Content',
    thumbnail:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '89K',
    date: '3 months ago',
    duration: '4:15',
    featured: false,
  },
  {
    id: 3,
    title: 'E-commerce Platform - Full Stack Development',
    category: 'Web & App',
    subcategory: 'E-commerce',
    thumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '156K',
    date: '1 month ago',
    duration: '8:45',
    featured: true,
  },
  {
    id: 4,
    title: 'Product Launch Event - Experiential Marketing',
    category: 'Events & Activation',
    subcategory: 'Product Launches',
    thumbnail:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '203K',
    date: '3 weeks ago',
    duration: '6:20',
    featured: true,
  },
  {
    id: 5,
    title: 'SEO Campaign - 300% Traffic Growth',
    category: 'Digital Marketing',
    subcategory: 'SEO',
    thumbnail:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '67K',
    date: '4 months ago',
    duration: '3:50',
    featured: false,
  },
  {
    id: 6,
    title: 'CRM Implementation - Enterprise Solution',
    category: 'Software Management',
    subcategory: 'CRM Solutions',
    thumbnail:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '45K',
    date: '5 months ago',
    duration: '7:10',
    featured: false,
  },
  {
    id: 7,
    title: 'Video Production Series - Documentary Style',
    category: 'Content Development',
    subcategory: 'Audio & Visual',
    thumbnail:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '178K',
    date: '2 weeks ago',
    duration: '12:30',
    featured: true,
  },
  {
    id: 8,
    title: 'Brand Identity Redesign - Complete Rebrand',
    category: 'Branding & Promotion',
    subcategory: 'Brand Identity',
    thumbnail:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '92K',
    date: '6 weeks ago',
    duration: '5:45',
    featured: false,
  },
  {
    id: 9,
    title: 'Mobile App Design - Award Winning UX',
    category: 'Web & App',
    subcategory: 'UI/UX Design',
    thumbnail:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: '134K',
    date: '1 month ago',
    duration: '9:15',
    featured: true,
  },
]
