"use client"

import { FormEvent } from 'react';

interface FormProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ handleSubmit }: FormProps) => {
    const inputClass = "w-full lg:w-1/2 rounded-md bg-white placeholder:text-neutral-600 outline-none border-b-2 p-1.5";
    const fullInputClass = "w-full rounded-md bg-white placeholder:text-neutral-600 outline-none border-b-2 p-1.5";

    return (
        <form className="flex flex-col gap-10"
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="flex flex-row gap-5 items-center">
                <input required placeholder="First Name*" className={inputClass} />
                <input required placeholder="Last Name*" className={inputClass} />
            </div>
            <div className="flex flex-row gap-5 items-center">
                <input required placeholder="Email Address*" className={inputClass} />
                <input required placeholder="Phone Number*" className={inputClass} />
            </div>
            <input placeholder="Company Name" className={fullInputClass} />
            <textarea required className="w-full placeholder:text-neutral-600 min-h-48 rounded-md p-1.5 outline-none resize-none" placeholder="How can we Help you?*"></textarea>
            <button className="py-3 w-full rounded-md justify-center border-4 border-EliteRed2 border-dotted duration-200 bg-EliteRed text-white hover:bg-EliteRed2 font-bold">GET IN TOUCH</button>
        </form>
    )
}

export default Form