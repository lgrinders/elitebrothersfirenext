import React from "react";
import { FaFacebookF, FaYelp } from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className="h-10 items-center bg-neutral-200 flex gap-2 text-EliteRed w-full px-5">
      <FaFacebookF size={25} className="duration-200 hover:text-EliteRed2" />
      <FaYelp size={25} className="duration-200 hover:text-EliteRed2" />
    </div>
  );
};

export default SocialBar;
