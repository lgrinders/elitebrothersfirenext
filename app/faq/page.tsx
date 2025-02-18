"use client";

import Image from "next/image";
import extinguisher2 from "../../public/extinguisher2.jpg";
import fireextinguishertesting from "../../public/fireextinguishertesting.jpg"
import buildingblueprint from "../../public/buildingblueprint.jpg"
import fireextinguisherinstall from "../../public/fireextinguisherinstall.jpg"
import expire from "../../public/lightmaintenance.jpg";
import lights from "../../public/bulb.jpg";
import Form from "../ui/form/Form";
import { BsChevronDown, BsChevronUp, BsFacebook, BsFillPinMapFill, BsYelp } from "react-icons/bs";
import Button3 from "../ui/button3/Button3";
import { useState } from "react";
import farmland from "../../public/farmland.jpg";
import Link from "next/link";

export default function Faq() {
    const [currentIdx, setCurrentIdx] = useState<number | null>(0);

    const FAQ = [
        {
            title: "WHAT ARE FIRE SUPPRESSION SYSTEMS?",
            description: "Fire suppression systems provide an immediate response during a fire. This response helps quell the flames within the first few minutes, which can be crucial for protecting lives and property. Elite Brothers Fire & Safety is licensed to work with fire suppression systems with annual licensure renewal.",
            image: extinguisher2,
        },
        {
            title: "WHAT IS THE MOST EFFECTIVE ENGINEERED FIRE SUPPRESSION SYSTEM?",
            description: "The most effective fire suppression system is one that's specifically designed for your unique needs. Elite Brothers Fire & Safety will work with you to assess your situation and recommend the best possible solution.",
            image: fireextinguishertesting,
        },
        {
            title: "HOW LONG DO FIRE EXTINGUISHERS LAST?",
            description: "Fire extinguishers are great safety tools, but their lifespans are limited. They need to be replaced from time to time. The specific replacement timeline will vary depending on your extinguisher. At Elite Brothers Fire & Safety, we will provide you with the guidance you need to keep your equipment code-compliant.",
            image: buildingblueprint,
        },
        {
            title: "DO FIRE EXTINGUISHERS EXPIRE?",
            description: "Every fire extinguisher has an expiration date. You need annual service to keep your extinguishers in good, working condition. Some Authority Having Jurisdiction guidelines may require you to have monthly inspections. At Elite Brothers Fire & Safety, we have comprehensive services for your fire extinguishers. In addition to installation, we can provide ongoing maintenance to ensure your property is compliant with local codes. We’re committed to keeping you safe in the case of a fire.",
            image: expire,
        },
        {
            title: "HOW MANY FIRE EXTINGUISHERS DO I NEED?",
            description: "According to fire extinguisher requirements, all businesses must have the right number of extinguishers on each floor of the facility. The National Fire Protection Agency provides specific guidelines based on the type of business and other criteria. Once our technicians have assessed your business, we can provide you with a recommendation on the number of extinguishers needed to protect your property.",
            image: fireextinguisherinstall,
        },
        {
            title: "HOW DOES ELITE BROTHERS FIRE & SAFETY MAINTAIN YOUR EMERGENCY LIGHTS?",
            description: "You can count on Elite Brothers Fire & Safety to provide monthly maintenance and annual inspections. We’ll make sure you meet emergency lighting testing requirements. Let us provide you with confidence in the performance of your safety lighting systems.",
            image: lights,
        },
    ];


    const handleCurrentIdx = (getCurrentIdx: number) => setCurrentIdx(currentIdx === getCurrentIdx ? null : getCurrentIdx);

    return (
        <section className="text-sm md:text-base">


            <div className="fixed w-full top-0 mt-[80px] h-[1000px] -z-10">
                <div className="flex justify-center relative h-full items-center">
                    <Image
                        priority={true}
                        src={farmland}
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
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">FAQ</h1>
                    <article className="flex flex-col gap-5 text-sm text-neutral-600 lg:text-lg">
                        <p className="">Get all of your questions about Elite BrIf you want more specialized information about fire extinguishers, fire suppression or exit/emergency lighting consider checking out our services pages, accessible from the navigation area.others Fire & Safety here!</p>
                        <p>For more specialized information about fire extinguishers, fire suppression, or exit/emergency lighting, consider checking out our services pages accessible from the navigation area. If you have further questions feel free to call or submit a form.</p>
                    </article>
                    <Button3 name="REQUEST QUOTE" to="/contact" />
                </div>



                <div className="pt-20 -mt-10 md:px-14 px-5 flex gap-5 flex-col bg-neutral-100 pb-10">


                    <div>
                        {FAQ.map((item, idx) => (
                            <div
                                key={idx}
                                className={`${currentIdx === idx ? 'bg-white' : "bg-neutral-200"} hover:bg-white cursor-pointer duration-500 md:flex flex-col border-b-2 last-of-type:border-0 last-of-type:shadow-xl border-neutral-100 first-of-type:rounded-t-md last-of-type:rounded-b-md p-5 md:p-14`}
                                onClick={() => handleCurrentIdx(idx)}
                            >
                                <div className="flex justify-between items-centers">
                                    <h3 className="font-bold text-xl py-5">{item.title}</h3>
                                    <span className="p-5">{currentIdx === idx ? <BsChevronUp /> : <BsChevronDown />}</span>
                                </div>

                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out justify-between flex flex-col lg:flex-row gap-5 ${currentIdx === idx ? "max-h-screen" : "max-h-0"}`}>
                                    <div className="gap-5 flex flex-col text-sm justify-between text-neutral-600 lg:text-lg">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="flex justify-center md:justify-end">
                                        <div className="h-96 w-full lg:h-96 lg:w-96 relative">
                                            <Image src={item.image} fill className="object-cover rounded-md" alt="" sizes="100vh" />
                                        </div>
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
    );
}
