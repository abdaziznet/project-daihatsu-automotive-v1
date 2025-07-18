"use client";

import Image from "next/image";
import { reviews } from "@/data/reviews";
import StarRating from "@/components/StarRating";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Reviews() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Kisah nyata dari pemilik mobil yang puas
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2">
                <div className="p-2 h-full">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.avatar} alt={review.name} />
                          <AvatarFallback className="bg-green-500 text-white">
                            {review.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-lg">{review.name}</h3>
                            <StarRating rating={review.rating} />
                          </div>
                          <p className="mt-2 text-muted-foreground text-sm">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                      {review.image && (
                        // <div className="mt-4 relative aspect-video w-full rounded-md overflow-hidden">
                        //   <Image
                        //     src={review.image}
                        //     alt={`Review image from ${review.name}`}
                        //     fill
                        //     className="object-cover"
                        //     data-ai-hint={review.dataAiHint}
                        //     sizes="(max-width: 768px) 100vw, 50vw"
                        //   />
                        // </div>
                        <div className="mt-4 relative aspect-[3/2] w-full max-w-[600px] rounded-md overflow-hidden">
                          <Image
                            src={review.image}
                            alt={`Review image from ${review.name}`}
                            fill
                            className="object-cover"
                            data-ai-hint={review.dataAiHint}
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
