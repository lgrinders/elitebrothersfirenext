import { infoContentData } from "../../assets/data";
import Button from "../ui/button/Button";

const InformationalContent = () => {
  return (
    infoContentData && (
      <section className="items-between flex w-full flex-col justify-center gap-5 bg-white px-10 py-10 lg:px-14 xl:flex-row dark:bg-neutral-800">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:w-2/5 dark:text-white">
          {infoContentData.title}
        </h2>
        <article className="flex flex-col gap-3 text-sm text-neutral-500 lg:text-lg xl:w-3/5 dark:text-white">
          <p>{infoContentData.body1}</p>
          <p>{infoContentData.body2}</p>
          <Button name={"ABOUT"} to={"/about"} />
        </article>
      </section>
    )
  );
};

export default InformationalContent;
