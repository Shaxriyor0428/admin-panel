import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
const urls = [image1, image2, image3, image4, image5, image6, image3];

const Category = ({ data }) => {
  return (
    <div className=" container mt-4">
      <p className="text-center mb-12 text-[40px] font-semibold">
        Shop by categories
      </p>
      <div className="flex flex-wrap gap-6 overflow-x-auto justify-center">
        {data?.map((item, inx) => (
          <div key={inx} className=" text-center">
            <img
              src={urls[inx]}
              alt=""
              className="w-[167px] h-[167px] rounded-full"
            />
            <p className="mt-3 font-semibold text-sm" title={item?.name}>
              {item?.name.length > 15
                ? item?.name.slice(0, 15) + "..."
                : item?.name}
            </p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
