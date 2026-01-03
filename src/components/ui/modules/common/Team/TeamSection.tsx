'use client'

import AnimatedSectionTitle from "../sectionTitle/AnimatedSectionTitle";
import TeamCard, { TeamMember } from "./TeamCard";

export default function TeamSection() {
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Creative Director',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365355/466599589_122168010584094835_80784436616788253_n_vlgoqa.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            role: 'Creative Co Director',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365460/pp_m3yrav.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 3,
            name: 'Michael Chen',
            role: 'Strategy Lead',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1760516348/file-1760516342093-505522654.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 4,
            name: 'Emily Rodriguez',
            role: 'Design Director',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365410/IMG_1012_jy8ukp.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 5,
            name: 'David Park',
            role: 'Tech Lead',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365593/IMG_1047_v8c1e5.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 6,
            name: 'Tom Harrison',
            role: 'Web Developer',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365593/IMG_1047_v8c1e5.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 7,
            name: 'James Wilson',
            role: 'Marketing Director',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365593/IMG_1047_v8c1e5.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 8,
            name: 'Rachel Kim',
            role: 'Brand Strategist',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1760516348/file-1760516342093-505522654.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 9,
            name: 'James Wilson',
            role: 'Marketing Director',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365593/IMG_1047_v8c1e5.jpg',
            linkedin: '#',
            twitter: '#',
        },
         {
            id: 10,
            name: 'David Park',
            role: 'Tech Lead',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1760516348/file-1760516342093-505522654.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 11,
            name: 'Michael Chen',
            role: 'Strategy Lead',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1760516348/file-1760516342093-505522654.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 12,
            name: 'Emily Rodriguez',
            role: 'Design Director',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365410/IMG_1012_jy8ukp.jpg',
            linkedin: '#',
            twitter: '#',
        },
         {
            id: 13,
            name: 'Emily Rodriguez',
            role: 'Design Director',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365410/IMG_1012_jy8ukp.jpg',
            linkedin: '#',
            twitter: '#',
        },
        {
            id: 14,
            name: 'David Park',
            role: 'Tech Lead',
            image: 'https://res.cloudinary.com/dgp5rqeqh/image/upload/v1760516348/file-1760516342093-505522654.jpg',
            linkedin: '#',
            twitter: '#',
        },
    ];

    return (
        <div>
            <section className="bg-white px-8 py-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div>
                            <AnimatedSectionTitle
                                title="Meet Our Creative Minds"
                                subtitle="A diverse team of passionate professionals dedicated to your success"
                            />
                        </div>

                        {/* Team grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-x-12 gap-y-16">
                            {teamMembers.map((member) => (
                                <TeamCard key={member.id} member={member} />
                            ))}
                        </div>
                    </div>
                </section>
        </div>
    );
}
