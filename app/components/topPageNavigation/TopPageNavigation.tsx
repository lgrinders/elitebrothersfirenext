"use client";

import { IoChevronDown } from "react-icons/io5";
import { navigationData } from "@/app/assets/data";
import { useState } from "react";
import Link from "next/link";
import Button3 from "../ui/button3/Button3";

const TopPageNavigation = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleHover = (index: number) => setHoverIndex(index);
  const clearHover = () => setHoverIndex(null);

  return (
    <nav className="hidden items-center justify-center gap-2 bg-EliteRed text-white md:flex md:text-base font-semibold">
      <ul className="flex">
        {navigationData.map((item, idx) => (
          <li
            key={idx}
            className="relative flex h-14 cursor-pointer items-center justify-center tracking-wide duration-200 hover:bg-neutral-200 hover:text-black"
            onMouseEnter={() => handleHover(idx)}
            onMouseLeave={clearHover}
            onFocus={() => handleHover(idx)}
          >
            {item.children ? (
              <button
                className="flex h-full items-center justify-center gap-1 px-5"
                aria-haspopup="true"
                aria-expanded={hoverIndex === idx}
                aria-label={`Expand menu for ${item.label}`}
              >
                {item.label}
                <IoChevronDown />
              </button>
            ) : (
              <Link
                href={item.path}
                className="flex h-full w-full items-center justify-center gap-1 px-5"
              >
                {item.label}
              </Link>
            )}
            {item.children && hoverIndex === idx && (
              <ul
                className="absolute left-0 right-0 top-9 mt-3 flex w-64 flex-col bg-EliteRed shadow-md"
                role="menu"
                aria-hidden={hoverIndex !== idx}
              >
                {item.children.map((child, childIdx) => (
                  <li key={childIdx}>
                    <Link
                      href={child.path}
                      className="block px-2 py-2 text-white hover:bg-neutral-200 hover:text-black focus:bg-neutral-200 focus:text-black"
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
