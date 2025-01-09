"use client";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Hero3() {
  const router = useRouter();
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);

  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="hero -type-3">
      <div className="hero__bg">
        <Image
          width={1920}
          height={760}
          src="/img/hero/3/bg.jpg"
          style={{ objectFit: "cover", height: "auto" }}
          alt="background"
        />
      </div>

      <div className="container">
        <div className="row justify-between">
          <div className="col-xl-5 col-lg-5">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="hero__subtitle mb-20 md:mb-10"
            >
              Selamat Datang di Sobat Bermain Tour & Travel
            </div>

            <h1 className="hero__title text-center md:text-left" data-aos="fade-up" data-aos-delay="300">
              Best Bromo Travel Organizer In
              <br className="md:d-none" />
              Malang!
              <Image
                width="214"
                height="23"
                src="/img/hero/3/brush.svg"
                alt="brush stroke"
              />
            </h1>
          </div>

          <div className="col-xl-7 col-lg-7">
            <div className="hero__image">
              <div>
                <Image
                  width={340}
                  height={420}
                  src="/img/hero/3/1.png"
                  alt="image"
                />
                <Image
                  width={340}
                  height={250}
                  src="/img/hero/3/2.png"
                  alt="image"
                />
              </div>
              <Image
                width={340}
                height={620}
                src="/img/hero/3/3.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
