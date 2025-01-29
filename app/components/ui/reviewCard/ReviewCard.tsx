import { BsFillStarFill } from "react-icons/bs";


interface ReivewCardProps {

    item: {
        name: string;
        body: string;
        stars: number;
        date: string;
    }
}

const ReviewCard: React.FC<ReivewCardProps> = ({ item }) => {
    return (
        <div
            className="min-w-[400] font-semibold p-5 text-md mr-5 h-80 flex flex-col text-neutral-500 justify-evenly rounded-md shadow-xl bg-white select-none"
        >
            <span className="h-12 text-black flex items-center text-lg">{item.name}</span>
            <div className="flex h-12 items-center gap-0.5 text-yellow-400">
                {[...Array(item.stars)].map((_, idx) => {
                    return <BsFillStarFill size={30} key={idx} />;
                })}
            </div>
            <span className="h-32 flex">
                {item.body.length > 200 ? `${item.body.substring(0, 200)}...` : item.body}
            </span>
            <span className="h-10 flex items-center">{item.date}</span>
        </div>
    )
}

export default ReviewCard