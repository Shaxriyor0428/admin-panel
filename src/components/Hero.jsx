import React from 'react'
import hero_image from "@/assets/images/hero.png";

const Hero = () => {
  return (
    <div className="min-h-[720px] w-full grid grid-cols-2 max-[900px]:grid-cols-1">
      <div className="">
        <img
          src={hero_image}
          className="bg-no-repeat bg-contain bg-center h-full w-[100%]"
          alt=""
        />
      </div>
      <div className=" bg-[#171D28] flex items-center min-h-[500px]">
        <div className="w-[500px] text-white pl-[63px] flex flex-col gap-2 items-start">
          <p className="font-medium text-[72px] leading-[76px]">
            Bring the warmth.
          </p>
          <p className="mb-3 w-3/4">
            Everyone needs a good winter jacket. Find yours with our collection
            and more.
          </p>
          <button className="py-3 px-14 rounded-md bg-[#377DFF] hover:opacity-85">
            Shopping Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero