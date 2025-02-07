import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center"
    >
      <img
        src="/elitebrotherslogowide.svg"
        className="w-12 h-12 lg:h-14 lg:w-14"
      />
      <div className="font-black italic flex flex-col leading-4">
        <span>ELITE</span>
        <span className="text-EliteRed ">BROTHERS</span>
        <span className="text-[11px] tracking-widest lg:text-xs">FIRE & SAFETY</span>
      </div>
    </Link>
  );
}
