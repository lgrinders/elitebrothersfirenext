import Image from "next/image";
import Button3 from "../../ui/button3/Button3";
import farmland from "../../../public/farmland.jpg";

const ServiceArea = () => {
  return (
    <section className="relative flex items-center h-[550px] text-white xl:h-[650px]">

      <div className="absolute z-10 flex flex-col items-center gap-10 lg:px-14 px-10 md:flex-row">
        <img
          src="/servicearea.svg"
          className="h-[120px] w-[500px] sm:h-[130px] sm:w-[500px] md:h-[110px] md:w-[400px] lg:h-[150px] lg:w-[500px] xl:h-[200px] xl:w-[900px]"
        />

        <article className="flex flex-col justify-start gap-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">OUR SERVICE AREA</h2>
          <p className=" text-sm lg:text-lg">
            Proudly serving Nashville and much of the surrounding area! Even if
            your county is not displayed here, give us a call and we will see
            what we can do for you!
          </p>
          <Button3 to="/contact" name="REQUEST QUOTE" />
        </article>


      </div>

      <Image
        src={farmland}
        className="object-cover"
        alt=""
        fill
        priority={false}
        placeholder="blur"
        sizes="100vw"
      />
    </section>
  );
};

export default ServiceArea;
