"use client";


import Link from "next/link";
import { RiFacebookFill, RiInstagramFill,  RiLinkedinFill, RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";
const icons = [
        {
            path : '/',
            name : <RiYoutubeFill/>
        },
        {
            path : '/',
            name : <RiLinkedinFill/>
        },
        {
            path : '/',
            name : <RiTwitterXFill/>
        },
        {
            path : '/',
            name : <RiFacebookFill/>
        },
        {
            path : '/',
            name : <RiInstagramFill/>
        },
    ]

    interface SocialProps  {
        containerStyles? : string,
        iconsStyles? : string
    }

const Social = ({containerStyles, iconsStyles} : SocialProps) => {
    
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                       <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    );
};

export default Social;
