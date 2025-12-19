"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { containerVariants } from "@/utils/Variants";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  amount?: number;
};

export const Section = ({
  children,
  className,
  amount = 0.3,
}: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
};
