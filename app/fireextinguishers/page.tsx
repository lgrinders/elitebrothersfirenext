"use client";

import Image from "next/image";
import extinguisher2 from "../../public/extinguisher2.jpg";
import fireextinguishertesting from "../../public/fireextinguishertesting.jpg"
import buildingblueprint from "../../public/buildingblueprint.jpg"
import fireextinguisherinstall from "../../public/fireextinguisherinstall.jpg"
import Form from "../ui/form/Form";
import { BsChevronDown, BsChevronUp, BsFacebook, BsFillPinMapFill, BsYelp } from "react-icons/bs";
import Button3 from "../ui/button3/Button3";
import { useState } from "react";
import extinguishImage from "../../public/extinguishing.jpg"
import Link from "next/link";

export default function FireExtinguishers() {
    const [currentIdx, setCurrentIdx] = useState<number | null>(0);

    const fireFAQ = [
        {
            title: <h3 className="font-bold text-xl">FIRE EXTINGUISHER INSPECTIONS</h3>,
            body:
                <div className="gap-5 flex flex-col">
                    <p>Regular inspections of your fire extinguishers are crucial to you and your business safety. Get your
                        facilitys extinguishers inspected for their location, accessibility, and functionality.
                        Our licensed team will make sure that your extinguishers
                        are fully up to code and ready if you ever need them.
                    </p>
                    <h4 className="text-xl font-semibold">We Provide</h4>
                    <ul className="list-disc list-inside flex flex-col gap-1">
                        <li>The right type of extinguisher</li>
                        <li>Correct extinguisher placement</li>
                        <li>Regualar fire extinguisher inspections</li>
                        <li>New extinguisher installations</li>
                    </ul>
                    <p>With our help you can be prepared for a fire. We renew our fire extinguisher license annally to ensure that we are up to date. <Link href={"/contact"} className="underline text-EliteRed">Get in touch </Link>with us now for a same-day appointment or same-day service!</p>
                </div>,
            image: extinguisher2,

        },
        {
            title: <h3 className="font-bold text-xl">FIRE EXTINGUISHER TESTING</h3>,
            body:
                <div className="gap-5 flex flex-col">
                    <p>Testing of your current fire extinguishers is important when maintaining a safe facility. When you reach for a fire extinguisher in an emergency you want to be certain that the extinguisher in your hand is going to work. Elite Brothers Fire has got your need covered.
                    </p>
                    <h4 className="text-xl font-semibold">We Provide</h4>
                    <ul className="list-disc list-inside flex flex-col gap-1">
                        <li>Testing of your current extinguishers</li>
                        <li>Replacement or refills of extinguishers</li>
                        <li>Certified inspections</li>
                    </ul>
                    <p>With our help you can be prepared for a fire. We renew our fire extinguisher license annally to ensure that we are up to date. <Link href={"/contact"} className="underline text-EliteRed">Get in touch </Link>with us now for a same-day appointment or same-day service!</p>
                </div>,
            image: fireextinguishertesting,
        },
        {
            title: <h3 className="font-bold text-xl">BUILDING CONSIDERATIONS</h3>,
            body:
                <div className="gap-5 flex flex-col">
                    <p>At Elite Brothers Fire & Safety, well sell and service a range of fire extinguishers to meet the needs of any property.
                    </p>
                    <h4 className="text-xl font-bold">We Consider</h4>
                    <ul className="list-disc list-inside flex flex-col gap-1">
                        <li>Building size and layout</li>
                        <li>Type of business</li>
                        <li>Local safety and building codes</li>
                        <li>Placement regualtions</li>
                    </ul>
                    <p>With our help you can be prepared for a fire. We renew our fire extinguisher license annally to ensure that we are up to date. <Link href={"/contact"} className="underline text-EliteRed">Get in touch </Link>with us now for a same-day appointment or same-day service!</p>
                </div>,
            image: buildingblueprint,
        },
        {
            title: <h3 className="font-bold text-xl">FIRE EXTINGUISHER INSTALLATIONS</h3>,
            body:
                <div className="gap-5 flex flex-col">
                    <p>No matter the building, types of extinguishers needed or the amount, Elite Brothers Fire has you covered. Reach out to us today and we can give you a quote today.
                    </p>
                    <h4 className="text-xl font-semibold">We Provide</h4>
                    <ul className="list-disc list-inside flex flex-col gap-1">
                        <li>Certified fire extinguisher installations</li>
                        <li>Proper extinguisher placement</li>
                        <li>The right extinguishers for your case</li>
                    </ul>
                    <p>With our help you can be prepared for a fire. We renew our fire extinguisher license annally to ensure that we are up to date. <Link href={"/contact"} className="underline text-EliteRed">Get in touch </Link>with us now for a same-day appointment or same-day service!</p>
                </div>,
            image: fireextinguisherinstall,
        },
    ]

    const handleCurrentIdx = (getCurrentIdx: number) => setCurrentIdx(currentIdx === getCurrentIdx ? null : getCurrentIdx);

    return (
        <section className="text-sm md:text-base">


            <div className="fixed w-full top-0 mt-[80px] h-[1000px] -z-10">
                <div className="flex justify-center relative h-full items-center">
                    <Image
                        priority={true}
                        src={extinguishImage}
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



                <div className="pt-20 -mt-10 md:px-14 px-5 flex gap-5 flex-col bg-neutral-100 pb-10">
                    <article className="flex flex-col gap-5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl">WHAT WE PROVIDE</h2>
                        <p>At Elite Brothers Fire we provide any type of fire extinguisher to fit your needs, proper fire extinguisher
                            placement, regular fire extinguisher inspections, and fire extinguisher installations.
                            We consider everything from your building size and layout to placement regulations while following
                            local safety and building codes. When you work with us you know you are getting quality service from a
                            local family-owned business that is fully licensed.</p>
                    </article>



                    <div>
                        {fireFAQ.map((item, idx) => (
                            <div key={idx} className="bg-white hover:bg-neutral-200 duration-200 md:flex flex-col border-b-2 last-of-type:shadow-xl border-neutral-100 gap-5 first-of-type:rounded-t-md last-of-type:rounded-b-md p-5 md:p-14" onClick={() => handleCurrentIdx(idx)}>
                                <div className="flex justify-between items-center">
                                    {item.title}
                                    {currentIdx === idx ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                                <div
                                    className={`overflow-hidden transition-max-height duration-500 ease-in-out justify-between flex flex-col lg:flex-row gap-5 ${currentIdx === idx ? "max-h-screen" : "max-h-0"}`}
                                >
                                    {item.body}

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
