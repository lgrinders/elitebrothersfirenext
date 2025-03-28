import { infoContentData } from "../../assets/data";
import Button from "../../ui/button/Button";

const InformationalContent = () => {
  return (
    infoContentData && (
      <section className="items-between flex flex-col justify-center gap-5 bg-white px-10 py-10 lg:px-14 xl:flex-row">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:w-2/5">
          {infoContentData.title}
        </h2>
        <article className="flex flex-col gap-3 text-sm text-neutral-600 lg:text-lg xl:w-3/5">
          <p>{infoContentData.body1}</p>
          <p>{infoContentData.body2}</p>
          <Button name={"ABOUT"} to={"/about"} />
        </article>
      </section>
    )
  );
};

export default InformationalContent;
