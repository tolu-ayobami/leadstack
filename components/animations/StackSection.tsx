"use client";

type StackSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const StackSection = ({ children, className }: StackSectionProps) => {
  return (
    <section
      className={`stack-section min-h-screen w-full ${className ?? ""}`}
    >
      {children}
    </section>
  );
};
