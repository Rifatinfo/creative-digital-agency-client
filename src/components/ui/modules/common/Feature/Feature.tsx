"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Target, Users, Zap, Award, TrendingUp, Shield } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import AnimatedSectionTitle from '../sectionTitle/AnimatedSectionTitle';
interface Feature {
    icon: any;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: Target,
        title: 'Strategic Approach',
        description: 'Data-driven strategies tailored to your unique business goals',
    },
    {
        icon: Users,
        title: 'Expert Team',
        description: 'Seasoned professionals with diverse industry experience',
    },
    {
        icon: Zap,
        title: 'Fast Execution',
        description: 'Agile workflows that deliver results quickly and efficiently',
    },
    {
        icon: Award,
        title: 'Proven Results',
        description: '500+ successful projects with measurable impact',
    },
    {
        icon: TrendingUp,
        title: 'Growth Focus',
        description: 'Solutions designed to scale with your business',
    },
    {
        icon: Shield,
        title: 'Reliable Partner',
        description: 'Committed to your success with ongoing support',
    },
];


const Feature = () => {
    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <AnimatedSectionTitle
                title="Why Choose Social Verb?"
                subtitle="We combine creativity, strategy, and technology to deliver exceptional results"
                />

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-16 lg:gap-y-16">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;