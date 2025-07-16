import type { BannerImage, Car, ContactPerson } from "@/lib/types";
import banner_1 from "@/assets/images/banner_1.png";
import banner_2 from "@/assets/images/banner_2.png";
import img_6ratus_4ratus from "@/assets/images/600x400.png";
import all_new_sigra from "@/assets/images/all-new-sigra.png";
import gran_max_pickup from "@/assets/images/grand-max-pickup.png";
import all_new_terios from "@/assets/images/all-new-terios.png";
import all_new_ayla from "@/assets/images/all-new-ayla.png";
import all_new_xenia from "@/assets/images/all-new-xenia.png";
import luxio from "@/assets/images/luxio.png";
import minibus from "@/assets/images/minibus.png";
import rocky from "@/assets/images/rocky.png";
import banner_3 from "@/assets/images/banner_3.png";
import banner_4 from "@/assets/images/banner_4.png";
import banner_5 from "@/assets/images/banner_5.png";
import banner_6 from "@/assets/images/banner_6.png";
import { max } from "date-fns";

export const bannerImages: BannerImage[] = [
  {
    id: 1,
    name: "Banner 1",
    image: "https://i.imgur.com/XS1mdI8.png",
    dataAiHint: "sports car",
  },
  {
    id: 2,
    name: "Banner 2",
    image: "https://i.imgur.com/x3K1KZf.png",
    dataAiHint: "sports car",
  },
  {
    id: 3,
    name: "Banner 3",
    image: "https://i.imgur.com/urbdcR9.png",
    dataAiHint: "promo",
  },
  {
    id: 4,
    name: "Banner 4",
    image: "https://i.imgur.com/31YCAnI.png",
    dataAiHint: "promo",
  },
  {
    id: 5,
    name: "Banner 5",
    image: "https://i.imgur.com/oeNgBUY.png",
    dataAiHint: "promo",
  },
  {
    id: 6,
    name: "Banner 6",
    image: "https://i.imgur.com/gN2UE8z.png",
    dataAiHint: "promo",
  },
];

export const contact: ContactPerson = {
  name: "Andriyansyah",
  phone: "+6289656941214",
  email: "andri010390@gmail.com",
  address: "Jl. Ciledug Raya, Jakarta, Indonesia",
};

