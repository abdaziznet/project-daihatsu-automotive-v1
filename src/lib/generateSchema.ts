import type { Car } from "@/lib/types";

export function generateProductSchema(cars: Car[]) {
  const domain = "https://www.daihatsuautomotive.com";

  return cars.flatMap((car) =>
    car.variants.map((variant) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: variant.type,
      image: variant.image,
      description:
        variant.specs.fitur_utama || `Spesifikasi lengkap dari ${variant.type}`,
      brand: {
        "@type": "Brand",
        name: "Daihatsu",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: variant.price.replace(/[^\d]/g, ""), // Hapus "Rp. " dan titik
        availability: "https://schema.org/InStock",
        url: `${domain}/mobil/${slugify(variant.type)}`,
      },
    }))
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
