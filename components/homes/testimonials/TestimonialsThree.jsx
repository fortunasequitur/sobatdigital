"use client";

import React from "react";
import { testimonialsThree } from "@/data/testimonials";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialsThree() {
  const testimonial = testimonialsThree[0]; // Mengambil testimoni pertama
  const blog = blogs[0]; // Mengambil blog pertama

  return (
    <section className="layout-pt-xl layout-pb-xl bg-light-3">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              CUMA JUALAN
              <br className="d-none md:d-block" />
              PRODUK DIGITAL INI
              <br className="d-none md:d-block" />
              1 BULAN BISA CUAN
              <br className="d-none md:d-block" />
            </h2>
          </div>
        </div>

        <div className="row justify-center pt-60 md:pt-30">
          <div className="col-lg-8 col-md-9">
            <div className="overflow-hidden js-testimonialsSlider_1">
              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="swiper-wrapper"
              >
                <div className="testimonials -type-2 text-center">
                  <div className="blogCard -type-1">
                    <div className="blogCard__image ratio ratio-41:30">
                      <Image
                        width={616}
                        height={451}
                        src={blog.image}
                        alt="image"
                        className="img-ratio rounded-12"
                      />
                    </div>

                    <div className="blogCard__content mt-30">
                      <div className="blogCard__info text-14">
                      </div>
                    </div>
                  </div> {/* Menambahkan tag penutup div yang hilang */}

                  <div className="text-20 lh-18 md:text-18 fw-500 mt-60 md:mt-30">
                    <h2 style={{ color: "#eb662b" }}>Apasih Produk Digital ?</h2>
                    <br />
                    Produk digital itu intinya barang atau jasa yang bentuknya digital, alias nggak berwujud fisik. Kamu nggak bisa megang atau nyentuh kayak barang biasa. Bentuknya berupa data atau informasi yang disimpan dan diakses lewat perangkat elektronik, hp, laptop dan komputer lewat internet.
                    <br />
                    <br />
                    <h2 style={{ color: "#eb662b" }}>Contoh Produk Digital ?</h2>
                  <div className="box-container" style={{ border: "2px solid #ddd", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <p className="text-center">
                      Contohnya:
                      <br />
                      E-book
                      <br />
                      Template Design
                      <br />
                      Video
                      <br />
                      Software/Aplikasi
                      <br />
                      Foto/Gambar Digital
                      <br />
                      Kursus Online
                      <br />
                      Dan Masih Banyak Lainnya
                    </p>
                  </div>
                  <br />
                  <h2 style={{ color: "#eb662b" }}>Produk Digital Vs Produk Fisik</h2>

                  <div className="box-container" style={{ border: "2px solid #ddd", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "left" }}>
                    <h3>Produk Digital:</h3>
                    <ol>
                      <li>1. Produknya Banyak</li>
                      <li>2. Lifetime (Tidak Expired)</li>
                      <li>3. Modal Relatif Kecil</li>
                      <li>4. Promosi Mudah (Lewat Online)</li>
                      <li>5. Pengiriman Digital / Online</li>
                      <li>6. Jangkauan Luas</li>
                      <li>7. Stok Tak Terbatas</li>
                      <li>8. Proses Jual Beli Cepat</li>
                    </ol>
                    <h3>Produk Fisik:</h3>
                    <ol>
                      <li>1. Harus Mikir Beli / Produksi Produk</li>
                      <li>2. Harus Mikir Packing</li>
                      <li>3. Harus Mikir Ngirim Paket</li>
                      <li>4. Harus Mikir Biaya Produksi</li>
                      <li>5. Harus Mikir Gaji Tenaga Kerja</li>
                      <li>6. Harus Mikir RETUR Barang Kalau COD</li>
                    </ol>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