export const cars: Car[] = [
  {
    id: "1",
    name: "New Sigra",
    image: "https://i.imgur.com/fPAgUdx.png",
    startingPrice: "Rp. 141.700.000",
    dataAiHint: "New Sigra",
    variants: [
      {
        type: "SIGRA 1.0 D MT MC",
        price: "Rp. 141.700.000",
        specs: {
          mesin: "1.0L 3-silinder, 67 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "Efisien & Irit BBM, AC Single Blower, Electric Power Steering",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
      {
        type: "SIGRA 1.0 M MT MC",
        price: "Rp. 154.100.000",
        specs: {
          mesin: "1.0L 3-silinder, 67 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "LED headlamp smoked, Rear wiper & shark-fin antenna, Rear air circulator, 2DIN audio + rear speaker, Immobilizer + alarm + remote, Parking sensor belakang",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
      {
        type: "SIGRA 1.2 X MT MC",
        price: "Rp. 161.800.000",
        specs: {
          mesin: "1.2L 4-silinder DOHC Dual VVT-i, 87 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "Rem depan cakram, belakang tromol, Suspensi MacPherson Strut & Torsion Beam, Power Steering elektrik, Ban 175/65 R14",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
      {
        type: "SIGRA 1.2 X MT DLX MC",
        price: "Rp. 167.400.000",
        specs: {
          mesin: "1.2L 4-silinder DOHC Dual VVT-i, 87 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "Rem depan cakram, belakang tromol, Suspensi MacPherson Strut & Torsion Beam, Power Steering elektrik, Ban 175/65 R14",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
      {
        type: "SIGRA 1.2 X AT MC",
        price: "Rp. 175.100.000",
        specs: {
          mesin: "1.2L 4-silinder DOHC Dual VVT-i, 87 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "Rem depan cakram, belakang tromol, Suspensi MacPherson Strut & Torsion Beam, Power Steering elektrik, Ban 175/65 R14",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
      {
        type: "SIGRA 1.2 X AT DLX MC",
        price: "Rp. 180.600.000",
        specs: {
          mesin: "1.2L 4-silinder DOHC Dual VVT-i, 87 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "Rem depan cakram, belakang tromol, Suspensi MacPherson Strut & Torsion Beam, Power Steering elektrik, Ban 175/65 R14",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
      {
        type: "SIGRA 1.2 R MT MC",
        price: "Rp. 168.500.000",
        specs: {
          mesin: "1.2L 4-silinder DOHC Dual VVT-i, 87 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "Rem depan cakram, belakang tromol, Suspensi MacPherson Strut & Torsion Beam, Power Steering elektrik, Ban 175/65 R14",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
      {
        type: "SIGRA 1.2 R MT DLX MC",
        price: "Rp. 172.300.000",
        specs: {
          mesin: "1.2L 4-silinder DOHC Dual VVT-i, 87 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "Rem depan cakram, belakang tromol, Suspensi MacPherson Strut & Torsion Beam, Power Steering elektrik, Ban 175/65 R14",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
      {
        type: "SIGRA 1.2 R AT MC",
        price: "Rp. 183.300.000",
        specs: {
          mesin: "1.2L 4-silinder DOHC Dual VVT-i, 87 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "Rem depan cakram, belakang tromol, Suspensi MacPherson Strut & Torsion Beam, Power Steering elektrik, Ban 175/65 R14",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
      {
        type: "SIGRA 1.2 R AT DLX MC",
        price: "Rp. 187.100.000",
        specs: {
          mesin: "1.2L 4-silinder DOHC Dual VVT-i, 87 PS",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.110 x 1.655 x 1.600 mm",
          fitur_utama:
            "Rem depan cakram, belakang tromol, Suspensi MacPherson Strut & Torsion Beam, Power Steering elektrik, Ban 175/65 R14",
        },
        image: "https://i.imgur.com/fPAgUdx.png", // Closing bracket for specs
      },
    ],
  },
  {
    id: "2",
    name: "Gran Max Pick Up",
    image: "https://i.imgur.com/uPOaDL1.png",
    startingPrice: "Rp. 163.550.000",
    dataAiHint: "Gran Max Pick Up",
    variants: [
      {
        type: "GRAN MAX PU 1.3 STD FH E4",
        price: "Rp. 163.550.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png", // Closing bracket for specs
      },
      {
        type: "GRAN MAX PU BOX 1.3 PT FH E4",
        price: "Rp. 187.750.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png", // Closing bracket for specs
      },
      {
        type: "GRAN MAX PU BOX 1.3 ALUMINUM PT FH E4",
        price: "Rp. 188.050.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
      {
        type: "GRAN MAX PU BOX 1.3 3W FH E4",
        price: "Rp. 163.550.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
      {
        type: "GRAN MAX PU BOX 1.3 3W PT FH E4",
        price: "Rp. 187.750.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
      {
        type: "GRAN MAX PU BOX 1.3 3W ALUMINUM FH E4",
        price: "Rp. 188.050.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
      {
        type: "GRAN MAX PU 1.3 STD GL E4",
        price: "Rp. 161.950.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
      {
        type: "GRAN MAX PU BOX 1.3 PT GL E4",
        price: "Rp. 186.250.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
      {
        type: "GRAN MAX PU BOX 1.3 ALUMINUM PT GL E4",
        price: "Rp. 186.550.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
      {
        type: "GRAN MAX PU 1.5 STD MC",
        price: "Rp. 169.550.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
      {
        type: "GRAN MAX PU BOX 1.5 PT MC",
        price: "Rp. 193.750.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
      {
        type: "GRAN MAX PU BOX 1.5 ALUMINUM PT MC",
        price: "Rp. 194.050.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC EFI, 87 PS / 115 Nm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.195 x 1.665 x 1.850 mm",
          fitur_utama:
            "Power Steering, Disc Cakram Depan, Suspensi MacPherson & Leaf Spring, Wheel Cover, EPS",
        },
        image: "https://i.imgur.com/uPOaDL1.png",
      },
    ],
  },
  {
    id: "3",
    name: "New Terios",
    image: "https://i.imgur.com/pb6sWfT.png",
    startingPrice: "Rp. 248.050.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "NEW TERIOS X MT MC",
        price: "Rp. 248.050.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png", // Closing bracket for specs
      },
      {
        type: "NEW TERIOS X MT ADS MC",
        price: "Rp. 260.000.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png",
      },
      {
        type: "NEW TERIOS X AT MC",
        price: "Rp. 258.450.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png",
      },
      {
        type: "NEW TERIOS X AT ADS MC",
        price: "Rp. 270.400.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png",
      },
      {
        type: "NEW TERIOS R MT MC",
        price: "Rp. 280.950.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png",
      },
      {
        type: "NEW TERIOS R MT ADS MC",
        price: "Rp. 290.950.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png",
      },
      {
        type: "NEW TERIOS R AT MC",
        price: "Rp. 291.450.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png",
      },
      {
        type: "NEW TERIOS R AT ADS MC",
        price: "Rp. 301.450.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png",
      },
      {
        type: "NEW TERIOS R MT CUSTOM MC",
        price: "Rp. 303.750.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png",
      },
      {
        type: "NEW TERIOS R AT CUSTOM MC",
        price: "Rp. 314.250.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC Dual VVT-i, 104 PS, 136 Nm",
          kapasitas_penumpang: "7",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.455 x 1.695 x 1.705 mm",
          fitur_utama:
            "LED Headlamp, Power Steering elektrik, 2DIN 7inc touchscreen, Double blower AC, Alloy Wheel 16",
        },
        image: "https://i.imgur.com/pb6sWfT.png",
      },
    ],
  },
  {
    id: "4",
    name: "All New Ayla",
    image: "https://i.imgur.com/lBguEW5.png",
    startingPrice: "Rp. 140.300.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "AYLA 1.0 M MT",
        price: "Rp. 140.300.000",
        specs: {
          mesin: "1.0L 3‑silinder DOHC VVT‑i, 67 PS (≒66 HP), 89 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "3.760 x 1.665 x 1.515 mm",
          fitur_utama:
            "Dual SRS Airbag, Power Window 4 pintu, AC, Power Steering, Charger, Rem Cakram Depan & Tromol Belakang",
        },
        image: "https://i.imgur.com/lBguEW5.png", // Closing bracket for specs
      },
      {
        type: "AYLA 1.0 X MT",
        price: "Rp. 153.200.000",
        specs: {
          mesin: "1.0L 3‑silinder DOHC VVT‑i, 67 PS (≒66 HP), 89 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "3.760 x 1.665 x 1.515 mm",
          fitur_utama:
            "Dual SRS Airbag, Power Window 4 pintu, AC, Power Steering, Charger, Rem Cakram Depan & Tromol Belakang",
        },
        image: "https://i.imgur.com/lBguEW5.png",
      },
      {
        type: "AYLA 1.0 X MT ADS",
        price: "Rp. 159.100.000",
        specs: {
          mesin: "1.0L 3‑silinder DOHC VVT‑i, 67 PS (≒66 HP), 89 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "3.760 x 1.665 x 1.515 mm",
          fitur_utama:
            "Dual SRS Airbag, Power Window 4 pintu, AC, Power Steering, Charger, Rem Cakram Depan & Tromol Belakang",
        },
        image: "https://i.imgur.com/lBguEW5.png",
      },
      {
        type: "AYLA 1.0 X CVT",
        price: "Rp. 173.200.000",
        specs: {
          mesin: "1.0L 3‑silinder DOHC VVT‑i, 67 PS (≒66 HP), 89 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "3.760 x 1.665 x 1.515 mm",
          fitur_utama:
            "Dual SRS Airbag, Power Window 4 pintu, AC, Power Steering, Charger, Rem Cakram Depan & Tromol Belakang",
        },
        image: "https://i.imgur.com/lBguEW5.png",
      },
      {
        type: "AYLA 1.0 X CVT ADS",
        price: "Rp. 179.100.000",
        specs: {
          mesin: "1.0L 3‑silinder DOHC VVT‑i, 67 PS (≒66 HP), 89 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "3.760 x 1.665 x 1.515 mm",
          fitur_utama:
            "Dual SRS Airbag, Power Window 4 pintu, AC, Power Steering, Charger, Rem Cakram Depan & Tromol Belakang",
        },
        image: "https://i.imgur.com/lBguEW5.png",
      },
      {
        type: "AYLA 1.2 R MT",
        price: "Rp. 170.300.000",
        specs: {
          mesin: "1.0L 3‑silinder DOHC VVT‑i, 67 PS (≒66 HP), 89 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "3.760 x 1.665 x 1.515 mm",
          fitur_utama:
            "Dual SRS Airbag, Power Window 4 pintu, AC, Power Steering, Charger, Rem Cakram Depan & Tromol Belakang",
        },
        image: "https://i.imgur.com/lBguEW5.png",
      },
      {
        type: "AYLA 1.2 R MT ADS",
        price: "Rp. 176.200.000",
        specs: {
          mesin: "1.0L 3‑silinder DOHC VVT‑i, 67 PS (≒66 HP), 89 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "3.760 x 1.665 x 1.515 mm",
          fitur_utama:
            "Dual SRS Airbag, Power Window 4 pintu, AC, Power Steering, Charger, Rem Cakram Depan & Tromol Belakang",
        },
        image: "https://i.imgur.com/lBguEW5.png",
      },
      {
        type: "AYLA 1.2 R CVT",
        price: "Rp. 190.300.000",
        specs: {
          mesin: "1.0L 3‑silinder DOHC VVT‑i, 67 PS (≒66 HP), 89 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "3.760 x 1.665 x 1.515 mm",
          fitur_utama:
            "Dual SRS Airbag, Power Window 4 pintu, AC, Power Steering, Charger, Rem Cakram Depan & Tromol Belakang",
        },
        image: "https://i.imgur.com/lBguEW5.png",
      },
      {
        type: "AYLA 1.2 R CVT ADS",
        price: "Rp. 196.200.000",
        specs: {
          mesin: "1.0L 3‑silinder DOHC VVT‑i, 67 PS (≒66 HP), 89 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "3.760 x 1.665 x 1.515 mm",
          fitur_utama:
            "Dual SRS Airbag, Power Window 4 pintu, AC, Power Steering, Charger, Rem Cakram Depan & Tromol Belakang",
        },
        image: "https://i.imgur.com/lBguEW5.png",
      },
    ],
  },
  {
    id: "5",
    name: "All New Xenia",
    image: "https://i.imgur.com/Fi3UNxw.png",
    startingPrice: "Rp. 227.950.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "XENIA 1.3 M MT",
        price: "Rp. 227.950.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png", // Closing bracket for specs
      },
      {
        type: "XENIA 1.3 X MT",
        price: "Rp. 231.150.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 X CVT",
        price: "Rp. 248.550.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R MT",
        price: "Rp. 242.150.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R MT ADS",
        price: "Rp. 251.250.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R MT ADS X",
        price: "Rp. 253.750.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R MT ADS X TWO TONE",
        price: "Rp. 255.750.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R MT SC",
        price: "Rp. 243.650.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R MT SC ADS",
        price: "Rp. 252.750.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R CVT",
        price: "Rp. 259.650.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R CVT ADS",
        price: "Rp. 268.650.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R CVT ADS X",
        price: "Rp. 271.150.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R CVT ADS X TWO TONE",
        price: "Rp. 273.150.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R CVT SC",
        price: "Rp. 261.150.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.3 R CVT SC ADS",
        price: "Rp. 270.150.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R MT",
        price: "Rp. 259.350.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R MT ADS",
        price: "Rp. 268.350.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R MT SC",
        price: "Rp. 260.850.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R MT SC ADS",
        price: "Rp. 269.850.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT",
        price: "Rp. 273.750.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT ADS",
        price: "Rp. 282.850.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT ADS X",
        price: "Rp. 285.350.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT ADS X TWO TONE",
        price: "Rp. 287.350.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT SC",
        price: "Rp. 275.250.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT SC ADS",
        price: "Rp. 284.350.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT ASA",
        price: "Rp. 283.650.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT ASA SC",
        price: "Rp. 285.150.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT ASA+",
        price: "Rp. 294.650.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
      {
        type: "XENIA 1.5 R CVT ASA+ SC",
        price: "Rp. 296.150.000",
        specs: {
          mesin: "1.3L 4-silinder DOHC Dual VVT-i, 98 PS, 138 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.395 x 1.730 x 1.695 mm",
          fitur_utama:
            'LED Headlamp, Electric Mirror, 7” touchscreen, Double blower AC, Dual SRS Airbag, Power Steering, 15" steel wheel + wheel cap',
        },
        image: "https://i.imgur.com/Fi3UNxw.png",
      },
    ],
  },
  {
    id: "6",
    name: "Gran Max Minibus",
    image: "https://i.imgur.com/beH8M9p.png",
    startingPrice: "Rp. 176.900.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "BV 1.3 FH E4",
        price: "Rp. 176.900.000",
        specs: {
          mesin:
            "1.3L 4-silinder DOHC EFI, 88 PS @ 6.000 rpm, 115 Nm @ 4.400 rpm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.045 x 1.665 x 1.900 mm",
          fitur_utama:
            "Power Steering, MacPherson Strut depan & leaf spring belakang, Disc cakram depan, Drum belakang, Wheel cover",
        },
        image: "https://i.imgur.com/beH8M9p.png", // Closing bracket for specs
      },
      {
        type: "BV 1.3 AC FH E4",
        price: "Rp. 181.100.000",
        specs: {
          mesin:
            "1.3L 4-silinder DOHC EFI, 88 PS @ 6.000 rpm, 115 Nm @ 4.400 rpm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.045 x 1.665 x 1.900 mm",
          fitur_utama:
            "Power Steering, MacPherson Strut depan & leaf spring belakang, Disc cakram depan, Drum belakang, Wheel cover",
        },
        image: "https://i.imgur.com/beH8M9p.png",
      },
      {
        type: "BV 1.3 AC AB E4",
        price: "Rp. 187.100.000",
        specs: {
          mesin:
            "1.3L 4-silinder DOHC EFI, 88 PS @ 6.000 rpm, 115 Nm @ 4.400 rpm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.045 x 1.665 x 1.900 mm",
          fitur_utama:
            "Power Steering, MacPherson Strut depan & leaf spring belakang, Disc cakram depan, Drum belakang, Wheel cover",
        },
        image: "https://i.imgur.com/beH8M9p.png",
      },
      {
        type: "BV 1.5 AC PS ABS MC",
        price: "Rp. 199.700.000",
        specs: {
          mesin:
            "1.3L 4-silinder DOHC EFI, 88 PS @ 6.000 rpm, 115 Nm @ 4.400 rpm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.045 x 1.665 x 1.900 mm",
          fitur_utama:
            "Power Steering, MacPherson Strut depan & leaf spring belakang, Disc cakram depan, Drum belakang, Wheel cover",
        },
        image: "https://i.imgur.com/beH8M9p.png",
      },
      {
        type: "MB 1.3 D FH E4",
        price: "Rp. 209.250.000",
        specs: {
          mesin:
            "1.3L 4-silinder DOHC EFI, 88 PS @ 6.000 rpm, 115 Nm @ 4.400 rpm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.045 x 1.665 x 1.900 mm",
          fitur_utama:
            "Power Steering, MacPherson Strut depan & leaf spring belakang, Disc cakram depan, Drum belakang, Wheel cover",
        },
        image: "https://i.imgur.com/beH8M9p.png",
      },
      {
        type: "MB 1.3 D AB E4",
        price: "Rp. 215.850.000",
        specs: {
          mesin:
            "1.3L 4-silinder DOHC EFI, 88 PS @ 6.000 rpm, 115 Nm @ 4.400 rpm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.045 x 1.665 x 1.900 mm",
          fitur_utama:
            "Power Steering, MacPherson Strut depan & leaf spring belakang, Disc cakram depan, Drum belakang, Wheel cover",
        },
        image: "https://i.imgur.com/beH8M9p.png",
      },
      {
        type: "MB 1.3 D FF FH E4",
        price: "Rp. 216.050.000",
        specs: {
          mesin:
            "1.3L 4-silinder DOHC EFI, 88 PS @ 6.000 rpm, 115 Nm @ 4.400 rpm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.045 x 1.665 x 1.900 mm",
          fitur_utama:
            "Power Steering, MacPherson Strut depan & leaf spring belakang, Disc cakram depan, Drum belakang, Wheel cover",
        },
        image: "https://i.imgur.com/beH8M9p.png",
      },
      {
        type: "MB 1.5 D PS MC",
        price: "Rp. 229.850.000",
        specs: {
          mesin:
            "1.3L 4-silinder DOHC EFI, 88 PS @ 6.000 rpm, 115 Nm @ 4.400 rpm",
          kapasitas_penumpang: "3",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.045 x 1.665 x 1.900 mm",
          fitur_utama:
            "Power Steering, MacPherson Strut depan & leaf spring belakang, Disc cakram depan, Drum belakang, Wheel cover",
        },
        image: "https://i.imgur.com/beH8M9p.png",
      },
    ],
  },
  {
    id: "7",
    name: "Rocky",
    image: "https://i.imgur.com/vOQRGT8.png",
    startingPrice: "Rp. 214.250.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "ROCKY 1.2 M MT",
        price: "Rp. 214.250.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png", // Closing bracket for specs
      },
      {
        type: "ROCKY 1.2 M MT SC",
        price: "Rp. 215.750.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 M CVT",
        price: "Rp. 232.150.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 M CVT SC",
        price: "Rp. 233.650.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 X MT",
        price: "Rp. 228.350.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 X MT ADS",
        price: "Rp. 236.450.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 X MT SC",
        price: "Rp. 229.850.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 X MT ADS SC",
        price: "Rp. 237.950.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 X CVT",
        price: "Rp. 246.250.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 X CVT ADS",
        price: "Rp. 254.350.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 X CVT SC",
        price: "Rp. 247.750.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.2 X CVT ADS SC",
        price: "Rp. 255.850.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC MT",
        price: "Rp. 254.250.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC MT SC",
        price: "Rp. 255.750.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC MT TWO TONE",
        price: "Rp. 256.750.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC MT TWO TONE SC",
        price: "Rp. 257.750.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC MT ADS",
        price: "Rp. 262.350.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC MT ADS SC",
        price: "Rp. 263.850.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC MT ADS TWO TONE",
        price: "Rp. 264.850.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC MT ADS TWO TONE SC",
        price: "Rp. 265.850.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT",
        price: "Rp. 269.250.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT SC",
        price: "Rp. 270.750.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT TWO TONE",
        price: "Rp. 271.750.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT TWO TONE SC",
        price: "Rp. 272.750.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT ADS",
        price: "Rp. 277.350.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT ADS SC",
        price: "Rp. 278.850.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT ADS TWO TONE",
        price: "Rp. 279.850.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT ADS TWO TONE SC",
        price: "Rp. 280.850.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT ASA",
        price: "Rp. 279.150.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT ASA SC",
        price: "Rp. 280.650.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT ASA TWO TONE",
        price: "Rp. 281.650.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT ASA TWO TONE SC",
        price: "Rp. 282.650.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
      {
        type: "ROCKY 1.0 R TC CVT ASA+ SC",
        price: "Rp. 291.650.000",
        specs: {
          mesin: "1.2L 3-silinder DOHC, 88 PS (87 hp), 113 Nm",
          kapasitas_penumpang: "5",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.030 x 1.710 x 1.635 mm",
          fitur_utama:
            "Halogen headlamp, Power Steering elektrik, 7inc touchscreen, Dual SRS Airbag, ABS & EBD",
        },
        image: "https://i.imgur.com/vOQRGT8.png",
      },
    ],
  },
  {
    id: "8",
    name: "Luxio",
    image: "https://i.imgur.com/10eqeaj.png",
    startingPrice: "Rp. 240.750.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "LUXIO 1.5 D M/T MC E4",
        price: "Rp. 240.750.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC VVT-i, 97PS, 134Nm",
          kapasitas_penumpang: "8",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.215 x 1.710 x 1.915 mm",
          fitur_utama:
            "Power Steering, Dual reflector headlamp, AC, Rear A/C vents",
        },
        image: "https://i.imgur.com/10eqeaj.png", // Closing bracket for specs
      },
      {
        type: "LUXIO 1.5 X M/T MC E4",
        price: "Rp. 259.950.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC VVT-i, 97PS, 134Nm",
          kapasitas_penumpang: "8",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.215 x 1.710 x 1.915 mm",
          fitur_utama:
            "Power Steering, Dual reflector headlamp, AC, Rear A/C vents",
        },
        image: "https://i.imgur.com/10eqeaj.png",
      },
      {
        type: "LUXIO 1.5 X A/T MC E4",
        price: "Rp. 272.050.000",
        specs: {
          mesin: "1.5L 4-silinder DOHC VVT-i, 97PS, 134Nm",
          kapasitas_penumpang: "8",
          transmisi: "Manual 5-percepatan",
          bahan_bakar: "Bensin",
          dimensi: "4.215 x 1.710 x 1.915 mm",
          fitur_utama:
            "Power Steering, Dual reflector headlamp, AC, Rear A/C vents",
        },
        image: "https://i.imgur.com/10eqeaj.png",
      },
    ],
  },
];

// export const cars: Car[] = [
//   {
//     id: 1,
//     name: "New Terios",
//     price: "Rp. ",
//     image: "https://placehold.co/600x400.png",
//     promoImage: "https://placehold.co/1200x600.png",
//     dataAiHint: "sports car",
//     specs: {
//       engine: "4.0L Twin-Turbo V8",
//       horsepower: "650 hp",
//       fuelType: "Gasoline",
//       transmission: "8-Speed Automatic",
//       mileage: "15 MPG",
//     },
//   },
//   {
//     id: 2,
//     name: "Nebula Sedan",
//     price: "$55,000",
//     image: "https://placehold.co/600x400.png",
//     promoImage: "https://placehold.co/1200x600.png",
//     dataAiHint: "luxury sedan",
//     specs: {
//       engine: "3.0L Turbocharged I6",
//       horsepower: "380 hp",
//       fuelType: "Hybrid",
//       transmission: "9-Speed Automatic",
//       mileage: "28 MPG",
//     },
//   },
//   {
//     id: 3,
//     name: "TerraHauler SUV",
//     price: "$72,000",
//     image: "https://placehold.co/600x400.png",
//     promoImage: "https://placehold.co/1200x600.png",
//     dataAiHint: "modern suv",
//     specs: {
//       engine: "5.7L V8",
//       horsepower: "420 hp",
//       fuelType: "Gasoline",
//       transmission: "10-Speed Automatic",
//       mileage: "18 MPG",
//     },
//   },
//   {
//     id: 4,
//     name: "Volt-R EV",
//     price: "$95,000",
//     image: "https://placehold.co/600x400.png",
//     promoImage: "https://placehold.co/1200x600.png",
//     dataAiHint: "electric car",
//     specs: {
//       engine: "Dual Electric Motor",
//       horsepower: "780 hp",
//       fuelType: "Electric",
//       transmission: "Single-Speed",
//       mileage: "350-mile range",
//     },
//   },
//   {
//     id: 5,
//     name: "Compact Cruiser",
//     price: "$28,000",
//     image: "https://placehold.co/600x400.png",
//     promoImage: "https://placehold.co/1200x600.png",
//     dataAiHint: "compact car",
//     specs: {
//       engine: "1.5L Turbo I4",
//       horsepower: "180 hp",
//       fuelType: "Gasoline",
//       transmission: "CVT",
//       mileage: "35 MPG",
//     },
//   },
//   {
//     id: 6,
//     name: "Apex Hypercar",
//     price: "$1,200,000",
//     image: "https://placehold.co/600x400.png",
//     promoImage: "https://placehold.co/1200x600.png",
//     dataAiHint: "supercar hypercar",
//     specs: {
//       engine: "6.5L V12 + E-Motor",
//       horsepower: "1001 hp",
//       fuelType: "Hybrid",
//       transmission: "7-Speed Dual-Clutch",
//       mileage: "12 MPG",
//     },
//   },
// ];
