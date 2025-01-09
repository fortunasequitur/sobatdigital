"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header5() {
  const [addClass, setAddClass] = useState(false);

  const handleScroll = () => {
    setAddClass(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header -type-1 -page-6 js-header  ${
        addClass ? "-is-sticky" : ""
      }`}
    >
      <div className="header__container container" style={{ display: "flex", justifyContent: "center" }}>
        <div className="header__logo">
          <Link href="/" className="header__logo">
            <Image
              width="167"
              height="32"
              src="/img/general/logo.png"
              alt="logo icon"
              priority
            />
          </Link>
        </div>

        <div className="header__right">
          {/* Sign up link removed */}
        </div>
      </div>
    </header>
  );
}
