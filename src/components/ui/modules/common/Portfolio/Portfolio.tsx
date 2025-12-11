
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
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459324/Atom_Gum_1_-_Copy_pnlyn9.png",
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
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459324/Atom_green_mango_-_Copy_lzatef.png",
  },
  {
    id: '4',
    title: 'Social Media Campaign',
    category: 'marketing',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-pink-400 to-pink-500',
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459324/Atom_green_mango_-_Copy_lzatef.png",
  },
  {
    id: '5',
    title: 'Content Strategy',
    category: 'content',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-green-400 to-green-500',
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459323/Atom_Gum_2_e9qvgj.png",
  },
  {
    id: '6',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459322/Atom_chapar_jor_barao_h1vnev.jpg",
  },
  {
    id: '7',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459322/Atom_chapar_jor_barao_h1vnev.jpg",
  },
  {
    id: '8',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459320/Atom_chapar_jor_barao_04_hct5ac.jpg",
  },
  {
    id: '9',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459318/Atom_chapar_jor_barao_03_-_Copy_gzgise.jpg",
  },
  {
    id: '10',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459322/Atom_chapar_jor_barao_h1vnev.jpg",
  },
  {
    id: '11',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459318/Atom_chapar_jor_barao_03_-_Copy_gzgise.jpg",
  },
  {
    id: '12',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459322/Atom_chapar_jor_barao_h1vnev.jpg",
  },
  {
    id: '13',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459317/Atom_chapar_jor_barao_-_Copy_q6o4wh.jpg",
  },
  {
    id: '14',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459316/Atom_chapar_jor_barao_02_krmh7z.jpg",
  },
  {
    id: '15',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459313/Atom_back_to_campus_new12_wnscey.png",
  },
  {
    id: '16',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459313/Atom_back_to_campus_new12_-_Copy_ahllpb.png",
  },
  {
    id: '17',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459315/Atom_back_to_campus_07_ilb4yf.jpg",
  },
  {
    id: '18',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459315/Atom_back_to_campus_06_1_hk2htd.jpg",
  },
  {
    id: '19',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459313/Atom_bite_me_c6vycw.jpg",
  },
  {
    id: '20',
    title: 'Brand Identity Design',
    category: 'branding',
    language: 'En',
    rating: '★',
    thumbnailColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
    videoUrl: 'https://www.facebook.com/watch/?v=1234567890',
    thumbnail: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459316/Atom_chapar_jor_barao_02_krmh7z.jpg",
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
