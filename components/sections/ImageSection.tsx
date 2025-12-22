import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/utils/Usedata";
import { fadeDownVariants, fadeInLeftVariants, fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from '../animations/Reavel';
import { Section } from '../animations/Section';
import { MotionItem } from '../animations/MotionItems';


const ImageSection = () => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="w-full text-white bg-[#0D1227]">
        <div className="flex flex-col lg:flex-row w-[88%] mx-auto m-auto items-center justify-center py-20 lg:gap-20 ">
          <div className="p-8 hidden lg:flex flex-1 items-center justify-center">
            <MotionItem variants={fadeInLeftVariants}>
            <div className="relative w-[420px] h-[420px] bg-[#13142D] rounded-full flex items-center justify-center">

              <div  className="absolute w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={images[0].image}
                  alt={images[0].name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              {images.slice(1).map((img, index) => {
                const angle = (index / (images.length - 1)) * 360;
                const radius = 160;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (

                  <div
                    key={img.id}
                    className="absolute w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <MotionItem variants={fadeInLeftVariants} >
                      <Image
                        src={img.image}
                        alt={img.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                  </MotionItem>
                  </div>
                );
              })}
            </div>
            </MotionItem>
          </div>

          <MotionItem variants={fadeUpVariants}  className="flex flex-wrap gap-4 pb-3 justify-center lg:hidden">
            {images.map((img) => (
              <div
                key={img.id}
                className="w-12 h-12 rounded-full overflow-hidden "
              >
                <Image
                  src={img.image}
                  alt={img.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </MotionItem>

          <MotionItem variants={scalePopVariants} >
            <div className="flex-1 max-w-3xl flex flex-col gap-6 text-center lg:text-left">
              <h1 className="font-noto xl:text-5xl text-xl lg:text-4xl font-semibold leading-[32px]">
                We offer products with top notch features for effective management of staff
              </h1>
              <p className="text-md">
                Our products provide cutting-edge features designed to ensure efficient staff management. From intuitive interfaces to advanced functionalities, we prioritize delivering top-notch solutions that empower organizations to effectively oversee their workforce with ease and precision.
              </p>
            </div>
          </MotionItem>
        </div>
      </div>
    </>

  )
}

export default ImageSection;
