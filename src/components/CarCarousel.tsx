"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselImage {
  image: string;
  name: string;
  dataAiHint: string;
}

interface CarCarouselProps {
  images: CarouselImage[];
}

export default function CarCarousel({ images }: CarCarouselProps) {
  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] md:h-[500px] lg:h-[800px] w-full">
                <Image
                  src={img.image}
                  alt={`Promotional image of ${img.name}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={img.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <h2 className="text-3xl md:text-5xl font-bold text-white shadow-lg font-headline">
                    Temukan yang baru "{img.name}"
                  </h2>
                  <p className="text-lg text-white/90 mt-2 max-w-lg">
                    Rasakan performa dan kemewahan yang tak tertandingi
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
      </Carousel>
    </section>
  );
}
