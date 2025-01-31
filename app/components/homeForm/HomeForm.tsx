"use client"

import Form from "../ui/form/Form"


const HomeForm = () => {
    return (
        <div className="md:px-10 lg:px-14 px-5 bg-neutral-100 py-10">

            <div className="from-neutral-200  justify-center  flex flex-col lg:flex-row gap-10 w-full to-neutral-100 bg-gradient-to-t p-5 rounded-md shadow-xl">
                <div className="lg:w-1/2 flex flex-col gap-5">
                    <div className="gap-10 flex flex-col w-full">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl">WE'RE READY TO HELP</h2>
                        <p className="text-lg">Contact us today and connect with a member of our team! Fill out the form below, call, text or email us!</p>
                    </div>
                    <Form handleSubmit={(e) => { e.preventDefault() }} />
                </div>
            </div>
        </div>
    );
}

export default HomeForm