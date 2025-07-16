import type { Review } from "@/lib/types";
import img_600x400 from "@/assets/images/600x400.png";
import img_40x40 from "@/assets/images/40x40.png";
import review_1 from "@/assets/images/review-1.png";
import review_2 from "@/assets/images/review-2.png";

export const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://i.imgur.com/nVfo57Y.png",
    rating: 5,
    comment:
      "Senang sekali dengan Grand Max Mini Bus saya! Pak Andri luar biasa dan membuat seluruh proses berjalan lancar. Mobil ini sungguh impian untuk dikendarai.",
    image: "https://i.imgur.com/b5uqrrn.png",
    dataAiHint: "happy driver",
  },
  {
    id: 2,
    name: "Samantha Bee",
    avatar: "https://i.imgur.com/nVfo57Y.png",
    rating: 5,
    comment:
      "Sirion adalah perpaduan sempurna antara kemewahan dan performa. Saya sangat puas dengan pembelian saya. Mesin ini ternyata bertenaga dan efisien.",
    image: "https://i.imgur.com/5xeJVh5.png",
    dataAiHint: "luxury sedan",
  },
  {
    id: 3,
    name: "Mike Chen",
    avatar: "https://i.imgur.com/nVfo57Y.png",
    rating: 4,
    comment:
      "Keluarga saya sangat menyukai SUV Rocky baru kami. Luas, nyaman, dan pengendaliannya luar biasa. Satu-satunya kekurangannya adalah konsumsi bahan bakarnya yang irit, tapi itu wajar untuk mesin V8.",
    image: "https://i.imgur.com/pxxR7wz.png",
    dataAiHint: "family suv",
  },
  {
    id: 4,
    name: "Jessica Miller",
    avatar: "https://i.imgur.com/nVfo57Y.png",
    rating: 5,
    comment:
      "Beralih ke All New Sigra adalah keputusan terbaik! Mobil ini luar biasa cepat, senyap, dan saya senang tidak perlu membayar lebih. Pak Andri sangat membantu dan profesional.",
    image: "https://i.imgur.com/wITJABK.png",
    dataAiHint: "electric vehicle",
  },
];
