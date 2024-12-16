import React from "react";
import image7 from "@/assets/image7.png";
import image8 from "@/assets/image8.png";
import image9 from "@/assets/image9.png";
import image10 from "@/assets/image10.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "November Outfit",
    url: image7,
  },
  {
    id: 2,
    title: "Cashmere Set",
    url: image8,
  },
  {
    id: 3,
    title: "The New Nordic",
    url: image9,
  },
  {
    id: 4,
    title: "The Leather",
    url: image10,
  },
];
const Collection = () => {
  return (
    <div className="py-12 container grid grid-cols-2 gap-6 mt-12 max-[600px]:grid-cols-1">
      {data?.map((item) => (
        <div key={item.id} className="h-[664px] relative max-[500px]:h-[450px]">
          <img src={item.url} alt="" className=" absolute w-full h-full" />
          <div className=" absolute left-12 bottom-12 text-white">
            <p className="text-[34px] leading-10 font-medium mb-3">
              {item.title}
            </p>
            <Link
              to={"/"}
              className="flex items-center gap-2 border-b w-[98px] border-b-white"
            >
              {" "}
              <span>Collection</span>
              <FaArrowRightLong className=" font-medium" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
