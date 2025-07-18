// app/components/FloatingWhatsApp.tsx atau src/components/FloatingWhatsApp.tsx
"use client";

import { contact } from "@/data/cars";

export default function FloatingWhatsApp() {
  const message =
    "Halo admin Daihatsu Automotive, saya tertarik dengan promo dan penjualan mobil Daihatsu yang ada di website. Boleh saya tahu info lebih lanjutnya. Terima kasih."; // Pesan default
  const whatsappUrl = `https://wa.me/${contact.phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg transition-all duration-300 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0a11.84 11.84 0 0 0-10 18.58L0 24l5.57-1.46A11.83 11.83 0 0 0 12 24h.06a11.84 11.84 0 0 0 8.46-20.52zM12 21.5a9.55 9.55 0 0 1-4.86-1.3l-.35-.21-3.3.87.88-3.22-.22-.33a9.6 9.6 0 1 1 17.88-5.22A9.56 9.56 0 0 1 12 21.5zm5.26-7.35c-.29-.15-1.7-.84-1.96-.93s-.45-.14-.64.15-.73.93-.89 1.13-.33.22-.62.07a7.82 7.82 0 0 1-2.3-1.43 8.59 8.59 0 0 1-1.58-2c-.17-.3 0-.46.13-.6s.3-.33.45-.5a2.07 2.07 0 0 0 .3-.51.57.57 0 0 0-.03-.51c-.08-.14-.64-1.55-.88-2.13s-.45-.49-.64-.5h-.55a1.06 1.06 0 0 0-.76.36 3.2 3.2 0 0 0-1 2.39 5.55 5.55 0 0 0 1.17 2.71 12.68 12.68 0 0 0 5.58 4.83c.78.34 1.39.54 1.87.69a4.48 4.48 0 0 0 2.05.13 3.34 3.34 0 0 0 2.1-1.5 2.75 2.75 0 0 0 .19-1.5c-.08-.15-.26-.23-.55-.38z" />
        </svg>
      </div>
    </a>
  );
}
