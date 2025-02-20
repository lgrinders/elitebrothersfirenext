"use client"

import React from 'react'
import exitLight2 from "../../../public/exitlight2.jpg";
import lightMaintenance from "../../../public/lightmaintenance.jpg";
import bulb from "../../../public/bulb.jpg";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const FireFaqMap = () => {
    const [currentIdx, setCurrentIdx] = useState<number | null>(0);



    const handleCurrentIdx = (getCurrentIdx: number) => setCurrentIdx(currentIdx === getCurrentIdx ? null : getCurrentIdx);

    const fireFAQ = [
        {
            title: "EXIT & EMERGENCY LIGHT INSTALLATION",
            description: "At Elite Brothers Fire we guarantee to solve your exit and emergency lighting problems. Ensuring your bussiness meets safty standards is crutial and we have you covered.",
            points: [
                "Exit lightin installation",
                "Emergency lighting installation",
                "Correct lighting placement",
                "Commercial lighting"
            ],
            image: exitLight2,
        },
        {
            title: "LIGHTING MAINTENANCE",
            description: "Having your lighting inspected is just as important as having it initially installed. Elite Brothers Fire will ensure that your exit & emergency lighting is performing as intended.",
            points: [
                "Commercial emergency lighting maintenance",
                "Annual lighting inspection",
                "Monthly emergency lighting maintenance"
            ],
            image: lightMaintenance,
        },
        {
            title: "LIGHTING VERIFICATION",
            description: "Elite Brothers Fire and safety experts will check and thoroughly test all of your lighting equiptment to make sure that it is up to safety standards.",
            points: [
                "Testing for the full 90 minute requirement",
                "Checking of battery voltage, condition, and manufacturer date",
                "Checking of lamps and bulbs",
                "Verifying proper function of charging circuit",
                "Application of lighting test label"
            ],
            image: bulb,
        },
    ];


    return (
        <div>
            {fireFAQ.map((item, idx) => (
                <div
                    key={idx}
                    className={`${currentIdx === idx ? 'bg-white' : "bg-neutral-200"} hover:bg-white cursor-pointer duration-500 md:flex flex-col border-b-2 last-of-type:border-0 last-of-type:shadow-xl border-neutral-100 first-of-type:rounded-t-md last-of-type:rounded-b-md p-5 md:p-14`}
                    onClick={() => handleCurrentIdx(idx)}
                >
                    <div className="flex justify-between items-centers">
                        <h3 className="font-bold text-xl py-5">{item.title}</h3>
                        <span className="p-5 text-3xl">{currentIdx === idx ? <FaChevronUp /> : <FaChevronDown />}</span>
                    </div>

                    <div className={`overflow-hidden transition-max-height duration-500 ease-in-out justify-between flex flex-col lg:flex-row gap-5 ${currentIdx === idx ? "max-h-screen" : "max-h-0"}`}>
                        <div className="gap-5 flex flex-col text-sm text-neutral-600 lg:text-lg">
                            <p>{item.description}</p>
                            <h4 className="text-xl font-semibold">We Provide</h4>
                            <ul className="list-disc list-inside flex flex-col gap-1">
                                {item.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                            <p>At Elite Brothers Fire & Safety, we ensure your business stays compliant with the latest safety standards. Is it time for your annual inspection?  <Link href="/contact" className="underline text-EliteRed">Get in touch</Link> with us now for a same-day appointment. We can conduct a full test of your lighting system!</p>
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
    )
}

export default FireFaqMap