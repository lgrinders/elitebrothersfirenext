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
        className="h-12 w-12 md:h-14 md:w-14"
        width={64}
        height={64}
        priority
      />
      <div className="font-black italic">
        <div className="flex flex-col text-md md:text-2xl">
          <span className="leading-3 md:leading-5">ELITE</span>
          <span className="leading-4 text-EliteRed md:leading-5">BROTHERS</span>
        </div>
        <h3 className="leading-3 text-[11px] font-medium tracking-widest md:text-xs">
          FIRE & SAFETY
        </h3>
      </div>
    </Link>
  );
}
