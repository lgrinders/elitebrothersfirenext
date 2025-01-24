import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center rounded-xl"
      aria-label="Elite Brothers Fire and Safety"
    >
      <Image
        src="/elitebrotherslogowide.svg"
        alt="Elite Brothers Fire Logo"
        className="h-14 w-14 md:h-20 md:w-20"
        width={56}
        height={56}
        priority
      />
      <span className="font-black italic">
        <span className="flex flex-col text-sm md:text-2xl">
          <span className="text-outli leading-3 md:leading-5 dark:text-white">
            ELITE
          </span>
          <span className="leading-3 text-EliteRed md:leading-5">BROTHERS</span>
        </span>
        <h3 className="text-[8px] font-medium tracking-widest md:text-xs dark:text-white">
          FIRE & SAFETY
        </h3>
      </span>
    </Link>
  );
}
