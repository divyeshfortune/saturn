import React from "react";
import Link from "next/link";
import Image from "next/image";

const Growperfomance = () => {
  return (
    <section className="">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center md:gap-0 gap-6">
          <div className="md:col-span-5 col-span-6">
            <h2 className="max-w-[18.75rem]">Real time visual on your now</h2>
            <p className="text-DeepOcean pt-7 pb-14">
              Sometimes by accident, sometimes chunks as necessary making this
              the first true generator on the Internet. recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <Link href="#" className="btn_blue btn py-[1.125rem]">
                Get Started
            </Link>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-6">
            <Image
              src="/images/growth.jpg"
              alt="Grow Performance"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growperfomance;