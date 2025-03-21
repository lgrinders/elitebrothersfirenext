import Image from "next/image";
import { BsFacebook, BsFillPinMapFill, BsYelp } from "react-icons/bs";
import Button3 from "@/app/ui/button3/Button3";
import exitSign from "../../../public/exitsign.jpg";
import FireFaqMap from "@/app/components/fireFAQmap/FireFaqMap";
import Form from "@/app/ui/form/Form";

export const metadata = {
  title: "Emergency / Exit Lighting",
  description:
    "Elite Brothers Fire provides expert exit and emergency lighting installation, maintenance, and verification to keep your business safe and compliant.",
  keywords:
    "exit lighting, emergency lighting, fire safety, Elite Brothers Fire, commercial lighting installation",
};

export default function ExitEmergencyLighting() {
  return (
    <section className="text-sm md:text-base">
      <div className="fixed w-full top-0 mt-[80px] h-[1000px] -z-10">
        <div className="flex justify-center relative h-full items-center">
          <Image
            priority={true}
            src={exitSign}
            className="object-cover object-top"
            fill
            alt=""
            placeholder="blur"
            quality={100}
          />
        </div>
      </div>

      <div className="flex flex-col mt-[200px]">
        <div className="px-5 z-10 lg:px-14 mx-5 lg:mx-32 md:px-14 py-10 rounded-md bg-white flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            EXIT & EMERGENCY LIGHTING
          </h1>
          <article className="flex flex-col gap-5 text-sm text-neutral-600 lg:text-lg">
            <p className="">
              Exit and emergency lighting is a vital component of building
              safety, providing clear guidance during power outages, fires, or
              other emergencies. Properly illuminated exit routes help ensure
              safe and efficient evacuation while reducing the risk of confusion
              or injury. However, not all buildings have the same
              requirements—factors such as layout, occupancy, and regulatory
              compliance play a key role in determining the best solutions. Our
              certified emergency lighting specialists will assess your facility
              and provide tailored recommendations to ensure reliable,
              code-compliant illumination for optimal safety.
            </p>
          </article>
          <Button3 name="REQUEST QUOTE" to="/contact" />
        </div>

        <div className="pt-20 -mt-10 md:px-14 px-5 flex gap-5 flex-col bg-neutral-100 pb-10">
          <article className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              WHAT WE PROVIDE
            </h2>
            <p className="text-sm text-neutral-600 lg:text-lg">
              At Elite Brothers Fire we provide the exmergency and exit lighting
              services to fit your needs, proper lighting placement, lighting
              inspections, and installations. We consider everything from your
              building size and layout to placement regulations while following
              local safety and building codes. When you work with us you know
              you are getting quality service from a local family-owned business
              that is fully licensed.
            </p>
          </article>

          <FireFaqMap />
        </div>
      </div>

      <div className="relative pb-10 bg-neutral-100 z-10 px-5 md:px-14 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-10 w-full bg-gradient-to-t from-neutral-200 to-white p-5 rounded-md shadow-xl">
          <div className="lg:w-1/2 flex flex-col gap-5">
            <div className="flex flex-col gap-10 w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                WE&#39;RE READY TO HELP
              </h2>
              <p className="text-lg text-neutral-600">
                Contact us today and connect with a member of our team! Fill out
                the form below, call, text or email us!
              </p>
            </div>
            <Form />
          </div>
          <div className="lg:w-1/2 flex text-lg flex-col gap-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              OUR INFORMATION
            </h2>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-2xl">Phone</h3>
                <div>
                  <span className="font-semibold text-neutral-600">
                    Main Phone{" "}
                  </span>
                  <a
                    href="tel:+16152009308"
                    aria-label="call us at 6152009308"
                    className="underline text-EliteRed"
                  >
                    (615) 200-9308
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-neutral-600">
                    Alternate Phone{" "}
                  </span>
                  <a
                    href="tel:+16158402626"
                    aria-label="or call us at 6158402626"
                    className="underline text-EliteRed"
                  >
                    (615) 840-2626
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-2xl">Email</h3>
                <span className="text-neutral-600">
                  customerservice@elitebrothersfire.com
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-2xl">Address</h3>
                <span className="text-neutral-600">
                  1051 Mt. Vernon Road Bethpage, TN 37022
                </span>
                <div className="flex gap-2 text-neutral-600">
                  <BsFillPinMapFill size={25} />
                  <a
                    href="https://www.google.com/maps/place/1051+Mt+Vernon+Rd,+Bethpage,+TN+37022/@36.542515,-86.3439939,17z/data=!3m1!4b1!4m6!3m5!1s0x88642ca620361f03:0xde436af8afc3267c!8m2!3d36.542515!4d-86.341419!16s%2Fg%2F11gdkyhzf_?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                    target="_blank"
                    className="underline text-EliteRed"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-2xl">Social</h3>
                <div className="flex gap-2 text-neutral-600">
                  <a
                    href="https://www.facebook.com/people/Elite-Brothers-Fire-and-Safety/100079015032455/"
                    target="_blank"
                  >
                    <BsFacebook
                      size={25}
                      className="duration-200 hover:text-EliteRed"
                    />
                  </a>
                  <a
                    href="https://www.yelp.com/biz/elite-brothers-fire-and-safety-bethpage?utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=MFyzcjahxBMNAyHg85HGjg"
                    target="_blank"
                  >
                    <BsYelp
                      size={25}
                      className="duration-200 hover:text-EliteRed"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
