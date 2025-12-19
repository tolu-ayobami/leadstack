"use client";
import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "2349027622692"; 
  const message = "Hello! I have a question."; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.81 11.81 0 0012 0C5.37 0 .01 5.36.01 12c0 2.11.55 4.17 1.6 5.97L0 24l6.14-1.57A11.93 11.93 0 0012 24c6.63 0 12-5.36 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.75a9.71 9.71 0 01-5.18-1.53l-.37-.22-3.65.93.97-3.54-.23-.36A9.71 9.71 0 012.25 12 9.75 9.75 0 1121.75 12 9.76 9.76 0 0112 21.75zm5.27-7.94c-.29-.15-1.73-.85-2-.95s-.46-.14-.66.15-.75.95-.92 1.15-.34.22-.63.07a8.14 8.14 0 01-2.39-1.48 8.94 8.94 0 01-1.66-2.06c-.17-.29 0-.44.12-.58s.27-.33.41-.5.18-.27.27-.45.09-.3.14-.45.05-.32 0-.45-.66-1.55-.91-2.13-.48-.46-.66-.47h-.56c-.17 0-.45.06-.69.32s-.9.88-.9 2.15 1 2.5 1.14 2.67 1.96 3 4.77 4.13c.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.73-.7 1.98-1.37.25-.66.25-1.23.18-1.36-.07-.14-.26-.21-.54-.36z"/>
      </svg>
    </a>
  );
}
