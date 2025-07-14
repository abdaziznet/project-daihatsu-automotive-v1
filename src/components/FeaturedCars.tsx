"use client";

import type { Car } from "@/lib/types";
import CarCard from "./CarCard";

interface FeaturedCarsProps {
  cars: Car[];
  onCarSelect: (car: Car) => void;
}

export default function FeaturedCars({ cars, onCarSelect }: FeaturedCarsProps) {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-secondary/30 dark:bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Featured Vehicles
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our hand-picked selection of premium cars.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} onCarSelect={onCarSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
