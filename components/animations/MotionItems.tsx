"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type MotionItemProps = {
  children: React.ReactNode;
  variants: any;
  className?: string;
};

export const MotionItem = ({
  children,
  variants,
  className,
}: MotionItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

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
