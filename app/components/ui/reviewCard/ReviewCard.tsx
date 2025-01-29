import { FaStar } from "react-icons/fa";


const ReviewCard = ({ id, name, stars, body, date }) => {
  return (
    <div
      className="w-64 h-96 embla__slide bg-white shadow-xl flex flex-col gap-2 rounded-md justify-evenly items-center"
      key={id}
    >
      <span>{name}</span>
      <div className="flex gap-1">
        {[...Array(stars)].map((item, idx) => {
          return <FaStar key={idx} size={25} />;
        })}
      </div>
      <div>{body}</div>
      <div>{date}</div>
    </div>
  );
};

export default ReviewCard;
