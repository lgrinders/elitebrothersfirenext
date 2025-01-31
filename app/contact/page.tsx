"use client"

import Image from "next/image";
import contact from "../../public/contact.jpg"
import { FormEvent } from "react";
import Form from "../components/ui/form/Form";


export default function Contact() {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return <section className="flex flex-col gap-10">
        <div className="relative h-[200px] xl:h-[300px] flex justify-center items-center">
            <span className="absolute h-full w-full bg-gradient-to-t from-black to-black/40"></span>
            <Image
                loading="eager"
                src={contact}
                className="pointer-events-none h-full w-full object-cover"
                width={1920}
                height={650}
                alt="photo of staircase sign"
                placeholder="blur"
            />
            <h1 className="absolute text-white text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">CONTACT</h1>
        </div>
        <div className="xl:px-14 px-5 md:px-10 flex items-center justify-center">
            <div className="from-neutral-200 flex flex-col lg:flex-row gap-10 w-full to-neutral-100 bg-gradient-to-t p-5 rounded-md shadow-xl">
                <div className="lg:w-1/2 flex flex-col gap-5">
                    <div className="gap-10 flex flex-col w-full">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl">WE'RE READY TO HELP</h2>
                        <p className="text-lg">Contact us today and connect with a member of our team! Fill out the form below, call, text or email us!</p>
                    </div>
                    <Form handleSubmit={handleSubmit} />
                </div>






                <div className="lg:w-1/2 flex flex-col gap-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:w-2/5">INFORMATION</h2>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-2xl">Phone</h3>
                            <div className="flex flex-col gap-1 text-lg">
                                <span>(101) 232-2323</span>
                                <span>(101) 232-2323</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-2xl">Email</h3>
                            <span className="text-lg">customerservice@elitebrothersfire.com</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-2xl">Address</h3>
                            <span className="text-lg">Address 1121 Address Ln, Murfreesboro, TN 37129</span>
                            <div>
                                icon
                                <span>Get Directions</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-2xl">Social</h3>
                            <div className="flex gap-2">
                                <div>icon</div>
                                <div>icon</div>
                                <div>icon</div>
                                <div>icon</div>
                                <div>icon</div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </section>
}