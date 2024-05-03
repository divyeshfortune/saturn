import React from "react";
import Image from "next/image";
import Link from "next/link";

const Productvideo = () => {
  return (
    <section className="bg-secondary pb-0 relative z-[1]">
      <div className="container">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="max-w-[21.25rem]">How our product is working ?</h2>
            </div>
            <div className="">
              <p className="max-w-[34.3125rem] text-DeepOcean text-18">
                Sometimes by accident, sometimes chunks as necessary making this
                the first true generator on the Internet. recently with desktop
                publishing software like Aldus PageMaker
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden mt-14 relative">
            <Image
              src="/images/product-working.jpg"
              alt="Product"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            ></Image>
            <Link href="#" className="bg-white w-[3.75rem] h-[3.875rem] absolute top-1/2 left-[48%] rounded-[2.0625rem] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.75)] p-[1.3125rem]">
              <i className="bg-[url('/icon/play-button.svg')] bg-no-repeat w-[1.25rem] h-[1.25rem] inline-block bg-cover">
              </i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productvideo;
