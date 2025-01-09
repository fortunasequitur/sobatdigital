"use client";
import React from "react";

export default function Hero6() {
  return (
    <section className="hero -type-6" style={{ backgroundColor: "#f7f1e1" }}>
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-7 col-lg-8">
            <div className="hero__content text-center">
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="hero__title"
              >
                JUALAN MODAL SEKALI
                <br className="d-none md:d-block" />
                BISA CUAN
                <br className="d-none md:d-block" />
                <span className="text-accent-1">BERKALI KALI</span>
              </h1>

              <p data-aos="fade-up" data-aos-delay="250" className="mt-20">
                TREND BISNIS AWAL TAHUN 2025
                <br className="d-none md:d-block" />
                JANGAN SAMPAI KETINGGALAN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}