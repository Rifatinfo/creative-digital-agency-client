import Image from "next/image";

interface IconProps {
  className?: string;
}


export function ContentDevelopmentIcon({ className = "w-20 h-20" }: IconProps) {
  return (
    <Image
      src="https://cdn-icons-png.flaticon.com/512/3852/3852711.png"
      alt="Content Development Icon"
      width={80}
      height={80}
      className={className}
    />
  );
}

export function DigitalMarketingIcon({ className = "w-20 h-20" }: IconProps) {
  return (
    <Image
      src="https://cdn-icons-png.flaticon.com/512/2065/2065064.png"
      alt="Content Development Icon"
      width={80}
      height={80}
      className={className}
    />
  );
}

export function BrandingIcon({ className = "w-20 h-20" }: IconProps) {
  return (
    <Image
      src="https://cdn-icons-png.flaticon.com/512/10694/10694239.png"
      alt="Content Development Icon"
      width={80}
      height={80}
      className={className}
    />
  );
}

export function WebAppIcon({ className = "w-20 h-20" }: IconProps) {
  return (
    <Image
      src="https://cdn-icons-png.flaticon.com/512/7075/7075373.png"
      alt="Content Development Icon"
      width={80}
      height={80}
      className={className}
    />
  );
}

export function EventActivationIcon({ className = "w-20 h-20" }: IconProps) {
  return (
    <Image
      src="https://cdn-icons-png.flaticon.com/512/15952/15952475.png"
      alt="Content Development Icon"
      width={80}
      height={80}
      className={className}
    />
  );
}

export function SoftwareManagementIcon({ className = "w-20 h-20" }: IconProps) {
  return (
    <Image
      src="https://cdn-icons-png.flaticon.com/512/7075/7075369.png"
      alt="Content Development Icon"
      width={80}
      height={80}
      className={className}
    />
  );
}
