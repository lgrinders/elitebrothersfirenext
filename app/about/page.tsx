"use client";

import Image from "next/image";
import Form from "../ui/form/Form";
import { BsFacebook, BsFillPinMapFill, BsYelp } from "react-icons/bs";
import Button3 from "../ui/button3/Button3";

import nashville from "../../public/Nashville.jpg";


const About = () => {

    const fireFAQ = [
        {
            title: "SERVICES",
            description: "We have you covered on all of the following services.",
            points: [
                "Fire Extinguishers",
                "Kitchen Fire Suppression",
                "Emergency Lighting",
                "Fire Product Sales"
            ],
        },
        {
            title: "SPECIALTIES",
            description: "Rest assured that Elite Brothers Fire & Safety has you covered.",
            points: [
                "Dry Chemical Fire Control",
                "Exit and Emergency Lighting",
                "Fire Suppression Systems",
                "Fire Extinguisher Sales and Service",
            ],
        },
        {
            title: "PAYMENT OPTIONS",
            description: "Diverse payment options make interactions as smooth as possible.",
            points: [
                "Cash",
                "Check",
                "Discover",
                "Invoice",
                "MasterCard",
                "Visa",
                "Online payments through QuickBookss",
            ],
        },
        {
            title: "HOLIDAY HOURS",
            points: [
                "Monday, May 26, 2025 : Closed",
                "Friday, July 4, 2025 : Closed",
                "Monday, September 1, 2025 : Closed"
            ],
        },
    ];


    return (
        <section className="text-sm md:text-base">


            <div className="fixed w-full top-0 mt-[80px] h-[1000px] -z-10">
                <div className="flex justify-center relative h-full items-center">
                    <Image
                        priority={true}
                        src={nashville}
                        className="object-cover"
                        fill
                        alt=""
                        placeholder="blur"
                        quality={100}
                    />
                </div>
            </div>

            <div className="flex flex-col mt-[200px]">


                <div className="px-5 z-10 lg:px-14 mx-5 lg:mx-32 md:px-14 py-10 rounded-md bg-white flex flex-col gap-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">ABOUT ELITE BROTHERS FIRE</h1>
                    <article className="flex flex-col gap-5 text-sm text-neutral-600 lg:text-lg">
                        <p className="">Elite Brothers Fire & Safety provides fire extinguisher services, fire suppression systems and safety lighting solutions in the Nashville, TN area. <span className="font-bold">We offer 24/7 emergency services and same-day appointments.</span> Established in 2021 our goal is to give you the best experince possible while also addressing all of your fire & safety needs.</p>
                    </article>
                    <Button3 name="REQUEST QUOTE" to="/contact" />
                </div>



                <div className="pt-20 -mt-10 md:px-14 px-5 flex gap-5 flex-col bg-neutral-100 pb-10">
                    <article className="flex flex-col gap-5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl">WHAT WE PROVIDE</h2>
                    </article>

                    <div className="grid grid-cols-1 lg:grid-cols-2 pb-10">
                        {fireFAQ.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white hover:bg-neutral-200 cursor-pointer duration-500 md:flex flex-col p-5 md:p-14"

                            >
                                <div className="flex justify-between items-centers">
                                    <h3 className="font-bold text-xl py-5">{item.title}</h3>

                                </div>

                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out justify-between flex flex-col lg:flex-row gap-5`}>
                                    <div className="gap-5 flex flex-col text-sm text-neutral-600 lg:text-lg">
                                        <p>{item.description}</p>
                                        <h4 className="text-xl font-semibold">We Provide</h4>
                                        <ul className="list-disc list-inside flex flex-col gap-1">
                                            {item.points.map((point, i) => <li key={i}>{point}</li>)}
                                        </ul>

                                    </div>
                                    <div className="flex justify-center md:justify-end">

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            <div className="relative pb-10 bg-neutral-100 z-10 px-5 md:px-14 flex items-center justify-center">
                <div className="flex flex-col lg:flex-row gap-10 w-full bg-gradient-to-t from-neutral-200 to-white p-5 rounded-md shadow-xl">
                    <div className="lg:w-1/2 flex flex-col gap-5">
                        <div className="flex flex-col gap-10 w-full">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl">WE&#39;RE READY TO HELP</h2>
                            <p className="text-lg text-neutral-600">
                                Contact us today and connect with a member of our team! Fill out the form below, call, text or email us!
                            </p>
                        </div>
                        <Form />
                    </div>
                    <div className="lg:w-1/2 flex text-lg flex-col gap-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl">OUR INFORMATION</h2>
                        <div className="flex flex-col gap-10">


                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-2xl">Phone</h3>
                                <div>
                                    <span className="font-semibold text-neutral-600">Main Phone </span>
                                    <a href="tel:+16152009308"
                                        aria-label="call us at 6152009308" className="underline text-EliteRed">(615) 200-9308</a>
                                </div>
                                <div>
                                    <span className="font-semibold text-neutral-600">Alternate Phone </span>
                                    <a href="tel:+16158402626"
                                        aria-label="or call us at 6158402626" className="underline text-EliteRed">(615) 840-2626</a>
                                </div>
                            </div>


                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-2xl">Email</h3>
                                <span className="text-neutral-600" >customerservice@elitebrothersfire.com</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-2xl">Address</h3>
                                <span className="text-neutral-600">
                                    1051 Mt. Vernon Road
                                    Bethpage, TN 37022
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
                                        <BsFacebook size={25} className="duration-200 hover:text-EliteRed" />
                                    </a>
                                    <a
                                        href="https://www.yelp.com/biz/elite-brothers-fire-and-safety-bethpage?utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=MFyzcjahxBMNAyHg85HGjg"
                                        target="_blank"
                                    >
                                        <BsYelp size={25} className="duration-200 hover:text-EliteRed" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About