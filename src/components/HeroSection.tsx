"use client";

import Image from "next/image";
import type { Car } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";

interface HeroSectionProps {
  car: Car;
}

export default function HeroSection({ car }: HeroSectionProps) {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={car.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-64 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src={car.image}
                alt={`Image of ${car.name}`}
                fill
                className="object-cover"
                data-ai-hint={car.dataAiHint}
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={car.id + '-details'}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary font-headline">
                {car.name}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Starting at <span className="font-bold text-accent">{car.price}</span>
              </p>
              <Card className="mt-6 bg-white/50 dark:bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Specifications</h3>
                  <ul className="space-y-3 text-sm">
                    {Object.entries(car.specs).map(([key, value]) => (
                      <li key={key} className="flex justify-between border-b pb-2 last:border-b-0">
                        <span className="capitalize text-muted-foreground">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-semibold">{value}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Button size="lg" className="mt-8 w-full sm:w-auto">
                Book a Test Drive
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
