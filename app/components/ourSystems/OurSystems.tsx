import { ourSystemsData } from "../../assets/data";
import Button2 from "../ui/button2/Button2";

const OurSystems = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-5 bg-neutral-100 dark:bg-neutral-900"
      id="ourSystems"
    >
      <article className="gap-50 flex max-w-[900px] flex-col items-start justify-center px-10 pt-10 sm:items-center lg:px-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl dark:text-white">
          SYSTEMS WE WORK WITH
        </h2>
        <p className="text-sm text-neutral-500 sm:text-center lg:text-lg dark:text-white">
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
      <div className="grid grid-cols-1 gap-1 md:gap-0 lg:grid-cols-3">
        {ourSystemsData.map((dataItem) => {
          return (
            <article className="relative flex h-[500px]" key={dataItem.id}>
              <picture>
                <source
                  srcSet={dataItem.images?.small}
                  media="(max-width: 340px)"
                />
                <source
                  srcSet={dataItem.images?.medium}
                  media="(max-width: 570px)"
                />
                <source
                  srcSet={dataItem.images?.large}
                  media="(min-width: 1010px)"
                />
                <img
                  loading="eager"
                  src={dataItem.images?.large}
                  role="presentation"
                  className="pointer-events-none h-full w-full object-cover"
                />
              </picture>

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
