import AnimatedSectionTitle from '@/components/ui/modules/common/sectionTitle/AnimatedSectionTitle';
import svgPaths from '../../About/_components/svg-itah41zkf0';
// import { Zap, Target, Users, Lightbulb } from 'lucide-react';
import ValueCard from './ValueCard';

const values = [
  {
    title: 'Boldness',
    description: 'We take risks. We push boundaries. We believe that playing it safe is the riskiest thing you can do.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
        <path d={svgPaths.p221c4a00} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Impact',
    description: 'Everything we do is measured by results. We create work that moves the needle and drives growth.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
        <path d={svgPaths.p1fa66600} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p190dabf0} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p2a9abe70} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Collaboration',
    description: 'We are partners, not just vendors. Your success is our success, and we work side-by-side to achieve it.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
        <path d={svgPaths.p184ba090} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p294ecc00} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p2f1426c0} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p5d36b00} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve, constantly exploring new technologies and platforms to give you the edge.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
        <path d={svgPaths.p294c6200} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 21H17.5" stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.6667 25.6667H16.3333" stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const  SocialVerbSection = () => {
  return (
    <section className="bg-[#f5f1e8] py-10 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div>
            <AnimatedSectionTitle
            title="The Social Verb Way"
            subtitle="Our culture is built on a foundation of creativity, accountability, and a relentless drive to be better."
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialVerbSection;