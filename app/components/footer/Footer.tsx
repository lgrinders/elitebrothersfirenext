import { FaFacebookF, FaYelp } from "react-icons/fa";
import Logo from "../ui/logo/logo";
import Button from "../ui/button/Button";

const Footer = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10 border-t-4 border-t-EliteOrange bg-neutral-100 px-10 py-10 text-black sm:grid sm:grid-cols-2 md:grid-cols-3 lg:gap-20 lg:px-14 xl:flex xl:flex-row">
      <Logo />
      <div className="flex max-w-[300px] flex-col gap-2 xl:w-[300px]">
        <h2 className="text-xl font-semibold">SERVING AREA</h2>
        <hr className="h-1 max-w-64 border-0 bg-neutral-700" />
        <p>Nashville, TN and Surrounding Areas</p>
        <hr className="h-1 max-w-64 border-0 bg-neutral-700" />
        <p>1015 Mt. Vernon Road Bethpage, TN 37022</p>
        <Button to={"/contact#topOfPageHeader"} name="DIRECTIONS" />
      </div>
      <div className="flex max-w-[300px] flex-col gap-2 xl:w-[300px]">
        <h2 className="text-xl font-semibold">CONTACT US</h2>
        <hr className="h-1 max-w-64 border-0 bg-neutral-700" />
        <p>615.200.9308</p>
        <Button to={"/contact#topOfPageHeader"} name="MESSAGE US" />
        <div className="mt-2 flex gap-2">
          <FaFacebookF size={30} className="duration-200 hover:text-EliteRed" />
          <FaYelp size={30} className="duration-200 hover:text-EliteRed" />
        </div>
      </div>

      <div className="flex max-w-[300px] flex-col gap-2 xl:w-[300px]">
        <h2 className="text-xl font-semibold">BUSINESS HOURS</h2>
        <hr className="h-1 max-w-64 border-0 bg-neutral-700" />
        <p>24/7 Emergency Services and Same-Day Appointments</p>
      </div>
    </div>
  );
};

export default Footer;
