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
            className="min-w-[350px] from-neutral-200 to-neutral-100 bg-gradient-to-t p-5 mr-5 h-96 flex flex-col justify-evenly rounded-md shadow-xl select-none"
        >
            <span className="flex items-center font-bold text-xl">{item.name}</span>
            <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(item.stars)].map((_, idx) => {
                    return <BsFillStarFill size={30} key={idx} />;
                })}
            </div>
            <span className="h-32 text-neutral-600">
                {item.body.length > 200 ? `${item.body.substring(0, 200)}...` : item.body}
            </span>
            <span>{item.date}</span>
        </div>
    )
}

export default ReviewCard