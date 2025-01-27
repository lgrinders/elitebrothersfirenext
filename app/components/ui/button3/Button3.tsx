import { FaCircleChevronRight } from "react-icons/fa6";
import Link from "next/link";

interface ButtonProps {
  name: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ name, to }) => {
  return (
    <Link
      href={`${to}`}
      className="flex  px-5 items-center rounded-md justify-center gap-2 duration-200 bg-neutral-100 hover:bg-neutral-800 hover:text-white h-12 text-black font-semibold"
    >
      <span>{name}</span>
      <FaCircleChevronRight size={15} />
    </Link>
  );
};

export default Button;
