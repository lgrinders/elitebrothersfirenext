"use client"

import extinguisher2 from "../../../public/extinguisher2.jpg";
import fireextinguishertesting from "../../../public/fireextinguishertesting.jpg"
import buildingblueprint from "../../../public/buildingblueprint.jpg"
import fireextinguisherinstall from "../../../public/fireextinguisherinstall.jpg"
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";


const FireExtinguishersMap = () => {
    const [currentIdx, setCurrentIdx] = useState<number | null>(0);




    const handleCurrentIdx = (getCurrentIdx: number) => setCurrentIdx(currentIdx === getCurrentIdx ? null : getCurrentIdx);

    const aboutFAQ = [
        {
            title: "FIRE EXTINGUISHER INSPECTIONS",
            description: "Regular inspections of your fire extinguishers are crucial to you and your business safety. Get your facilitys extinguishers inspected for their location, accessibility, and functionality. Our licensed team will make sure that your extinguishers are fully up to code and ready if you ever need them.",
            points: [
                "The right type of extinguisher",
                "Correct extinguisher placement",
                "Regular fire extinguisher inspections",
                "New extinguisher installations"
            ],
            image: extinguisher2,
        },
        {
            title: "FIRE EXTINGUISHER TESTING",
            description: "Testing of your current fire extinguishers is important when maintaining a safe facility. When you reach for a fire extinguisher in an emergency you want to be certain that the extinguisher in your hand is going to work. Elite Brothers Fire has got your need covered.",
            points: [
                "Testing of your current extinguishers",
                "Replacement or refills of extinguishers",
                "Certified inspections"
            ],
            image: fireextinguishertesting,
        },
        {
            title: "BUILDING CONSIDERATIONS",
            description: "At Elite Brothers Fire & Safety, well sell and service a range of fire extinguishers to meet the needs of any property.",
            points: [
                "Building size and layout",
                "Type of business",
                "Local safety and building codes",
                "Placement regulations"
            ],
            image: buildingblueprint,
        },
        {
            title: "FIRE EXTINGUISHER INSTALLATIONS",
            description: "No matter the building, types of extinguishers needed or the amount, Elite Brothers Fire has you covered. Reach out to us today and we can give you a quote today.",
            points: [
                "Certified fire extinguisher installations",
                "Proper extinguisher placement",
                "The right extinguishers for your case"
            ],
            image: fireextinguisherinstall,
        },
    ];

    return (
        <div>
            {aboutFAQ.map((item, idx) => (
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
                            <p>With our help you can be prepared for a fire. We renew our fire extinguisher license annually to ensure that we are up to date. <Link href="/contact" className="underline text-EliteRed">Get in touch</Link> with us now for a same-day appointment or same-day service!</p>
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

export default FireExtinguishersMap