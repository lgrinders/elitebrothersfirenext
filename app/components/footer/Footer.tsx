import Logo from "../../ui/logo/logo";
import Button from "../../ui/button/Button";
import { BsFacebook, BsYelp } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-white w-full px-10 lg:px-14 py-10 gap-10 flex flex-col lg:items-start items-center lg:flex-row justify-between">
      <div className="flex flex-col lg:items-start text-sm gap-4 font-semibold w-full lg:w-2/5 items-center">
        <Logo />
        <div className="flex flex-col lg:text-start text-center gap-4">
          <span>© 2025 The content on this website is owned by us and our licensors.</span>
          <a href="https://policies.hibuwebsites.com/privacy-policy" target="_blank">Privacy Policy</a>
          <span>Serving Nashville, TN</span>
          <span>(615) 200-9308</span>
          <div className="flex gap-3 lg:justify-start justify-center">
            <a
              href="https://www.facebook.com/people/Elite-Brothers-Fire-and-Safety/100079015032455/"
              target="_blank"
              aria-label="Elite Brothers Fire Facebook"
            >
              <BsFacebook size={20} className="duration-200 hover:text-EliteRed" />
            </a>
            <a
              href="https://www.yelp.com/biz/elite-brothers-fire-and-safety-bethpage?utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=MFyzcjahxBMNAyHg85HGjg"
              target="_blank"
              aria-label="Elite Brothers Fire Yelp"
            >
              <BsYelp size={20} className="duration-200 hover:text-EliteRed" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex-col gap-10 lg:flex-row lg:items-start items-center flex">
        <div className="flex lg:w-auto w-full flex-col items-center lg:items-start gap-3"><span className="font-semibold text-sm">1051 Mt. Vernon Road Bethpage, TN 37022</span>
          <Button to="https://www.google.com/maps/place/1051+Mt+Vernon+Rd,+Bethpage,+TN+37022/@36.542515,-86.3439939,17z/data=!3m1!4b1!4m6!3m5!1s0x88642ca620361f03:0xde436af8afc3267c!8m2!3d36.542515!4d-86.341419!16s%2Fg%2F11gdkyhzf_?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D" name="Directions" />
        </div>
        <div className="flex flex-col gap-3 w-full lg:w-auto lg:items-start items-center">
          <span className="font-semibold text-sm">24/7 Emergency Services and Same-Day Appointments</span>
          <Button to="/contact" name="Send Message" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
