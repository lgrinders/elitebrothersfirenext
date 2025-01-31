"use client";

import { reviewData } from "@/app/assets/data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import ReviewCard from "../ui/reviewCard/ReviewCard";

export default function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [Autoplay({ delay: 2000 })]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();

      const handleSelect = () => {
        emblaApi.plugins().autoplay.stop();
        setTimeout(() => {
          emblaApi.plugins().autoplay.play();
        }, 3000);
      };

      emblaApi.on('pointerUp', handleSelect);

      return () => {
        emblaApi.off('pointerUp', handleSelect);
      };
    }
  }, [emblaApi]);

  return (
    <div className="bg-white py-10 gap-5 flex flex-col overflow-hidden px-10 lg:px-14">
      <div className="flex justify-end">
        <div className="w-0 xl:w-1/2 h-10"></div>
        <div className="w-full flex flex-col gap-5 xl:w-1/2">
          <div className="flex text-end justify-end text-3xl md:text-4xl lg:text-5xl">WHAT CUSTOMERS ARE SAYING</div>
          <p className=" gap-3 justify-end flex text-sm text-neutral-500 lg:text-lg">See what our customers are saying out us.</p>
        </div>

      </div>

      <div

        ref={emblaRef}
      >

        <div className="flex">
          {reviewData.map((item, idx) => {
            return (
              <ReviewCard key={idx} item={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// idx, name, stars, body, date