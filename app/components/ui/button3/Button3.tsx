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
      className="flex p-5 items-center rounded-md justify-center gap-2 duration-200 bg-EliteRed text-white hover:bg-EliteRed2 hover:text-white font-bold"
    >
      <span>{name}</span>
      <FaCircleChevronRight size={15} />
    </Link>
  );
};

export default Button;
