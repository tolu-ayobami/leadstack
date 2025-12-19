"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariants } from "@/utils/Variants";

type RevealProps = {
  children: React.ReactNode;
  variants?: any;
  className?: string;
  amount?: number;
};

export const Reveal = ({
  children,
  variants = fadeUpVariants,
  className,
  amount = 0.3,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};
