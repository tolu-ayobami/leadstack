"use client"
import Image from "next/image";
import LogoCarousel from "@/components/sections/PartnersCarousel";
import ImageSection from "@/components/sections/ImageSection";
import { ManagementSection } from "@/components/sections/ManagementSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OnboardingProcess } from "@/components/sections/OnboardingProcess";
import { CurrentOpening } from "@/components/sections/CurrentOpening";
import { FAQsSection } from "@/components/sections/Faqs";
import { Client } from "@/components/sections/Clients";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (

    <div className=" max-sm:pt-28 min-h-screen">
      <HeroSection />

      <OnboardingProcess />

      <div className="">
        <LogoCarousel />
      </div>

      <ImageSection />

      <ManagementSection />

      {/*<CurrentOpening />*/}


      <Client />


    </div>

  );
}

