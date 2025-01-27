"use client";

import { useEffect, useState } from "react";

import Button2 from "../ui/button2/Button2";
import extinguisherImage from "../../../public/extinguish.jpg";
import NashvilleImage from "../../../public/Nashville.jpg";
import Image from "next/image";

const ImageCarousel = () => {
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

  const [setTimeoutEnabled, setSetTimeoutEnabled] = useState<boolean>(true);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleCurrentImage = () => {
    setCurrentImage((prev) => (prev >= imageData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (setTimeoutEnabled) {
      const timeout = setTimeout(() => handleCurrentImage(), 9000);
      return () => clearTimeout(timeout);
    }
  }, [currentImage, setTimeoutEnabled]);

  const handleButtonClick = (id: number) => {
    setCurrentImage(id);
    setSetTimeoutEnabled(false);
    setTimeout(() => setSetTimeoutEnabled(true), 1000); // Re-enable auto-play after a short delay
  };

  return (
    <>
      <section
        className="absolute top-0 h-[550px] w-full overflow-hidden xl:h-[650px]"
        aria-labelledby="image carousel"
      >
        <h2 id="image carousel" className="sr-only">
          Image Carousel
        </h2>
        {imageData.map((imageItem) => (
          <article
            key={`${imageItem.id}`}
            className={`absolute flex h-full w-full items-center justify-center transition-opacity duration-300 ${
              imageItem.id === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              pointerEvents: imageItem.id === currentImage ? "auto" : "none",
            }}
            aria-hidden={imageItem.id !== currentImage}
          >
            <span className="absolute h-full w-full bg-gradient-to-t from-black to-black/40"></span>

            <Image
              loading={imageItem.id === currentImage ? "eager" : "lazy"}
              src={imageItem.image}
              className="pointer-events-none h-full w-full object-cover"
              width={1920}
              height={1080}
              alt={imageItem.alt}
              placeholder="blur"
            />

            <div
              className="absolute flex w-full flex-col items-center justify-center gap-5 text-center text-white motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-duration-[1.50s] xl:gap-5"
              key={currentImage}
            >
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
              {imageItem.id === currentImage && (
                <Button2 to="/quote" name="REQUEST QUOTE" />
              )}
            </div>
          </article>
        ))}

        <div className="absolute bottom-0 flex w-full items-center justify-center gap-1.5 pb-2">
          {imageData.map((imageItem) => (
            <button
              key={imageItem.id}
              className={`${
                imageItem.id === currentImage ? "bg-white" : "bg-white/50"
              } h-5 w-5 rounded-full`}
              aria-label={`Go to slide ${imageItem.id + 1}`}
              onClick={() => {
                handleButtonClick(imageItem.id);
              }}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageCarousel;
