"use client";

import Image from "next/image";
import reviews from "../../public/reviews.jpg";
import { BsFacebook, BsFillStarFill, BsGoogle, BsStar } from "react-icons/bs";
import Link from "next/link";
import { FaCircleChevronRight } from "react-icons/fa6";

const reviewData = [
    {
        platform: "All",
        rating: 4.8,
        reviews: 58,
        icon: null, // No specific icon for "All"
    },
    {
        platform: "Google",
        rating: 5.0,
        reviews: 28,
        icon: <BsGoogle className="mr-1 text-EliteRed" size={30} />,
    },
    {
        platform: "Facebook",
        rating: 5.0,
        reviews: 1,
        label: "Recommendations & Ratings",
        icon: <BsFacebook className="mr-1 text-blue-500" size={30} />,
    },
];

const reviewData2 = [
    {
        name: "Gary K",
        rating: 5,
        body: "Elite Brothers Fire & Safety are reliable, honest and operate with integrity. I highly recommend them to anyone who is looking for service or installation.",
        date: "2/15/2025",
        icon: <BsGoogle className="mr-1 text-EliteRed" size={60} />,
    },
    {
        name: "Brian P",
        rating: 5,
        body: "Elite Brothers Fire & Safety has great experience with great people to work with. They are very professional with great prices for all your fire equipment needs. Highly recommend this locally owned company.",
        date: "2/15/2025",
        icon: <BsGoogle className="mr-1 text-EliteRed" size={60} />,
    },
]

const Reviews = () => (
    <section>
        Reviews
    </section>
);

export default Reviews;
