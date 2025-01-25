import { whyData } from "../../assets/data";
import Button2 from "../ui/button2/Button2";

const WhatSetsUs = () => {
  return (
    <section className="flex w-full flex-col items-center gap-10 bg-white px-10 py-10 text-center xl:px-14 dark:bg-neutral-800 dark:text-white">
      <article className="flex max-w-[900px] flex-col gap-5">
        <h2 className="text-2xl font-normal md:text-3xl lg:text-4xl xl:text-5xl">
          WHAT SETS US APART
        </h2>
        <p className="text-center text-sm text-neutral-500 lg:text-lg dark:text-white">
          Choosing Elite Brothers Fire & Safety means opting for a team that
          prioritizes safety, quality, and reliability. Our business is
          family-owned and family-operated, and we are also proud to be locally
          owned and operated. We know that our integrity matters! Plus, we are
          fully licensed and insured for your protection and ours. Our fire
          suppression license and our fire extinguisher license are renewed
          annually. Our team has over 15 years of combined experience to ensure
          we get the job done right.
        </p>
      </article>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {whyData.map((whyItem, idx) => {
          return (
            <div
              className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-EliteRed bg-neutral-100 p-5 duration-200 hover:shadow-xl dark:bg-neutral-900"
              key={idx}
            >
              <span className="text-EliteRed">{whyItem.icon}</span>
              <h3
                id={`whyItem-title-${idx}`}
                className="text-xl md:text-2xl lg:text-3xl"
              >
                {whyItem.title}
              </h3>
              <p className="max-w-[400px] text-sm text-neutral-500 lg:text-lg dark:text-white">
                {whyItem.body}
              </p>
            </div>
          );
        })}
      </div>
      <Button2 to="/quote" name="REQUEST QUOTE" />
    </section>
  );
};

export default WhatSetsUs;
