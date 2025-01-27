import { topofPageHeaderData } from "../../assets/data";

const TopPageBanner = () => {
  return (
    <section className="md:text-md hidden h-10 items-center gap-5 bg-EliteRed px-5 text-sm md:flex">
      {topofPageHeaderData.map((dataItem, index) => (
        <div
          key={index}
          className={`${
            dataItem.title === "Email:" ? dataItem.class : ""
          } flex items-center gap-2 font-bold text-white`}
        >
          <span>{dataItem.icon}</span>
          <span>{dataItem.title}</span>
          <span>{dataItem.response}</span>
        </div>
      ))}
    </section>
  );
};

export default TopPageBanner;
