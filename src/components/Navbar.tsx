"use client";

import { Car, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/daihatsu-logo.svg";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

const navLinks = [
  { href: "#top-of-page", label: "Home" },
  { href: "#catalog", label: "Catalog" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image
            src={logo} // Pastikan path diawali dengan '/'
            alt="Daihatsu Logo"
            className="h-10 w-auto"
          />
          {/* <img src={logo.src} alt="Daihatsu Logo" className="h-8 w-auto" /> */}
          {/* <Car className="h-6 w-6 text-primary" /> */}
          {/* <span className="font-bold text-lg">AutoShowcase</span> */}
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              // className="text-sm font-medium hover:text-primary transition-colors"
              className="block py-2 px-4 text-gray-800 rounded-md 
                         hover:bg-primary hover:text-white 
                         transition-colors duration-300 ease-in-out"
              prefetch={false}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 font-bold"
                  prefetch={false}
                  onClick={() => setSheetOpen(false)}
                >
                  {/* <Car className="h-6 w-6 text-primary" />
                  <span>AutoShowcase</span> */}
                  <Image
                    src={logo} // Pastikan path diawali dengan '/'
                    alt="Daihatsu Logo"
                    className="h-10 w-auto"
                  />
                </Link>
                <div className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm font-medium hover:text-primary transition-colors py-2"
                      prefetch={false}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(link.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                        setSheetOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
