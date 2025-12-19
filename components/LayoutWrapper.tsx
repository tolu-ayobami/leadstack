"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  hideOn?: string[];
};

export default function ClientLayoutWrapper({
  children,
  hideOn = [],
}: Props) {
  const pathname = usePathname();

  const shouldHide = hideOn.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHide && <Header />}
      {children}
      {!shouldHide && <Footer />}
    </>
  );
}
