"use client"

import { FormEvent } from 'react';

interface FormProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ handleSubmit }: FormProps) => {
    return (
        <form className="flex flex-col gap-10"
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="flex flex-row gap-5 items-center">
                <input required placeholder="First Name*" className="w-full lg:w-1/2 rounded-md bg-white placeholder:text-neutral-500 outline-none border-b-2 p-1.5" />
                <input required placeholder="Last Name*" className="w-full lg:w-1/2 rounded-md bg-white outline-none placeholder:text-neutral-500 border-b-2 p-1.5" />
            </div>
            <div className="flex flex-row gap-5 items-cetner">
                <input required placeholder="Email Address*" className="w-full lg:w-1/2 rounded-md bg-white placeholder:text-neutral-500 outline-none border-b-2 p-1.5" />
                <input required placeholder="Phone Number*" className="w-full lg:w-1/2 rounded-md bg-white outline-none placeholder:text-neutral-500 border-b-2 p-1.5" />
            </div>
            <input placeholder="Company Name" className="w-full rounded-md bg-white outline-none placeholder:text-neutral-500 border-b-2 p-1.5" />
            <textarea required name="" id="" className="w-full placeholder:text-neutral-500 min-h-48 rounded-md p-1.5 outline-none resize-none" placeholder="How can we Help you?*"></textarea>
            <button className="w-full bg-EliteRed hover:bg-EliteRed2 p-3 rounded-md font-semibold text-white">Get in touch</button>
        </form>
    )
}

export default Form