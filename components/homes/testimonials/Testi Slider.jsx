"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function TestiSlider() {
  return (
    <section>
      <div>
        <h2 style={{ color: "#eb662b", textAlign: "center" }}>Emang Banyak Yang Minat ?</h2>
        <h2 style={{ color: "#eb662b", textAlign: "center" }}>Kamu Bakal Kebanjiran Orderan</h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/img/blogCards/1/Testi 1.png" alt="Slide 1" width={300} height={132} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/img/blogCards/1/Testi 2.png" alt="Slide 2" width={300} height={132} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/img/blogCards/1/Testi 3.png" alt="Slide 3" width={300} height={132} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/img/blogCards/1/Testi 4.png" alt="Slide 4" width={300} height={132} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/img/blogCards/1/Testi 5.png" alt="Slide 5" width={300} height={132} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/img/blogCards/1/Testi 6.png" alt="Slide 6" width={300} height={132} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/img/blogCards/1/Testi 7.png" alt="Slide 7" width={300} height={132} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/img/blogCards/1/Testi 8.png" alt="Slide 8" width={300} height={132} />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
