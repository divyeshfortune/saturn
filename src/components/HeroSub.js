import React from "react";
import Breadcrumb from "./Breadcrumb";
import Pulsesmall from "./PulseSmall";

const HeroSub = ({ title, description, breadcrumbLinks }) => {
  
  return (
    <>
      <section className="bg-primary text-center lg:py-16 py-8 relative">
        <div className="absolute -top-[8%] md:left-[63%] left-[40%]">
          <Pulsesmall/>
        </div>
        <h2 className="text-white relative">{title}</h2>
        <p className="text-xl text-white font-normal max-w-[35rem] w-full mx-auto mt-[1.875rem] mb-12 sm:px-0 px-4">
          {description}
        </p>
        <Breadcrumb links={breadcrumbLinks} />
      </section>
    </>
  );
};

export default HeroSub;
