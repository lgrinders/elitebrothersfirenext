"use client";

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Logo from "../ui/logo/logo";
import { useRef, useState } from "react";
import Link from "next/link";

const TopPageMainBanner = () => {
  const [sideNavBarShowing, setSideNavBarShowing] = useState<boolean>(false);
  const hamburgerMenuRef = useRef<HTMLButtonElement>(null);
  const handleSideNav = () => {
    setSideNavBarShowing(!sideNavBarShowing);
  };

  return (
    <section className="flex items-center justify-between bg-neutral-200 p-2 font-semibold">
      <div className="hidden w-1/3 md:block"></div>
      <div className="flex items-center justify-center md:w-1/3">
        <Logo />
      </div>
      <div className="hidden w-1/3 justify-center text-xs md:flex">
        <a
          href="tel:+16152009308"
          aria-label="call us at 6152009308"
          className="stext-center flex flex-col items-center"
        >
          <span className="leading-5">SPEAK WITH A REPRESENTATIVE TODAY</span>
          <span className="animate-shimmer bg-gradient-to-r from-EliteOrange via-EliteRed to-EliteOrange bg-200% bg-clip-text text-2xl font-black italic leading-5 text-transparent">
            CALL 615.200.9308
          </span>
          <span className="leading-5">
            Serving Nashville and Surrounding Areas
          </span>
        </a>
      </div>

      <section className="flex gap-2">
        <Link
          href="/quote"
          className="flex items-center bg-EliteRed px-3 text-sm font-semibold text-white md:hidden"
        >
          REQUEST QUOTE
        </Link>
        <button
          ref={hamburgerMenuRef}
          className="flex h-10 w-10 cursor-pointer items-center justify-center bg-neutral-900 text-white md:hidden"
          onClick={handleSideNav}
          aria-label="Toggle side navigation button"
          aria-expanded={sideNavBarShowing}
        >
          {sideNavBarShowing ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
        </button>
      </section>

      {/* <SideNavBar
        sideNavBarShowing={sideNavBarShowing}
        setSideNavBarShowing={setSideNavBarShowing}
        hamburgerMenuRef={hamburgerMenuRef}
      /> */}
    </section>
  );
};

export default TopPageMainBanner;
