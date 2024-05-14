import React from "react";
import Breadcrumb from "./Breadcrumb";

const HeroSub = ({ title, description, breadcrumbLinks }) => {
  // const breadcrumbLinks = [
  //   { href: "/", text: "Home" },
  //   { href: "/features", text: "Features" },
  // ];
  return (
    <>
      <section className="bg-primary text-center lg:py-16 py-8">
        <h2 className="text-white">{title}</h2>
        <p className="text-xl text-white font-normal max-w-[35rem] w-full mx-auto mt-[1.875rem] mb-12 sm:px-0 px-4">
          {description}
        </p>
        <Breadcrumb links={breadcrumbLinks} />
      </section>
    </>
  );
};

export default HeroSub;
