"use client";

import useEmblaCarousel from "embla-carousel-react";
import extinguisherImage from "../../../public/extinguish.jpg";
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
    <div className="embla h-[550px] xl:h-[650px]" ref={emblaRef}>
      <div className="embla__container h-full">
        {imageData.map((imageItem) => (
          <div
            key={`${imageItem.id}`}
            className="embla__slide flex items-center justify-center"
          >
            <span className="absolute h-full w-full bg-gradient-to-t from-black to-black/40"></span>

            <Image
              src={imageItem.image}
              className="pointer-events-none w-full h-full lg:h-auto object-cover"
              alt={imageItem.alt}
              placeholder="blur"
              width={1500}
              loading={imageItem.id === 0 ? "eager" : "lazy"}
            />

            <div className="absolute flex w-full flex-col items-center justify-center gap-5 text-center text-white motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-duration-[1.50s] xl:gap-5">
              <h1 className="flex items-center justify-center text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">
                {imageItem.title}
              </h1>

              <div className="justify- flex flex-col items-center">
                <h2 className="flex items-center justify-center text-lg md:text-xl lg:text-3xl xl:text-4xl">
                  {imageItem.subTitle}
                </h2>
                <p className="flex w-[350px] items-center justify-center px-5 text-center text-sm font-normal sm:w-[400px] lg:w-[600px] lg:text-lg xl:w-[650px] xl:text-xl">
                  {imageItem.body}
                </p>
              </div>
              <Button3 to="/quote" name="REQUEST QUOTE" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
