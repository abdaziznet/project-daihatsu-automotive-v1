"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CarCarousel from "@/components/CarCarousel";
import HeroSection from "@/components/HeroSection";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";
import { bannerImages, cars } from "@/data/cars";
import type { Car } from "@/lib/types";

export default function Home() {
  const [selectedCar, setSelectedCar] = useState<Car>(cars[0]);

  // const promoImages = cars.map((car) => ({
  //   image: car.promoImage,
  //   name: car.name,
  //   dataAiHint: car.dataAiHint,
  // }));

  const bannerPromoImage = bannerImages.map((banner) => ({
    image: banner.image,
    name: banner.name,
    dataAiHint: banner.dataAiHint,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <CarCarousel images={bannerPromoImage} />
        <div id="details">
          <HeroSection car={selectedCar} />
        </div>
        <div id="catalog">
          <FeaturedCars cars={cars} onCarSelect={setSelectedCar} />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
