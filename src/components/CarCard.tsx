"use client";

import Image from "next/image";
import type { Car } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CarCardProps {
  car: Car;
  onCarSelect: (car: Car) => void;
}

export default function CarCard({ car, onCarSelect }: CarCardProps) {
  const handleViewDetails = () => {
    onCarSelect(car);
    const detailsSection = document.getElementById("details");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          <Image
            src={car.image}
            alt={`Image of ${car.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={car.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-bold text-primary font-headline">
          {car.name}
        </CardTitle>
        <p className="text-lg font-semibold text-accent mt-1">
          Mulai dari {car.startingPrice}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleViewDetails} className="w-full">
          Lihat Detail
        </Button>
      </CardFooter>
    </Card>
  );
}
