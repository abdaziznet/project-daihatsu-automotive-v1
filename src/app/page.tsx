"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CarCarousel from "@/components/CarCarousel";
import HeroSection from "@/components/HeroSection";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";
import { bannerImages, cars } from "@/data/cars";
import type { Car } from "@/lib/types";
import Reviews from "@/components/Reviews";
import { generateProductSchema } from "@/lib/generateSchema";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// 🔥 Tambahkan metadata di sini

export default function Home() {
  const [selectedCar, setSelectedCar] = useState<Car>(cars[0]);

  const bannerPromoImage = bannerImages.map((banner) => ({
    image: banner.image,
    name: banner.name,
    dataAiHint: banner.dataAiHint,
  }));

  return (
    <>
      {/* 🔥 Ini penting untuk SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductSchema(cars)),
        }}
      />

      <FloatingWhatsApp />

      {/* UI Website */}
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <div id="top-of-page">
            <CarCarousel images={bannerPromoImage} />
          </div>
          <div id="details">
            <HeroSection car={selectedCar} />
          </div>
          <div id="catalog">
            <FeaturedCars cars={cars} onCarSelect={setSelectedCar} />
          </div>
          <div id="reviews">
            <Reviews />
          </div>
        </main>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
}
