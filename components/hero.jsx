"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {

const imageRef = useRef(null);

useEffect(() => {
  const imageElement = imageRef.current;
      
    const handleScroll = () => {
        const scrollPosotion = window.scrollY;
        const scrollThreshold = 100;

        if(scrollPosotion > scrollThreshold)
        {
            imageElement.classList.add("scrolled");
        }
        else
        {
          imageElement.classList.remove("scrolled");
        }
    };
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
},[]);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            The Future of Job Hunting
            <br />
            Starts Here
          </h1>
          <p className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl">
            Your AI-powered partner for professional success—resume, cover
            letter, and interview mastery.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
            <div ref={imageRef} className="hero-image">
                <Image 
                    src={'/banner.jpeg'}
                    width = {1280}
                    height={720}
                    alt = "Banner Preview"
                    className = "rounder-lg shadow-2xl border mx-auto"
                    priority
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
