import Button2 from "../ui/button2/Button2";

const ServiceArea = () => {
  return (
    <section className="relative h-[550px] w-full text-white xl:h-[650px]">
      <span className="absolute h-full w-full bg-gradient-to-t from-black to-black/40"></span>
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-10 px-10 text-center md:flex-row">
        <img
          src="/servicearea.svg"
          loading="lazy"
          alt="Elite Brothers Fire service area"
          className="h-[80px] w-[300px] sm:h-[130px] sm:w-[500px] md:h-[110px] md:w-[400px] lg:h-[150px] lg:w-[500px] xl:h-[200px] xl:w-[700px]"
        />

        <article className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">OUR SERVICE AREA</h2>
          <p className="max-w-full text-sm md:max-w-[500px] lg:text-lg">
            Proudly serving Nashville and much of the surrounding area! Even if
            your county is not displayed here, give us a call and we will see
            what we can do for you!
          </p>
          <Button2 to="/quote" name="REQUEST QUOTE" />
        </article>
      </div>

      <picture>
        <source srcSet="/Mural-750.webp" media="(max-width: 750px)" />
        <source srcSet="/Mural-1280.webp" media="(max-width: 1280px)" />
        <source srcSet="/Mural-1920.webp" media="(min-width: 1281px)" />
        <img
          loading="eager"
          src="/Mural-1920.webp"
          role="presentation"
          className="pointer-events-none h-full w-full object-cover"
        />
      </picture>
    </section>
  );
};

export default ServiceArea;
