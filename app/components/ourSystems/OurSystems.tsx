import Image from "next/image";
import Button2 from "../../ui/button2/Button2";
import fireextinguisher from "../../../public/fireextinguisher.jpg";
import kitchen from "../../../public/kitchen.jpg";
import exitsign from "../../../public/exitsign.jpg";

export const ourSystemsData = [
  {
    id: 0,
    title: "Fire Extinguishers",
    image: fireextinguisher,
    path: "/fire-extinguisher-services",
    paragraph:
      "At Elite Brothers Fire & Safety, we offer a comprehensive range of fire extinguisher services, including sales, maintenance, and inspections.",
  },
  {
    id: 1,
    title: "Kitchen Fire Suppression",
    image: kitchen,
    path: "/fire-suppression-services",
    paragraph:
      "We specialize in the installation, maintenance, and repair of various fire suppression systems, ensuring they are tailored to your specific environment and needs.",
  },
  {
    id: 2,
    title: "Emergency Lighting",
    image: exitsign,
    path: "/emergency-lighting-services",
    paragraph:
      "At Elite Brothers Fire & Safety, we provide comprehensive services for the installation, maintenance, and inspection of exit and emergency lighting systems.",
  },
];

const OurSystems = () => {
  return (
    <section
      className="flex flex-col items-center text-center justify-center gap-5 bg-neutral-100"
      id="ourSystems"
    >
      <article className="gap-5 flex max-w-[900px] flex-col items-start justify-center px-10 pt-10 sm:items-center lg:px-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          SYSTEMS WE WORK WITH
        </h2>
        <p className="text-sm text-neutral-600 sm:text-center lg:text-lg">
          Elite Brothers Fire believes in doing what we do as best we can. We
          are experts reguarding{" "}
          <span className="font-bold">
            fire extinguisher sales and services
          </span>
          , <span className="font-bold">fire suppression system services</span>{" "}
          and
          <span className="font-bold">
            exit and emergency lighting services.
          </span>
        </p>
      </article>
      <div className="grid grid-cols-1 w-full lg:grid-cols-3">
        {ourSystemsData.map((dataItem) => {
          return (
            <article className="relative flex h-[500px]" key={dataItem.id}>
              <Image
                src={dataItem.image}
                className="pointer-events-none h-full w-full object-cover"
                alt={dataItem.title}
                placeholder="blur"
                width={550}
                loading="lazy"
              />

              <div className="absolute flex h-full w-full flex-col justify-end gap-5 overflow-hidden bg-black/60 px-5 duration-200 hover:bg-black/70">
                <div className="flex h-3/5 flex-col items-center gap-5">
                  <h3 className="flex text-2xl font-bold text-white xl:text-3xl">
                    {dataItem.title}
                  </h3>
                  <p className="lg:text-md min-h-[100px] max-w-[500px] text-sm tracking-widest text-white">
                    {dataItem.paragraph}
                  </p>
                  <Button2
                    to={dataItem.path}
                    name="LEARN MORE"
                    arai-label={`Learn more about ${dataItem.title}`}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default OurSystems;
