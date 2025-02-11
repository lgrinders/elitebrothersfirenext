"use client";

import useEmblaCarousel from "embla-carousel-react";
import extinguisherImage from "../../../public/extinguisher.jpg";
import NashvilleImage from "../../../public/Nashville.jpg";
import Button3 from "../../ui/button3/Button3";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const imageData = [
    {
      id: 0,
      image: NashvilleImage,
      alt: "Image of Nashville Tennessee",
      title: "PROUDLY SERVING NASHVILLE",
      subTitle: "BUILDING EXCELLENCE IN FIRE PROTECTION",
      body: "Born and raised in the Nashville area, we will treat you like family. Fire safety is what we bring to the table in the state of Tennessee.",
    },
    {
      id: 1,
      image: extinguisherImage,
      alt: "Man holding a fire extinguisher",
      title: "YOUR FIRE SAFETY EXPERTS",
      subTitle: "EXPERIENCED PROFESSIONALS",
      body: "Our team specializes in servicing fire extinguishers, fire suppression systems, and exit lighting to ensure safety and compliance in businesses and public spaces.",
      extraText: ["Nashville", "Murfreesboro", "Smyrna"],
    },
  ];

  return (
    <div className="overflow-hidden text-white select-none" ref={emblaRef}>
      <div className="flex">
        {imageData.map((imageItem) => (
          <div
            key={`${imageItem.id}`}
            className="embla__slide relative h-[550px] xl:h-[650px]"
          >
            <Image
              src={imageItem.image}
              className="object-cover"
              alt=""
              fill
              priority={true}
              placeholder="blur"
              sizes="100vw"
              quality={100}
            />

            <div className="z-10 absolute flex w-full h-full flex-col items-center justify-center gap-5 text-center motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-duration-[1.50s] xl:gap-5">
              <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">
                {imageItem.title}
              </h1>
              <div>
                <h2 className="text-lg md:text-xl lg:text-3xl xl:text-4xl">
                  {imageItem.subTitle}
                </h2>
                <p className="w-[350px] text-center text-sm sm:w-[400px] lg:w-[600px] lg:text-lg xl:w-[650px] xl:text-xl">
                  {imageItem.body}
                </p>
              </div>
              <Button3 to="/contact" name="REQUEST QUOTE" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


