import React from "react";
import Breadcrumb from "./Breadcrumb";
import Image from "next/image";

const HeroSub = ({ title, description }) => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/features", text: "Features" },
  ];
  return (
    <>
      <section className="bg-primary text-center lg:py-16 py-8">
        <h2 className="text-white">{title}</h2>
        <p className="text-xl text-white font-normal max-w-[35rem] w-full mx-auto mt-[1.875rem] mb-12">
          {description}
        </p>
        <Breadcrumb links={breadcrumbLinks} />
      </section>
      <section>
        <div className="container">
          <div>
            <Image
              src="/images/organic=traffic.png"
              alt="Grow Performance"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            ></Image>
          </div>
        </div>
      </section>
      <section>
          <div className="container">
              <div className="text-center pb-[4.6875rem]">
                <h2 className="pb-2">Your bespoke service bundle</h2>
                <p className="text-xl text-DeepOcean font-normal">We offer you a new generation of task and project</p>
              </div>
              <div className="grid grid-cols-12 gap-[1.875rem]">
                <div className="col-span-3">
                    <div className="grid grid-cols-3 items-center pb-9">
                      <div className="bg-primary w-[3.4375rem] h-[3.4375rem] rounded-xl inline-flex items-center justify-center">
                        <i className="bg-[url('/icon/brand-communi.svg')] bg-no-repeat bg-contain inline-block w-7 h-7"></i>
                      </div>
                        <h5>Brand Communication</h5>
                    </div>
                    <p className="text-18 text-DeepOcean font-normal">Sometimes by sometimes chunks as necessary making this the first true gener</p>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 items-center pb-9">
                      <div className="bg-primary w-[3.4375rem] h-[3.4375rem] rounded-xl inline-flex items-center justify-center">
                        <i className="bg-[url('/icon/graphic-design.svg')] bg-no-repeat bg-contain inline-block w-7 h-7"></i>
                      </div>
                        <h5>Graphic design</h5>
                    </div>
                    <p className="text-18 text-DeepOcean font-normal">Only five centuries, but also the leap into electronic typesetting remaining essentially.</p>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 items-center pb-9">
                      <div className="bg-primary w-[3.4375rem] h-[3.4375rem] rounded-xl inline-flex items-center justify-center">
                        <i className="bg-[url('/icon/product-development.svg')] bg-no-repeat bg-contain inline-block w-7 h-7"></i>
                      </div>
                        <h5>Product development</h5>
                    </div>
                    <p className="text-18 text-DeepOcean font-normal">Many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 items-center pb-9">
                      <div className="bg-primary w-[3.4375rem] h-[3.4375rem] rounded-xl inline-flex items-center justify-center">
                        <i className="bg-[url('/icon/technology.svg')] bg-no-repeat bg-contain inline-block w-7 h-7"></i>
                      </div>
                        <h5>Technology consulation</h5>
                    </div>
                    <p className="text-18 text-DeepOcean font-normal">Sometimes by sometimes chunks as necessary making this the first true gener</p>
                </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default HeroSub;
