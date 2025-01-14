"use client";

import React from "react";
import { testimonialsThree } from "@/data/testimonials";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default function GakPunyaProduk() {
  const testimonial = testimonialsThree[0]; // Mengambil testimoni pertama
  const blog = blogs[0]; // Mengambil blog pertama

  return (
    <section className="layout-pt-sm layout-pb-xl bg-light-3"> {/* Mengurangi margin atas */}
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              TAPI SAYA GAK PUNYA PRODUK KAK ☹️
              <br className="d-none md:d-block" />
            </h2>
            <div className="blogCard -type-1 mt-20">
              <div className="blogCard__image ratio ratio-41:30">
                <Image
                  width={616}
                  height={451}
                  src={"/img/blogCards/1/Sad.png"}
                  alt="image"
                  className="img-ratio rounded-12"
                />
              </div>

              <div className="blogCard__content mt-30">
                <div className="blogCard__info text-14">
                </div>
              </div>
            </div> {/* Menambahkan tag penutup div yang hilang */}
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              TENANG! KAMI KASIH PRODUK,
              <br className="d-none md:d-block" />
              KAMU TINGGAL JUAL
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
                        src={blogs[1].image}
                        alt="image"
                        className="img-ratio rounded-12"
                      />
                    </div>

                    <div className="blogCard__content mt-30">
                      <div className="blogCard__info text-14">
                      </div>
                    </div>
                  </div>

                  <div className="text-20 lh-18 md:text-18 fw-500 mt-60 md:mt-30">
                    <h2 style={{ color: "#eb662b" }}>Template Canva Exclusive</h2>
                    <br />    
                    Produk digital ini menawarkan lebih dari 5000+ template siap pakai yang dirancang khusus untuk Personal Branding dan Usaha/Bisnis Online. Setiap template memiliki desain premium yang unik dan berbeda dari yang lain, memastikan daya tarik yang tinggi untuk audiens Anda. Dengan kemudahan penggunaan di platform Canva, Anda dapat dengan cepat menciptakan konten yang menarik dan profesional untuk meningkatkan visibilitas dan reputasi brand / bisnis Anda.
                    <br />
                    <br />
                    <h2 style={{ color: "#eb662b" }}>Emang Laku Kak ?</h2>
                    <h2 style={{ color: "#eb662b" }}>Eits, Liat Dulu Nih Statistiknya</h2>
                    <div className="testimonials -type-2 text-center">
                      <div className="blogCard -type-1">
                        <div className="blogCard__image ratio ratio-41:30">
                          <Image
                            width={1024}
                            height={768}
                            src="/img/blogCards/1/OO1.png"
                            alt="image"
                            className="img-ratio rounded-12"
                          />
                        </div>
                      </div>
                      <div className="blogCard -type-1">
                        <div className="blogCard__image ratio ratio-41:30">
                          <Image
                            width={1024}
                            height={768}
                            src="/img/blogCards/1/OO2.png"
                            alt="image"
                            className="img-ratio rounded-12"
                          />
                        </div>
                      </div>
                      <div className="blogCard -type-1">
                        <div className="blogCard__image ratio ratio-41:30">
                          <Image
                            width={1024}
                            height={768}
                            src="/img/blogCards/1/OO3.png"
                            alt="image"
                            className="img-ratio rounded-12"
                          />
                        </div>
                      </div>
                      <div className="blogCard -type-1">
                        <div className="blogCard__image ratio ratio-41:30">
                          <Image
                            width={1024}
                            height={768}
                            src="/img/blogCards/1/OO4.png"
                            alt="image"
                            className="img-ratio rounded-12"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="blogCard__content mt-30">
                      <div className="blogCard__info text-14">
                      </div>
                    </div>
                  </div>
                  <h2 style={{ color: "#eb662b" }}>Cukup 1x Join Membership</h2>
                  <h2 style={{ color: "#eb662b" }}>Kamu Udah Bisa Cuan</h2>
                  <h2 style={{ color: "#eb662b" }}>Selamanya</h2>
                  <div className="box-container" style={{ border: "2px solid #ddd", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "left" }}>
                    <h3>Benefit Yang Kamu Dapatkan:</h3>
                    <ol>
                      <li>1. Produk Template Canva<br />(Bisa Custom Brand Sendiri)</li>
                      <li>2. Lisensi Jual Kembali</li>
                      <li>3. Produk Tidak Expired <br />(Lifetime Access)</li>
                      <li>4. Materi Cara Pakai Produk</li>
                      <li>5. Materi Cara Bangun Brand Kamu</li>
                      <li>6. Materi Cara Bikin Banner Iklan FB & IG</li>
                      <li>7. Materi Cara Dapat Traffic Organik</li>
                      <li>8. Materi Cara Dapat Traffic Paid (Beriklan)</li>
                      <li>9. Materi Cara Beriklan di FB/Meta ADS <br />(Materi Paling Penting)</li>
                      <li>10. Materi Cara Bikin Landing Page Produk</li>
                      <li>11. Materi Cara Handle Customer Sampai Closing</li>
                    </ol>
                    <h3>Kami Juga Kasih Bonus:</h3>
                    <ol>
                      <li>1. Private Kelas 1 on 1 Via Zoom <br />(Waktu Terjadwal)</li>
                      <li>2. Bonus Produk Digital Lainya</li>
                      <li>3. PROFIT BISA ATUR SENDIRI</li>
                    </ol>
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
