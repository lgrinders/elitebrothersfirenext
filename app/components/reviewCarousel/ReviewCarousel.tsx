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
    <div
      className="bg-neutral-100 py-10 overflow-hidden"
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
  );
}

// idx, name, stars, body, date