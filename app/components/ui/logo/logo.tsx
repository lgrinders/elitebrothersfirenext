import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center rounded-xl md:-space-x-0 -space-x-0.5"
      aria-label="Elite Brothers Fire and Safety"
    >
      <Image
        src="/elitebrotherslogowide.svg"
        alt="Elite Brothers Fire Logo"
        className="h-14 w-14"
        width={64}
        height={64}
        priority
      />
      <div className="font-black italic">
        <div className="flex flex-col text-sm md:text-2xl">
          <span className="leading-3 md:leading-5">ELITE</span>
          <span className="leading-3 text-EliteRed md:leading-5">BROTHERS</span>
        </div>
        <h3 className="text-[8px] font-medium tracking-widest md:text-xs">
          FIRE & SAFETY
        </h3>
      </div>
    </Link>
  );
}
