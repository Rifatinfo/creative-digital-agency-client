"use client";

import { GoArrowUpRight } from "react-icons/go";
import AnimatedSectionTitle from "../sectionTitle/AnimatedSectionTitle";
import { BlogCard } from "./BlogCard";

const Blog = () => {

    const blogPosts = [
        {
            id: 1,
            image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765462038/Image_1_o7jwmc.png",
            category: "Marketing",
            date: "March 15, 2024",
            title: "The Future of Digital Marketing in 2024",
            description: "Explore the latest trends and strategies shaping the digital marketing landscape.",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765462038/Image_2_ymxr3d.png",
            category: "Branding",
            date: "March 12, 2024",
            title: "Building a Strong Brand Identity",
            description: "Learn how to create a memorable brand that resonates with your audience.",
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765462039/Image_jqte6d.png",
            category: "Design",
            date: "March 10, 2024",
            title: "Web Design Trends to Watch",
            description: "Discover the design trends that will define the next generation of websites.",
        },
    ];
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}

                <div>
                    <AnimatedSectionTitle
                        title=" Latest Insights"
                        subtitle="Stay updated with the latest trends and insights from our experts"
                    />
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            image={post.image}
                            category={post.category}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                        />
                    ))}
                </div>
                <div className="mt-6">
                    <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                       See More <span className="text-lg"><GoArrowUpRight /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;