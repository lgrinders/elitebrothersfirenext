import { whyData } from "../../assets/data";

const WhatSetsUs = () => {
  return (
    <section className="flex w-full flex-col text-center items-center gap-5 bg-neutral-100 px-5 md:px-10 py-10 xl:px-14">
      <article className="flex max-w-[900px] flex-col gap-5">
        <h2 className="text-2xl font-normal md:text-3xl lg:text-4xl xl:text-5xl">
          WHAT SETS US APART
        </h2>
        <p className="text-sm text-neutral-600 lg:text-lg">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {whyData.map((whyItem, idx) => {
          return (
            <div
              className="flex max-w-full lg:max-w-[420px] pt-32 flex-col items-center h-[500px] rounded-md from-neutral-200 to-neutral-100 bg-gradient-to-t p-10 shadow-xl"
              key={idx}
            >
              <span className="text-EliteRed pb-20">{whyItem.icon}</span>
              <h3
                id={`whyItem-title-${idx}`}
                className="text-lg md:text-xl lg:text-2xl font-bold pb-5"
              >
                {whyItem.title}
              </h3>
              <p className="text-md text-neutral-600 h-32 lg:text-lg">
                {whyItem.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatSetsUs;
