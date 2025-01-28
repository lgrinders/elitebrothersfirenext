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
        className="h-12 w-12 lg:h-14 lg:w-14"
        width={64}
        height={64}
        priority
      />
      <div className="font-black italic">
        <div className="flex flex-col text-md lg:text-2xl">
          <span className="leading-3 lg:leading-5">ELITE</span>
          <span className="leading-4 text-EliteRed lg:leading-5">BROTHERS</span>
        </div>
        <h3 className="leading-3 text-[11px] font-medium tracking-widest lg:text-xs">
          FIRE & SAFETY
        </h3>
      </div>
    </Link>
  );
}
