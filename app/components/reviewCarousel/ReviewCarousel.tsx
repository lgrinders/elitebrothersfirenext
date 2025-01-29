"use client";

import { reviewData } from "@/app/assets/data";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div
      className="w-full bg-neutral-100 py-10  overflow-hidden"
      ref={emblaRef}
    >
      <div className="embla__container gap-2 w-full">
        {reviewData.map((item, idx) => {
          return (
            <div
              className="min-w-64 w-64 px-5 py-10 h-96 flex flex-col items-center text-center justify-between shadow-xl bg-white"
              key={idx}
            >
              <span className="">{item.name}</span>
              <div className="flex text-yellow-300">
                {[...Array(item.stars)].map((item, idx) => {
                  return <FaStar size={30} key={idx} />;
                })}
              </div>
              <span className="text-sm">{item.body}</span>
              <span>{item.date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
