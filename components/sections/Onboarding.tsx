import { MotionConfig } from "framer-motion";
import Image from "next/image";
import { fadeDownVariants, fadeInLeftVariants, fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from '../animations/Reavel';
import { Section } from '../animations/Section';
import { MotionItem } from '../animations/MotionItems';

export default function StackedImages() {
  const images = [
    {
      id: 1,
      src: "/images/notification1.png",
      alt: "Notification 1"
    },
    {
      id: 2,
      src: "/images/notification2.png",
      alt: "Notification 2"
    },
    {
      id: 3,
      src: "/images/notification3.png",
      alt: "Notification 3"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center">
      <MotionItem variants={scalePopVariants} >
      <div className="relative w-full max-w-md h-[600px]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="absolute transition-all duration-300 hover:scale-105 hover:z-50 cursor-pointer"
            style={{
              top: `${index * 60}px`,
              right: `${index * 30}px`,
              width: '400px',
              zIndex: images.length - index,
              transform: `rotate(${index * 3}deg)`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={200}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        ))}
      </div>
      </MotionItem>
    </div>
  );
}