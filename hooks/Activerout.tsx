"use client";
import { usePathname } from "next/navigation";

export const useActiveRoute = () => {
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;

    // Home should ONLY be active on "/"
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(href + "/");
  };

  return { pathname, isActive };
};
