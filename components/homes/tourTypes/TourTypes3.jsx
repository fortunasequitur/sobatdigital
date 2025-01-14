import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TourTypes3() {
  return (
    <section id="pricing" style={{ marginTop: "50px" }}>
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 text-center">
            <h2 style={{ color: "#eb662b" }}>JOIN MEMBERSHIP</h2>
            <h2 style={{ color: "#eb662b" }}>HANYA UNTUK 25 ORANG</h2>
          </div>
        </div>
        <div className="max-w-[400px] mx-auto text-center">
          <div className="p-6 border rounded-lg shadow-md bg-white box-container" style={{ margin: "0 20px", border: "2px solid #ddd", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}>
            <h3 className="text-xl font-bold">Harga Khusus</h3>
            <h3 className="text-xl font-bold">25 Orang Pertama</h3>
            <div className="box-container" style={{ border: "2px solid #ddd", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <h4 style={{ color: "#eb662b" }}>Benefit Yang Kamu Dapatkan</h4>
              <ul className="space-y-2 text-left">
                {[
                  "Produk Template Canva",
                  "Bisa Custom Brand Sendiri",
                  "Lisensi Jual Kembali",
                  "Produk Tidak Expired (Lifetime Access)",
                  "Materi Cara Pakai Produk",
                  "Materi Cara Bangun Brand Kamu",
                  "Materi Cara Bikin Banner Iklan FB & IG",
                  "Materi Cara Dapat Traffic Organik",
                  "Materi Cara Dapat Traffic Paid (Beriklan)",
                  "Materi Cara Beriklan di FB/Meta ADS",
                  "Materi Cara Bikin Landing Page Produk",
                  "Materi Cara Handle Customer",
                ].map((text, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex justify-start">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✔️</span>
                      <span className="text-left">{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <h4 style={{ color: "red" }}>BONUS!!!</h4>
              <ul className="space-y-2 text-left">
                {[
                  "Private Kelas 1 on 1 Via Zoom",
                  "Bonus Produk Digital Lainya",
                  "PROFIT BISA ATUR SENDIRI"
                ].map((text, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex justify-start">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✔️</span>
                      <span className="text-left">{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <br />
            <h4 style={{ color: "red" }}>BENEFIT SEBANYAK ITU</h4>
            <h4 style={{ color: "red" }}>GIMANA? WORTH IT KAN?</h4>
            <h3 className="text-5xl font-bold">Rp. 299.000</h3>
            <p className="text-2xl" style={{ color: "red" }}>Harga Normal <span className="line-through">Rp.899.000</span></p>
            <div className="text-center text-sm text-muted-foreground">
              Untuk Selamanya
            </div>
            <div className="flex justify-center mt-4">
              <Link href="https://lynk.id/canvatron/JbyzBYr" target="_blank" rel="noopener noreferrer">
                <button
                  className="cta-button animate-shake"
                  style={{
                    backgroundColor: "#eb662b",
                    borderRadius: "50px",
                    padding: "10px 20px",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <b>Beli Sekarang</b>
                </button>
              </Link>
            </div>
            <div id="countdown" className="text-center mt-2 text-red-500 font-bold">
              Hanya Beli 1x Tidak Ada Biaya Lainya
            </div>
            <h4 style={{ color: "red" }}>GARANSI UANG KEMBALI 100%</h4>
            <h4 style={{ color: "red" }}>JIKA</h4>
            <h4 style={{ color: "red" }}>SUDAH PRAKTEK TIDAK PROFIT</h4>
            <div className="flex justify-center">
              <img src="/img/blogCards/1/qris.png" alt="QRIS" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}