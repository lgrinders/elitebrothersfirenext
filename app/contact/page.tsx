"use client"

import Image from "next/image";
import contact from "../../public/contact.jpg"
import { FormEvent } from "react";


export default function Contact() {

    const handelsubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return <section className="flex flex-col gap-10">

        <div className="relative h-[450px] xl:h-[550px] flex justify-center items-center">
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
        <div className="xl:px-14 px-10">
            <div className="from-neutral-200 to-neutral-100 bg-gradient-to-t p-5 rounded-md shadow-xl">
                <div className="w-1/2 flex flex-col gap-5">
                    <div className="gap-2 flex flex-col w-1/2">
                        <h2 className="text-3xl font-semibold">WE'RE READY TO HELP</h2>
                        <p className="font-semibold text-xl">Contact us today and connect with a member of our team! Fill out the form below, call, text or email us!</p>
                    </div>

                    <form className="flex flex-col gap-10"
                        onSubmit={(e) => handelsubmit(e)}
                    >
                        <div className="flex flex-row gap-5 items-cetner">
                            <input placeholder="First Name*" className="w-1/2 rounded-md bg-white placeholder:text-neutral-500 outline-none focus:border-EliteRed border-b-2 border-neutral-800 p-1" />
                            <input placeholder="Last Name*" className="w-1/2 rounded-md bg-white outline-none placeholder:text-neutral-500 focus:border-EliteRed border-b-2 border-neutral-800 p-1" />
                        </div>
                        <div className="flex flex-row gap-5 items-cetner">
                            <input placeholder="Email Address*" className="w-1/2 rounded-md bg-white placeholder:text-neutral-500 outline-none focus:border-EliteRed border-b-2 border-neutral-800 p-1" />
                            <input placeholder="Phone Number*" className="w-1/2 rounded-md bg-white outline-none placeholder:text-neutral-500 focus:border-EliteRed border-b-2 border-neutral-800 p-1" />
                        </div>
                        <input placeholder="Company Name" className="w-full rounded-md bg-white outline-none placeholder:text-neutral-500 focus:border-EliteRed border-b-2 border-neutral-800 p-1" />
                        <div className="flex flex-row gap-5 items-cetner">

                        </div>
                    </form>


                </div>
                <div></div>



            </div>
        </div>
    </section>
}