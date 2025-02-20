"use client"

import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import kitchen3 from "../../../public/kitchen3.jpg";
import kitchen2 from "../../../public/kitchen2.jpg"
import { useState } from "react";
import Image from "next/image";

const FireSuppressionMap = () => {
    const [currentIdx, setCurrentIdx] = useState<number | null>(0);

    const fireFAQ = [
        {
            title: "WET FIRE SYSTEMS",
            description: "Regular inspections of your fire extinguishers are crucial to you and your business safety. Get your facilitys extinguishers inspected for their location, accessibility, and functionality. Our licensed team will make sure that your extinguishers are fully up to code and ready if you ever need them.",
            points: [
                "Installation of wet chemical systems",
                "Testing of wet chemical systems",
            ],
            image: kitchen2,
        },
        {
            title: "DRY CHEMICAL SYSTEMS",
            description: "Testing of your current fire extinguishers is important when maintaining a safe facility. When you reach for a fire extinguisher in an emergency you want to be certain that the extinguisher in your hand is going to work. Elite Brothers Fire has got your need covered.",
            points: [
                "Installation of dry chemical systems",
                "Testing of dry chemical systems",
            ],
            image: kitchen3,
        },
    ]


    const handleCurrentIdx = (getCurrentIdx: number) => setCurrentIdx(currentIdx === getCurrentIdx ? null : getCurrentIdx);


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
                            <p><Link href="/contact" className="underline text-EliteRed">Get in touch</Link> with us to learn more about how our fire suppression systems can protect your business. Our systems are safe and easy to use with reliable performance. We can get you started with a free, same-day, no-obligation quote. You can call us 24/7 for emergencies!</p>
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

export default FireSuppressionMap