import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Hoang Long Am Thanh So",
  description: "About us page",
};

export default function AboutUsPage() {
  return (
    <main className="container py-10">
      <div className="relative">
        <div className="absolute inset-0 bg-[#029CF6] opacity-30"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
          <div className="space-y-4"></div>
          <div className="text-white text-[28px] leading-relaxed">
            Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn
            giản. Tôi biết những người yêu mến tôi là vì sự chân thật và giản
            dị.
          </div>
        </div>
      </div>
    </main>
  );
}
