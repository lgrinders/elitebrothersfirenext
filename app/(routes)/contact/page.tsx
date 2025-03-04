import Image from "next/image";
import contact from "../../../public/customer-service.jpg";
import Form from "@/app/ui/form/Form";
import { BsFacebook, BsFillPinMapFill, BsYelp } from "react-icons/bs";
import ContactInfo from "@/app/ui/contactInfo/ContactInfo";

export const metadata = {
    title: "Contact",
    description:
        "Contact Elite Brothers Fire & Safety with any questions or concers that you may have.",
    keywords:
        "Call, Elite Brothers Fire & Safety, Contact, Fire Extinguisher, Email",
}

const Contact = () => (
    <section>
        <div className="fixed w-full mt-[50px]  sm:mt-[80px] top-0 h-[350px] -z-10">
            <div className="relative h-full flex justify-center items-center">
                <Image
                    priority={true}
                    src={contact}
                    className="object-cover"
                    fill
                    alt=""
                    placeholder="blur"
                    sizes="100vw"
                    quality={100}
                />
                <h1 className="absolute text-white text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">
                    CONTACT
                </h1>
            </div>
        </div>
        <div className="py-10 bg-neutral-100 px-5 md:px-14 mt-[300px]">
            <div className="flex flex-col lg:flex-row gap-10 bg-gradient-to-t from-neutral-200 to-white p-5 rounded-md shadow-xl">
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl">WE&apos;RE READY TO HELP</h2>
                    <span className="text-lg text-neutral-600">
                        Contact us today and connect with a member of our team! Fill out the form below, call, text or email us!
                    </span>
                    <Form />
                </div>
                <div className="flex text-lg flex-col gap-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl">OUR INFORMATION</h2>
                    <div className="flex flex-col gap-10 text-neutral-600">
                        <ContactInfo title="Phone">
                            <div>
                                <span className="font-semibold">Main Phone </span>
                                <a href="tel:+16152009308" aria-label="call us at 6152009308" className="underline text-EliteRed">
                                    (615) 200-9308
                                </a>
                            </div>
                            <div>
                                <span className="font-semibold">Alternate Phone </span>
                                <a href="tel:+16158402626" aria-label="or call us at 6158402626" className="underline text-EliteRed">
                                    (615) 840-2626
                                </a>
                            </div>
                        </ContactInfo>

                        <ContactInfo title="Email">
                            <span>customerservice@elitebrothersfire.com</span>
                        </ContactInfo>

                        <ContactInfo title="Address">
                            <span>
                                1051 Mt. Vernon Road
                                Bethpage, TN 37022
                            </span>
                            <div className="flex gap-2">
                                <BsFillPinMapFill size={25} />
                                <a
                                    href="https://www.google.com/maps/place/1051+Mt+Vernon+Rd,+Bethpage,+TN+37022/@36.542515,-86.3439939,17z/data=!3m1!4b1!4m6!3m5!1s0x88642ca620361f03:0xde436af8afc3267c!8m2!3d36.542515!4d-86.341419!16s%2Fg%2F11gdkyhzf_?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                                    target="_blank"
                                    className="underline text-EliteRed"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </ContactInfo>

                        <ContactInfo title="Social">
                            <div className="flex gap-2">
                                <a href="https://www.facebook.com/people/Elite-Brothers-Fire-and-Safety/100079015032455/" target="_blank">
                                    <BsFacebook size={25} className="duration-200 hover:text-EliteRed" />
                                </a>
                                <a
                                    href="https://www.yelp.com/biz/elite-brothers-fire-and-safety-bethpage?utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=MFyzcjahxBMNAyHg85HGjg"
                                    target="_blank"
                                >
                                    <BsYelp size={25} className="duration-200 hover:text-EliteRed" />
                                </a>
                            </div>
                        </ContactInfo>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
