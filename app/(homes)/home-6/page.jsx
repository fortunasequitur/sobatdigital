import Hero6 from "@/components/homes/heros/Hero6";
import TestimonialsThree from "@/components/homes/testimonials/TestimonialsThree";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header5 from "@/components/layout/header/Header5";
import React from "react";
import GakPunyaProduk from "@/components/homes/testimonials/Gak Punya Produk";
import TestiSlider from "@/components/homes/testimonials/Testi Slider";
import TourTypes3 from "@/components/homes/tourTypes/TourTypes3";

export const metadata = {
  title: "Sobat Digital",
  description: "Temukan solusi digital terbaik bersama Sobat Digital. Kami menyediakan layanan dan produk digital yang inovatif untuk kebutuhan Anda.",
};

export default function page() {
  return (
    <>
      <main>
        <Header5 />
        <Hero6 />
        <TestimonialsThree />
        <GakPunyaProduk />
        <TestiSlider />
        <TourTypes3 />
        <FooterFour />
      </main>
    </>
  );
}
