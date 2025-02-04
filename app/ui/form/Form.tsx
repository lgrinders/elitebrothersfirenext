"use client"

import { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [company, setCompany] = useState("");
    const [textArea, setTextArea] = useState("");
    const [status, setStatus] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            company: company,
            textArea: textArea,
        }

        setStatus("loading")

        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("done");
            } else {
                console.error(err);
                setErr("Error Submitting Form");
            }
        } catch (error) {
            console.error(err, error);
            setErr("Error Submitting Form");
        }
    }

    const inputClass = "w-full lg:w-1/2 rounded-md bg-white placeholder:text-neutral-600 outline-none border-b-2 p-1.5";
    const fullInputClass = "w-full rounded-md bg-white placeholder:text-neutral-600 outline-none border-b-2 p-1.5";

    return (
        <form className="flex flex-col gap-10"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-row gap-5 items-center">
                <input required placeholder="First Name*" className={inputClass} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input required placeholder="Last Name*" className={inputClass} value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="flex flex-row gap-5 items-center">
                <input required placeholder="Email Address*" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} />
                <input required placeholder="Phone Number*" className={inputClass} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength={10} pattern='[0-9]{10}' />
            </div>
            <input placeholder="Company Name" className={fullInputClass} value={company} onChange={(e) => setCompany(e.target.value)} />
            <textarea required className="w-full placeholder:text-neutral-600 min-h-48 rounded-md p-1.5 outline-none resize-none" placeholder="How can we Help you?*" value={textArea} onChange={(e) => setTextArea(e.target.value)} ></textarea>
            <button type='submit' className="py-4 w-full rounded-md justify-center duration-200 bg-EliteRed text-white hover:bg-EliteRed2 font-bold">
                {
                    !status ? "Get in touch" : status === "loading" ? "Sending..." : status === "done" ? "Sent!" : null
                }</button>
        </form>
    )
}

export default Form