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
      {/* Facebook Pixel Code */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        <img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />
      </noscript>
      {/* End Facebook Pixel Code */}
    </>
  );
}
