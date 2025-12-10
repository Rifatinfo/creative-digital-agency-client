"use client";

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">
            <Image src='https://res.cloudinary.com/dgp5rqeqh/image/upload/v1764154843/Social_verb_logo_y5ibzs.png'  width={70} height={70} alt=''></Image>
        </Link>
    );
};

export default Logo;