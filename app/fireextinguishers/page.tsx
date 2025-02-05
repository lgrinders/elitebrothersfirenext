"use client";

import Image from "next/image";
import extinguishImage from "../../public/extinguish.jpg";
import Form from "../ui/form/Form";
import { BsChevronDown, BsChevronUp, BsFacebook, BsFillPinMapFill, BsYelp } from "react-icons/bs";
import Button3 from "../ui/button3/Button3";
import { useState } from "react";

export default function FireExtinguishers() {
    const [currentIdx, setCurrentIdx] = useState<number | null>(null);

    const fireFAQ = [
        {
            id: "inspection",
            title: "FIRE EXTINGUISHER INSPECTIONS",
            body: <div>
                <p>Regular inspections of your fire extinguishers are crucial to you and your business safety. Get your
                    facilitys extinguishers inspected for their location, accessibility, and functionality. Our licensed team will
                    make sure that your extinguishers are fully up to code and ready if you ever need them.
                </p>
            </div>
        },
        {
            id: "testing",
            title: "FIRE EXTINGUISHER TESTING",
            body: <div>
                <p>Regular inspections of your fire extinguishers are crucial to you and your business safety. Get your
                    facilitys extinguishers inspected for their location, accessibility, and functionality. Our licensed team will
                    make sure that your extinguishers are fully up to code and ready if you ever need them.
                </p>
            </div>
        },
        {
            id: "recharge",
            title: "FIRE EXTINGUISHER RECHARGE",
            body: <div>
                <p>Regular inspections of your fire extinguishers are crucial to you and your business safety. Get your
                    facilitys extinguishers inspected for their location, accessibility, and functionality. Our licensed team will
                    make sure that your extinguishers are fully up to code and ready if you ever need them.
                </p>
            </div>
        },
        {
            id: "training",
            title: "HANDS-ON TRAINING",
            body: <div>
                <p>Regular inspections of your fire extinguishers are crucial to you and your business safety. Get your
                    facilitys extinguishers inspected for their location, accessibility, and functionality. Our licensed team will
                    make sure that your extinguishers are fully up to code and ready if you ever need them.
                </p>
            </div>
        },
    ]

    const handleCurrentIdx = (getCurrentIdx: number) => setCurrentIdx(currentIdx === getCurrentIdx ? null : getCurrentIdx);

    return (
        <section className="text-sm md:text-base">
            <div className="mt-52 flex justify-center items-center">
                <Image
                    loading="lazy"
                    src={extinguishImage}
                    className="pointer-events-none -z-20 w-full h-screen fixed object-cover"
                    width={1500}
                    alt="Man holding a fire extinguisher"
                    placeholder="blur"
                />
                <span className="absolute h-full w-full bg-gradient-to-t from-black -z-10 to-black/40"></span>
            </div>
            <div className="flex flex-col">
                <div className="px-5 z-10 lg:px-14 mx-5 lg:mx-14 md:px-14 py-10 rounded-md bg-white flex flex-col gap-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">FIRE EXTINGUISHERS</h1>
                    <article className="flex flex-col gap-5">
                        <p className="">Fire extinguishers are a critical first line of defense against
                            small fires, enabling safe evacuation and mitigating potential damage. However,
                            not all fires are the same—there are five distinct classifications, some requiring
                            a specific extinguishing agent for effective suppression. Our certified fire extinguisher
                            specialists will assess your facility and provide tailored recommendations to ensure optimal
                            fire protection.</p>
                        <p>Whether you operate a commercial kitchen, an industrial facility, or any other
                            business environment, we offer a comprehensive range of extinguishing solutions designed to safeguard
                            your personnel, property, and operations.</p>
                    </article>
                    <Button3 name="REQUEST QUOTE" to="/contact" />
                </div>
                <div className="pt-20 py-10 -mt-10 md:px-14 px-5 flex gap-5 flex-col bg-neutral-100">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl">WHAT WE PROVIDE</h2>
                    <article className="flex flex-col gap-5">
                        <p>At Elite Brothers Fire we provide any type of fire extinguisher to fit your needs, proper fire extinguisher
                            placement, regular fire extinguisher inspections, and fire extinguisher installations.
                            We consider everything from your building size and layout to placement regulations while following
                            local safety and building codes. When you work with us you know you are getting quality service from a
                            local family-owned business that is fully licensed.</p>
                    </article>
                    <div>
                        {fireFAQ.map((item, idx) => (
                            <div key={item.id} className="bg-EliteRed border-b-2 border-EliteRed2 flex flex-col gap-5 first-of-type:rounded-t-md last-of-type:rounded-b-md p-10 text-white" onClick={() => handleCurrentIdx(idx)}>
                                <div className="flex justify-between items-center">
                                    <h3>{item.title}</h3>
                                    {currentIdx === idx ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                                <span className={`${currentIdx === idx ? "block" : "hidden"}`}>{item.body}</span>
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
