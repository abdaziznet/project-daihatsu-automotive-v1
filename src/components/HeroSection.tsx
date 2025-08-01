"use client";

import Image from "next/image";
import type { Car } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { contact } from "@/data/cars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Download, X, Calculator } from "lucide-react";
import { Dialog } from "@headlessui/react"; // install: npm i @headlessui/react

interface HeroSectionProps {
  car: Car;
}

export default function HeroSection({ car }: HeroSectionProps) {
  const [selectedVariant, setSelectedVariant] = useState(() =>
    car.variants.length > 0 ? car.variants[0] : null
  );

  const [showCreditSimulationModal, setShowCreditSimulationModal] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    dp: "",
    tenor: "12 Bulan (1 Tahun)",
  });

  const handleAjukanSimulasi = () => {
    if (!form.name || !form.phone || !form.dp) {
      alert("Mohon lengkapi semua data terlebih dahulu.");
      return;
    }

    const text = [
      `Halo, saya ${form.name} ingin simulasi kredit:`,
      `• Nomor Whatsapp : ${form.phone}`,
      `• Mobil : ${car.name}`,
      `• Tipe  : ${selectedVariant?.type}`,
      // `• Harga : ${selectedVariant?.price}`,
      `• DP    : ${form.dp}`,
      `• Tenor : ${form.tenor}`,
      "",
      "Mohon info lebih lanjut. Terima kasih!",
    ].join("\n");

    const url = `https://wa.me/${contact.phone}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");

    // ✅ Reset form
    setForm({
      name: "",
      phone: "",
      dp: "",
      tenor: "12 Bulan (1 Tahun)",
    });

    // ✅ Tutup modal
    setShowCreditSimulationModal(false);
  };

  useEffect(() => {
    if (car.variants.length > 0) {
      setSelectedVariant(car.variants[0]);
    }
  }, [car]);

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = car.variants.find((v) => v.type === e.target.value);
    if (selected) {
      setSelectedVariant(selected);
    }
  };

  const handleWhatsAppClick = useCallback(() => {
    if (!selectedVariant) return;

    // rakit pesan: nama mobil, tipe, harga
    const text = [
      "Halo, saya tertarik dengan penawaran berikut:",
      `• Mobil : ${car.name}`,
      `• Tipe   : ${selectedVariant.type}`,
      // `• Harga  : ${selectedVariant.price}`,
      "",
      "Mohon informasinya lebih lanjut, terima kasih.",
    ].join("\n");

    // encode & buka di tab baru
    const url = `https://wa.me/${contact.phone}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  }, [car.name, selectedVariant]);

  // const handleDownloadClick = () => {
  //   const link = document.createElement("a");
  //   link.href = "/daftar-harga.pdf"; // path ke file di public/
  //   link.download = "daftar-harga.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleBrosurClick = useCallback(() => {
    if (!selectedVariant) return;

    // rakit pesan: nama mobil, tipe, harga
    const text = [
      "Halo, saya ingin mendapatkan brosur dan daftar harga untuk mobil berikut:",
      `• Mobil : ${car.name}`,
      `• Tipe   : ${selectedVariant.type}`,
      "",
      "Mohon informasinya lebih lanjut, terima kasih.",
    ].join("\n");

    // encode & buka di tab baru
    const url = `https://wa.me/${contact.phone}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  }, [car.name, selectedVariant]);

  //console.log("Selected variant:", selectedVariant);
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatePresence mode="wait">
            {selectedVariant && (
              <motion.div
                key={selectedVariant.type}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-64 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src={selectedVariant.image}
                  alt={`Image of ${car.name} ${selectedVariant.type}`}
                  fill
                  className="object-cover"
                  data-ai-hint={car.dataAiHint}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {selectedVariant && (
              <motion.div
                key={selectedVariant.type + "-details"}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary font-headline">
                  {car.name}
                </h2>
                <div className="mt-4 items-center gap-2">
                  <label
                    htmlFor="variant"
                    className="text-sm text-muted-foreground whitespace-nowrap pr-2"
                  >
                    Pilih Tipe:
                  </label>
                  <select
                    id="variant"
                    onChange={handleVariantChange}
                    value={selectedVariant.type}
                    className="px-2 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-sm"
                  >
                    {car.variants.map((variant) => (
                      <option key={variant.type} value={variant.type}>
                        {variant.type}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="mt-4 text-lg text-muted-foreground">
                  <span className="font-bold text-2xl">
                    {selectedVariant.price}
                  </span>
                </p>

                <Card className="mt-6 bg-white/50 dark:bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Spesifikasi</h3>
                    <ul className="space-y-3 text-sm">
                      {Object.entries(selectedVariant.specs).map(
                        ([key, value]) => (
                          <li
                            key={key}
                            className="flex flex-col sm:flex-row sm:justify-between border-b pb-2 last:border-b-0"
                          >
                            <span className="capitalize text-muted-foreground sm:w-1/2s">
                              {key
                                .replace(/_/g, " ")
                                .replace(/([A-Z])/g, " $1")}
                            </span>
                            <span className="font-semibold sm:text-right break-words sm:max-w-[50%]">
                              {value}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
                <div className="flex flex-row flex-wrap gap-3 mt-5 justify-center">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto flex items-center text-lg bg-green-500 hover:bg-green-600"
                    onClick={handleWhatsAppClick}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="!w-8 !h-8" />
                    <span>Dapatkan Penawaran</span>
                  </Button>

                  <Button
                    size="lg"
                    className="w-full sm:w-auto flex items-center text-lg"
                    onClick={handleBrosurClick}
                  >
                    <Download className="!w-8 !h-8 mr-2" />
                    <span>Download Brosur</span>
                  </Button>

                  <Button
                    size="lg"
                    className="w-full sm:w-auto flex items-center text-lg bg-orange-500 hover:bg-orange-600"
                    onClick={() => setShowCreditSimulationModal(true)}
                  >
                    <Calculator className="!w-8 !h-8 mr-2" />
                    <span>Simulasi Kredit</span>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Dialog
        open={showCreditSimulationModal}
        onClose={() => setShowCreditSimulationModal(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black/50" />
          <div className="relative bg-white dark:bg-zinc-900 rounded-lg w-full max-w-md mx-auto p-6 z-50">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-lg font-bold">
                Simulasi Kredit
              </Dialog.Title>
              <button onClick={() => setShowCreditSimulationModal(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full border rounded px-3 py-2"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Nomor Telepon"
                className="w-full border rounded px-3 py-2"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                type="text"
                value={`${car.name} - ${selectedVariant?.type}`}
                readOnly
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
              {/* <input
                type="text"
                value={`${selectedVariant?.price}`}
                readOnly
                className="w-full border rounded px-3 py-2 bg-gray-100"
              /> */}
              <input
                type="text"
                placeholder="Down Payment (DP)"
                className="w-full border rounded px-3 py-2"
                value={form.dp}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^\d]/g, ""); // hanya angka
                  const formatted = new Intl.NumberFormat("id-ID").format(
                    Number(raw)
                  );
                  setForm({ ...form, dp: `Rp. ${formatted}` }); // simpan angka mentah
                  e.target.value = `Rp. ${formatted}`; // tampilkan format Rp
                }}
                onBlur={(e) => {
                  const raw = form.dp.replace(/[^\d]/g, "");
                  const formatted = new Intl.NumberFormat("id-ID").format(
                    Number(raw)
                  );
                  e.target.value = `Rp. ${formatted}`;
                }}
                onFocus={(e) => {
                  e.target.value = form.dp; // hapus "Rp." saat fokus
                }}
              />
              <select
                className="w-full border rounded px-3 py-2"
                value={form.tenor}
                onChange={(e) => setForm({ ...form, tenor: e.target.value })}
              >
                <option value="12 Bulan (1 Tahun)">12 Bulan (1 Tahun)</option>
                <option value="24 Bulan (2 Tahun)">24 Bulan (2 Tahun)</option>
                <option value="36 Bulan (3 Tahun)">36 Bulan (3 Tahun)</option>
                <option value="48 Bulan (4 Tahun)">48 Bulan (4 Tahun)</option>
                <option value="60 Bulan (5 Tahun)">60 Bulan (5 Tahun)</option>
                <option value="72 Bulan (6 Tahun)">72 Bulan (6 Tahun)</option>
                <option value="84 Bulan (7 Tahun)">84 Bulan (7 Tahun)</option>
                <option value="96 Bulan (8 Tahun)">96 Bulan (8 Tahun)</option>
              </select>

              <Button
                onClick={handleAjukanSimulasi}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="!w-8 !h-8" />
                <span>Ajukan Simulasi</span>
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
      ;
    </section>
  );
}
