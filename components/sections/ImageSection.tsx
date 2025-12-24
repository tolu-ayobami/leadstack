import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/utils/Usedata";
import { fadeInLeftVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { MotionItem } from '../animations/MotionItems';

const ImageSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full text-white bg-[#0D1227]">
      {/* Container with same horizontal padding as header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">

          {/* Left Side - Circular Images */}
          <div className="flex-1 hidden lg:flex">
            <MotionItem variants={fadeInLeftVariants}>
              <div className="relative w-[450px] h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px] bg-[#13142D] rounded-full flex items-center justify-center">
                
                <div className="absolute w-23 h-23 xl:w-28 xl:h-28 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={images[0].image}
                    alt={images[0].name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>

                {images.slice(1).map((img, index) => {
                  const angle = (index / (images.length - 1)) * 360;
                  const radius = 200;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <div
                      key={img.id}
                      className="absolute w-20 h-20 xl:w-23 xl:h-23 rounded-full overflow-hidden border-2 border-gray-300"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      <MotionItem variants={fadeInLeftVariants}>
                        <Image
                          src={img.image}
                          alt={img.name}
                          width={112}
                          height={112}
                          className="object-cover w-full h-full"
                        />
                      </MotionItem>
                    </div>
                  );
                })}
              </div>
            </MotionItem>
          </div>

          {/* Mobile Images */}
          <MotionItem variants={fadeUpVariants} className="flex flex-wrap gap-4 pb-3 justify-center lg:hidden">
            {images.map((img) => (
              <div
                key={img.id}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden"
              >
                <Image
                  src={img.image}
                  alt={img.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </MotionItem>

          {/* Right Side - Text Content */}
          <MotionItem variants={scalePopVariants} className="flex-1 flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            <h1 className="font-noto text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight">
              We offer products with top notch features for effective management of staff
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-300">
              Our products provide cutting-edge features designed to ensure efficient staff management. From intuitive interfaces to advanced functionalities, we prioritize delivering top-notch solutions that empower organizations to effectively oversee their workforce with ease and precision.
            </p>
          </MotionItem>

        </div>
      </div>
    </div>
  )
}

export default ImageSection;
