"use client";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

export default function Preloader({children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-2xl font-bold text-[#1D8EE6] animate-pulse">
            <CircleLoader color="#8b5cf6" size={50} />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
