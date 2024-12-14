import React from "react";
import { HERO_LOGOS } from "../../static";

const Logos = () => {
  const heroItems = HERO_LOGOS.map((logo) => (
    <img key={logo.id} src={logo.image} alt="logo" className="max-w-[100%]" />
  ));
  return (
    <div className=" container flex flex-col gap-4 mb-12">
      <p className="font-semibold text-[20px] leading-8 text-center pt-[26px]">
        Trending Brands
      </p>
      <div className="flex justify-between items-center overflow-x-auto">
        {heroItems}
      </div>
    </div>
  );
};

export default Logos;
