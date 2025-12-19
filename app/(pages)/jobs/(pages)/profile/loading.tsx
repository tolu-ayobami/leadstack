"use client";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="flex h-screen items-center justify-center">
         <CircleLoader color="#8b5cf6" size={50} />
    </div>
  );
}
