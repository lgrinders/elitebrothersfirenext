import { topofPageHeaderData } from "../../assets/data";

const TopPageBanner = () => {
  return (
    <section className="md:text-md hidden relative h-8 gap-5 z-50 bg-EliteRed px-5 text-sm sm:flex">
      {topofPageHeaderData.map((dataItem, index) => (
        <div
          key={index}
          className={`${dataItem.title === "Email:" ? dataItem.class : ""
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
