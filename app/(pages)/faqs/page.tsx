import { FAQsSection } from "@/components/sections/Faqs";
import { fadeDownVariants, fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { MotionItem } from '@/components/animations/MotionItems';


export default function FaqPage() {
  return (
    <section className=" pt-40 bg-[#FAFAFC] w-full">
      <div className="mx-auto ">
        <MotionItem variants={fadeInRightVariants} className="mb-12 lg:py-14 py-6 max-w-md flex flex-col justify-center m-auto text-center animate-pulse">
          <h1 className="text-3xl font-bold sm:text-5xl
               bg-gradient-to-r from-[#1D8EE6] via-[#5AB2FF] to-[#1D8EE6]
               bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-gray-600">
            Find answers to common questions about our platform.
          </p>
        </MotionItem>

        <FAQsSection />

      </div>
    </section>
  );
}
