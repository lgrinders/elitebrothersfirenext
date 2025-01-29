import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";

interface Button2Props {
  name: string;
  to: string;
}

const Button2: React.FC<Button2Props> = ({ name, to }) => {
  return (
    <Link
      href={`${to}`}
      className="flex h-14 px-5 items-center rounded-md justify-center gap-1 border border-EliteRed bg-EliteRed text-white duration-200 hover:border-EliteRed hover:bg-transparent hover:text-EliteRed"
    >
      <span>{name}</span>
      <IoChevronForward />
    </Link>
  );
};

export default Button2;
