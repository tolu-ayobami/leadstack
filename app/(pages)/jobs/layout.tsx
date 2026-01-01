"use client";
import Header from "@/components/jobs/Header";
import { usePathname } from "next/navigation";

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideHeader =
    pathname === "/jobs/signup" ||
    pathname === "/jobs/login" ||
    pathname === "/jobs/otp" ||
    pathname === "/jobs/get-started";

  return (
    <>
      {!hideHeader && <Header />}
      <main>{children}</main>
    </>
  );
}
