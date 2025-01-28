"use client";

import { useState } from "react";
import Logo from "../ui/logo/logo";
import { navigationData } from "@/app/assets/data";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";

const ResponsiveTopPageNavigation = () => {
  const [sideNavigationShowing, setSideNavigationShowing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleSelect = (index: number) =>
    setSelectedIndex(selectedIndex === null ? index : null);

  console.log(selectedIndex);

  return (
    <header className="lg:hidden items-center h-20 justify-between px-10 gap-2 lg:gap-5 bg-white flex md:text-base font-bold">
      <Logo />
      <button
        className="group h-20 w-20 rounded-lg"
        onClick={() => setSideNavigationShowing(!sideNavigationShowing)}
      >
        <div className="grid justify-items-center gap-1.5">
          <span
            className={`h-0.5 w-6 rounded-full bg-black transition ${sideNavigationShowing && "rotate-45 translate-y-2"}`}
          ></span>

          <span
            className={`h-0.5 w-6 rounded-full bg-black transition ${sideNavigationShowing && "scale-x-0"}`}
          ></span>

          <span
            className={`h-0.5 w-6 rounded-full bg-black transition ${sideNavigationShowing && "-rotate-45 -translate-y-2"}`}
          ></span>
        </div>
      </button>

      <div
        className={`absolute top-20 left-0 h-screen w-full transition-transform duration-500 flex ${
          sideNavigationShowing ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="w-4/5 bg-white">
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
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && selectedIndex === idx && (
                  <ul
                    className="flex w-full flex-col justify-center items-center bg-EliteRed text-white"
                    role="menu"
                    aria-hidden={selectedIndex !== idx}
                  >
                    {item.children.map((child, childIdx) => (
                      <li key={childIdx}>
                        <Link
                          href={child.path}
                          className="block px-2 py-5 w-full"
                          onClick={() => setSelectedIndex(null)}
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
