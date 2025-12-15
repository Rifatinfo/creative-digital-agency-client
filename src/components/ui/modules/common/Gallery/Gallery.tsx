"use client";
import { ImageGallery } from "react-image-grid-gallery";
import AnimatedSectionTitle from "../sectionTitle/AnimatedSectionTitle";

export interface GalleryImage {
  id: string;
  alt: string;
  caption?: string;
  src: string;
  gridSrc?: string;
  thumbSrc?: string;
  srcSet?: string;
  mediaSizes?: string;
}

export const imagesArray: GalleryImage[] = [
  {
    id: "img-1",
    alt: "Gallery image 1",
    caption: "Gallery image 1 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765462038/Image_1_o7jwmc.png",
  },
  {
    id: "img-2",
    alt: "Gallery image 2",
    caption: "Gallery image 2 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459318/Atom_campus_campaign_dodopb.png",
  },
  {
    id: "img-3",
    alt: "Gallery image 3",
    caption: "Gallery image 3 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457671/WhatsApp_Image_2025-12-11_at_6.51.07_PM_1_zemobc.jpg",
  },
  {
    id: "img-4",
    alt: "Gallery image 4",
    caption: "Gallery image 4 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.07_PM_mbp9do.jpg",
  },
  {
    id: "img-5",
    alt: "Gallery image 5",
    caption: "Gallery image 5 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.07_PM_mbp9do.jpg",
  },
  {
    id: "img-6",
    alt: "Gallery image 6",
    caption: "Gallery image 6 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457666/WhatsApp_Image_2025-12-11_at_6.51.08_PM_2_oyght4.jpg",
  },
  {
    id: "img-7",
    alt: "Gallery image 7",
    caption: "Gallery image 7 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457651/WhatsApp_Image_2025-12-11_at_6.51.09_PM_2_ua1peg.jpg",
  },
  {
    id: "img-8",
    alt: "Gallery image 8",
    caption: "Gallery image 8 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.08_PM_djxpxn.jpg",
  },
  {
    id: "img-9",
    alt: "Gallery image 9",
    caption: "Gallery image 9 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.07_PM_2_gvr8gi.jpg",
  },
  {
    id: "img-10",
    alt: "Gallery image 10",
    caption: "Gallery image 10 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457666/WhatsApp_Image_2025-12-11_at_6.51.09_PM_so6ml1.jpg",
  },
  {
    id: "img-11",
    alt: "Gallery image 11",
    caption: "Gallery image 11 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.08_PM_djxpxn.jpg",
  },
  {
    id: "img-12",
    alt: "Gallery image 12",
    caption: "Gallery image 12 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.08_PM_1_gmy9qo.jpg",
  },
  {
    id: "img-13",
    alt: "Gallery image 13",
    caption: "Gallery image 13 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459313/Atom_bite_me_c6vycw.jpg",
  },
  {
    id: "img-14",
    alt: "Gallery image 14",
    caption: "Gallery image 14 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459313/Atom_back_to_campus_new12_wnscey.png",
  },
  {
    id: "img-15",
    alt: "Gallery image 14",
    caption: "Gallery image 14 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459313/Atom_back_to_campus_new12_wnscey.png",
  },
  {
    id: "img-16",
    alt: "Gallery image 14",
    caption: "Gallery image 14 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459313/Atom_back_to_campus_new12_wnscey.png",
  },
  {
    id: "img-17",
    alt: "Gallery image 14",
    caption: "Gallery image 14 description",
    src: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765459313/Atom_back_to_campus_new12_wnscey.png",
  },
];

const Gallery: React.FC = () => {
  return (
    <div>
      <div>
        <AnimatedSectionTitle
          title="Our Gallery and Encourage Field"
          subtitle="Let's start our work"
        />
      </div>
      <ImageGallery
        imagesInfoArray={imagesArray}
        gapSize={24}
      />
    </div>
  );
};

export default Gallery;
