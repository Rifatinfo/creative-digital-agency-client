import Image from "next/image";
import Link from "next/link";


const whiteLogo = () => {
   return (
        <Link href="/">
            <Image src='https://res.cloudinary.com/dgp5rqeqh/image/upload/v1764158499/Social_verb_191_189_rtrl8z.png' width={70} height={70} alt=''></Image>
        </Link>
    );
};

export default whiteLogo;