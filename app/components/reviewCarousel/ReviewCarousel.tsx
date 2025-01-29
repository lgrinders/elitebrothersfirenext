"use client";

import { reviewData } from "@/app/assets/data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";

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
    <div
      className="bg-neutral-100 py-10 overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex">
        {reviewData.map((item, idx) => {
          return (
            <div
              className="min-w-[400]  font-semibold p-5 text-md mr-5 h-80 flex flex-col text-neutral-500 justify-evenly rounded-md shadow-xl bg-white select-none"
              key={idx}
            >
              <span className="h-12 text-black flex items-center text-lg">{item.name}</span>
              <div className="flex h-12 items-center gap-0.5 text-yellow-400">
                {[...Array(item.stars)].map((_, idx) => {
                  return <BsFillStarFill size={30} key={idx} />;
                })}
              </div>
              <span className="h-32 flex">
                {item.body.length > 200 ? `${item.body.substring(0, 200)}...` : item.body}
              </span>
              <span className="h-10 flex items-center">{item.date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
