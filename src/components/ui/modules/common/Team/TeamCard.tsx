import Image from 'next/image';
import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  twitter: string;
}

export interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Image with badge */}
      <div className="relative mb-4">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-100 hover:ring-[#c73450]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Role badge */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#c73450] text-white px-3 py-1 rounded-full whitespace-nowrap">
          <span className="text-white text-[12px] font-semibold">{member.role}</span>
        </div>
      </div>

      {/* Name */}
      <h3 className="mb-3 text-center font-semibold">{member.name}</h3>

      {/* Social links */}
      <div className="flex gap-2">
        <Link
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#c73450] transition-colors"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <FaFacebook className="w-3.5 h-3.5 text-gray-900" />
        </Link>
        <Link
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#c73450] transition-colors"
          aria-label={`${member.name}'s Twitter`}
        >
          <BsTwitter className="w-3.5 h-3.5 text-gray-900" />
        </Link>
      </div>
    </div>
  );
}

export default TeamCard;