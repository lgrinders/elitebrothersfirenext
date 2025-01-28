"use client";

import { IoChevronDown } from "react-icons/io5";
import { navigationData } from "@/app/assets/data";
import { useState } from "react";
import Link from "next/link";
import Button3 from "../ui/button3/Button3";
import Logo from "../ui/logo/logo";

const TopPageNavigation = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleHover = (index: number) => setHoverIndex(index);
  const clearHover = () => setHoverIndex(null);

  return (
    <nav className="hidden items-center justify-center gap-2 lg:gap-5 bg-white lg:flex md:text-base font-bold shadow-xl">
      <Logo />
      <ul className="flex">
        {navigationData.map((item, idx) => (
          <li
            key={idx}
            className="flex relative cursor-pointer items-center justify-center duration-200 hover:bg-neutral-200 hover:text-black"
            onMouseEnter={() => handleHover(idx)}
            onMouseLeave={clearHover}
            onFocus={() => handleHover(idx)}
          >
            {item.children ? (
              <button
                className="flex items-center h-20 justify-center gap-1 w-24 xl:w-32"
                aria-haspopup="true"
                aria-expanded={hoverIndex === idx}
                aria-label={`Expand menu for ${item.label}`}
              >
                {item.label}
                <IoChevronDown size={15} />
              </button>
            ) : (
              <Link
                href={item.path}
                className="flex items-center justify-center h-20 w-24 xl:w-32"
              >
                {item.label}
              </Link>
            )}
            {item.children && hoverIndex === idx && (
              <ul
                className="absolute left-0 right-0 top-20 flex w-64 flex-col bg-white shadow-xl"
                role="menu"
                aria-hidden={hoverIndex !== idx}
              >
                {item.children.map((child, childIdx) => (
                  <li key={childIdx}>
                    <Link
                      href={child.path}
                      className="block px-2 py-5 hover:bg-neutral-200 focus:bg-neutral-200"
                      onClick={() => setHoverIndex(null)}
                      role="menuitem"
                      tabIndex={hoverIndex === idx ? 0 : -1}
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
      <Button3 to="/quote" name="REQUEST QUOTE" />
    </nav>
  );
};

export default TopPageNavigation;
