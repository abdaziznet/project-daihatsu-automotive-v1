import {
  Car,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Contact2Icon,
  Contact,
  ContactIcon,
  HomeIcon,
  CarIcon,
  InfoIcon,
  ListIcon,
  StarIcon,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/daihatsu-automotive-logo.png";
import { contact } from "@/data/cars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Link
              href="#"
              className="flex items-center gap-2 mb-4"
              prefetch={false}
            >
              <Image
                src="https://i.imgur.com/HaSMxWd.png"
                alt="Daihatsu Automotive Logo"
                width={200}
                height={100}
                className="h-30 w-auto"
              />
              {/* <Car className="h-8 w-8" />
              <span className="text-2xl font-bold">AutoShowcase</span> */}
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Cara terbaik untuk menemukan mobil impian anda berikutnya
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#top-of-page"
                  className="flex items-center text-sm hover:underline gap-2"
                  prefetch={false}
                >
                  <HomeIcon className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#catalog"
                  className="flex items-center text-sm hover:underline gap-2"
                  prefetch={false}
                >
                  <CarIcon className="h-4 w-4" />
                  <span>Catalog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#details"
                  className="flex items-center text-sm hover:underline gap-2"
                  prefetch={false}
                >
                  <ListIcon className="h-4 w-4" />
                  <span>Details</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="flex items-center text-sm hover:underline gap-2"
                  prefetch={false}
                >
                  <StarIcon className="h-4 w-4" />
                  <span>Reviews</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="flex items-center text-sm hover:underline gap-2"
                  prefetch={false}
                >
                  <ContactIcon className="h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <a
                  href={`mailto:${contact.email}?subject=Ketertarikan%20Mobil&body=Halo,%0ASaya tertarik dengan mobil yang Anda tawarkan di website resmi anda dan ingin mengetahui informasi lebih lanjut. Mohon bantuannya untuk detail lengkapnya. Terima kasih.`}
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>{contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${
                    contact.phone
                  }?text=${encodeURIComponent(
                    "Halo admin Daihatsu Automotive, saya tertarik dengan promo dan penjualan mobil Daihatsu yang ada di website. Boleh saya tahu info lebih lanjutnya. Terima kasih."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  {/* <Phone className="h-4 w-4" /> */}
                  <FontAwesomeIcon icon={faWhatsapp} className="!h-5 !w-5" />
                  <span>{contact.phone}</span>
                </a>
              </li>
              {/* <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{contact.address}</span>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/1Aht7rEovw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                prefetch={false}
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.tiktok.com/@daihatsu.automotive?_t=ZS-8xuHnDDhvVK&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                prefetch={false}
                aria-label="Tiktok"
              >
                <FontAwesomeIcon icon={faTiktok} className="!h-5 !w-5" />
                {/* <Twitter className="h-6 w-6" /> */}
              </Link>
              <Link
                href="https://www.instagram.com/daihatsu_automotive/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                prefetch={false}
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@daihatsu_automotive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                prefetch={false}
                aria-label="Youtube"
              >
                <Youtube className="h-6 w-6" />
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
