"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src="https://player.vimeo.com/video/110625611?h=b1fdcc6727&background=1&autoplay=1&loop=1&byline=0&title=0"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Hero Section */}
      <section className="w-full h-full flex items-center justify-center relative z-20">
        <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white animate-fade-down animate-duration-700">
            Telling true stories that matter
          </h1>
          <p className="max-w-[42rem] text-white text-xl sm:text-2xl leading-normal animate-fade-down animate-delay-300">
            A company that does it all.
          </p>
          <div className="animate-fade-up animate-delay-500">
            <Link href="/our-work">
              <Button size="lg" className="text-lg px-8 py-6">
                View Our Work <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
