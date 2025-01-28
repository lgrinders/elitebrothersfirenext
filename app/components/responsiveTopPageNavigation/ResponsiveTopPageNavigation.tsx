"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "../ui/logo/logo";
import { navigationData } from "@/app/assets/data";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import Hamburger from "../ui/hamburger/Hamburger";

const ResponsiveTopPageNavigation = () => {
  const [sideNavigationShowing, setSideNavigationShowing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sideNavRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const handleSelect = (index: number) =>
    setSelectedIndex(selectedIndex === null ? index : null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sideNavRef.current &&
      !sideNavRef.current.contains(event.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      setSideNavigationShowing(false);
    }
  };

  useEffect(() => {
    if (sideNavigationShowing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideNavigationShowing]);

  return (
    <header className="lg:hidden items-center h-20 justify-between px-5 gap-2 lg:gap-5 bg-white flex md:text-base font-bold">
      <Logo />
      <Hamburger
        ref={hamburgerRef}
        sideNavigationShowing={sideNavigationShowing}
        setSideNavigationShowing={setSideNavigationShowing}
      />

      <div
        ref={sideNavRef}
        className={`absolute top-20 left-0 h-screen w-4/5 bg-white transition-transform duration-500 flex ${
          sideNavigationShowing ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="w-full">
          <ul className="flex flex-col">
            {navigationData.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col relative cursor-pointer items-center justify-center duration-200 hover:bg-neutral-200 hover:text-black"
                onClick={() => handleSelect(idx)}
              >
                {item.children ? (
                  <button
                    className="flex items-center w-full h-20 justify-center gap-1 xl:w-32"
                    aria-haspopup="true"
                    aria-expanded={selectedIndex === idx}
                    aria-label={`Expand menu for ${item.label}`}
                  >
                    {item.label}
                    <IoChevronDown size={15} />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className="flex items-center justify-center h-20 w-full xl:w-32"
                    onClick={() => setSideNavigationShowing(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && selectedIndex === idx && (
                  <ul
                    className="flex w-full flex-col justify-center items-center text-white"
                    role="menu"
                    aria-hidden={selectedIndex !== idx}
                  >
                    {item.children.map((child, childIdx) => (
                      <li key={childIdx} className="w-full">
                        <Link
                          href={child.path}
                          className="flex justify-center px-2 py-5 bg-EliteRed hover:bg-EliteRed2 w-full"
                          onClick={() => {
                            setSelectedIndex(null),
                              setSideNavigationShowing(false);
                          }}
                          role="menuitem"
                          tabIndex={selectedIndex === idx ? 0 : -1}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ResponsiveTopPageNavigation;
