import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";

interface ButtonProps {
  name: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ name, to }) => {
  return (
    <Link
      href={`${to}`}
      className="mt-2 flex h-14 w-[150px] items-center justify-center gap-2 border border-neutral-800 text-neutral-800 duration-200 hover:border-none hover:bg-neutral-800 hover:text-white"
    >
      <span>{name}</span>
      <IoChevronForward />
    </Link>
  );
};

export default Button;
