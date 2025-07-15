import {
  Car,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/daihatsu-automotive-logo.png";
import { contact } from "@/data/cars";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link
              href="#"
              className="flex items-center gap-2 mb-4"
              prefetch={false}
            >
              <Image
                src={logo}
                alt="Daihatsu Automotive Logo"
                className="h-30 w-auto"
              />
              {/* <Car className="h-8 w-8" />
              <span className="text-2xl font-bold">AutoShowcase</span> */}
            </Link>
            <p className="text-sm text-primary-foreground/80">
              The best way to find your next dream car.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm hover:underline"
                  prefetch={false}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#catalog"
                  className="text-sm hover:underline"
                  prefetch={false}
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="#details"
                  className="text-sm hover:underline"
                  prefetch={false}
                >
                  Details
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm hover:underline"
                  prefetch={false}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                prefetch={false}
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                prefetch={false}
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                prefetch={false}
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/80">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="http://abdaziz.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white transition-colors duration-200"
            >
              Abdaziznet.
            </Link>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
