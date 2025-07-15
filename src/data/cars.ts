import type { BannerImage, Car, ContactPerson } from "@/lib/types";
import banner_1 from "@/assets/images/banner-1.png"
import banner_2 from "@/assets/images/banner_2.png"
import img_6ratus_4ratus from "@/assets/images/600x400.png";
import all_new_sigra from "@/assets/images/all-new-sigra.png";
import gran_max_pickup from "@/assets/images/grand-max-pickup.png";
import all_new_terios from "@/assets/images/all-new-terios.png";
import all_new_ayla from "@/assets/images/all-new-ayla.png";
import all_new_xenia from "@/assets/images/all-new-xenia.png";
import luxio from "@/assets/images/luxio.png";
import minibus from "@/assets/images/minibus.png";
import rocky from "@/assets/images/rocky.png";


export const bannerImages: BannerImage[] = [
  {
    id:1,
    name: "New Terios",
    image: `${banner_1.src}`,
    dataAiHint: "sports car",
  },
  {
    id:2,
    name: "New Terios",
    image: `${banner_2.src}`,
    dataAiHint: "sports car",
  }
  
]

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
    image: `${all_new_sigra.src}`,
    startingPrice: "Rp. 141.700.000",
    dataAiHint: "New Sigra",
    variants: [
      {
        type: "SIGRA 1.0 D MT MC",
        price: "Rp. 141.700.000", 
        specs: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${all_new_sigra.src}`, // Closing bracket for specs
      },
      {
        type: "SIGRA 1.0 M MT MC",
        price: "Rp. 154.100.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${all_new_sigra.src}`, // Closing bracket for specs
      },
      {
        type: "SIGRA 1.2 X MT MC",
        price: "Rp. 161.800.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${img_6ratus_4ratus.src}`, // Closing bracket for specs
      },
    ],
  },
  {
    id: "2",
    name: "Gran Max Pick Up",
    image: `${gran_max_pickup.src}`,
    startingPrice: "Rp. 163.550.000",
    dataAiHint: "Gran Max Pick Up",
    variants: [
      {
        type: "GRAN MAX PU 1.3 STD FH E4",
        price: "Rp. 163.550.000", 
        specs: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${gran_max_pickup.src}`, // Closing bracket for specs
      },
      {
        type: "GRAN MAX PU BOX 1.3 PT FH E4",
        price: "Rp. 187.750.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${img_6ratus_4ratus.src}`, // Closing bracket for specs
      },
    ],
  },
  {
    id: "3",
    name: "New Terios",
    image: `${all_new_terios.src}`,
    startingPrice: "Rp. 300.000.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "NEW TERIOS X MТ МС",
        price: "Rp. 350.000.000", 
        specs: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${all_new_terios.src}`, // Closing bracket for specs
      },
      {
        type: "NEW TERIOS X MT ADS MC",
        price: "Rp. 400.000.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${img_6ratus_4ratus.src}`, // Closing bracket for specs
      },
    ],
  },
  {
    id: "4",
    name: "All New Ayla",
    image: `${all_new_ayla.src}`,
    startingPrice: "Rp. 140.300.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "AYLA 1.0 M MT",
        price: "Rp. 140.300.000", 
        specs: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${all_new_ayla.src}`, // Closing bracket for specs
      },
      {
        type: "AYLA 1.0 X MT",
        price: "Rp. 153.200.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${img_6ratus_4ratus.src}`, // Closing bracket for specs
      },
    ],
  },
  {
    id: "5",
    name: "All New Xenia",
    image: `${all_new_xenia.src}`,
    startingPrice: "Rp. 227.950.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "ALL NEW XENIA 1.3 M MT",
        price: "Rp. 227.950.000", 
        specs: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${all_new_xenia.src}`, // Closing bracket for specs
      },
      {
        type: "ALL NEW XENIA 1.3 X MT",
        price: "Rp. 231.150.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${img_6ratus_4ratus.src}`, // Closing bracket for specs
      },
    ],
  },
  {
    id: "6",
    name: "Gran Max Minibus",
    image: `${minibus.src}`,
    startingPrice: "Rp. 176.900.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "BV 1.3 FH E4",
        price: "Rp. 176.900.000", 
        specs: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${minibus.src}`, // Closing bracket for specs
      },
      {
        type: "BV 1.3 AC FH E4",
        price: "Rp. 181.100.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${img_6ratus_4ratus.src}`, // Closing bracket for specs
      },
    ],
  },
  {
    id: "7",
    name: "Rocky",
    image: `${rocky.src}`,
    startingPrice: "Rp. 214.250.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "ROCKY 1.2 M MT",
        price: "Rp. 214.250.000", 
        specs: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${rocky.src}`, // Closing bracket for specs
      },
      {
        type: "ROCKY 1.2 M MT Sc",
        price: "Rp. 215.750.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${img_6ratus_4ratus.src}`, // Closing bracket for specs
      },
    ],
  },
  {
    id: "8",
    name: "Luxio",
    image: `${luxio.src}`,
    startingPrice: "Rp. 240.750.000",
    dataAiHint: "sports car",
    variants: [
      {
        type: "LUXIO 1.5 D M/T MC E4",
        price: "Rp. 240.750.000", 
        specs: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${luxio.src}`, // Closing bracket for specs
      },
      {
        type: "LUXIO 1.5 X M/T MC E4",
        price: "Rp. 259.950.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${img_6ratus_4ratus.src}`, // Closing bracket for specs
      },
      {
        type: "LUXIO 1.5 X A/T MC E4",
        price: "Rp. 272.050.000", 
        specs: {
          engine: "5.0L Twin-Turbo V8",
          horsepower: "650 hp",
          fuelType: "Gasoline",
          transmission: "8-Speed Automatic",
          mileage: "15 MPG",
        },
        image: `${img_6ratus_4ratus.src}`, // Closing bracket for specs
      },
    ],
  },
  
  


]

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
