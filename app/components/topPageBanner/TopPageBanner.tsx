import { topofPageHeaderData } from "../../assets/data";

const TopPageBanner = () => {
  return (
    <section className="md:text-md relative z-10 hidden h-12 items-center gap-5 bg-neutral-900 px-5 font-Inter text-sm md:flex">
      {topofPageHeaderData.map((dataItem, index) => (
        <div
          key={index}
          className={`${
            dataItem.title === "Email:" ? dataItem.class : ""
          } flex items-center gap-2 font-bold text-white`}
        >
          <span className="text-EliteRed">{dataItem.icon}</span>
          <span>{dataItem.title}</span>
          <span>{dataItem.response}</span>
        </div>
      ))}
    </section>
  );
};

export default TopPageBanner;
