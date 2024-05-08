import React from "react";
import Image from "next/image";

const JournyInfo = () => {
  return (
    <section className="bg-primary pb-0">
      <div className="container">
        <div className="flex flex-wrap items-center overflow-hidden">
          <div className="md:w-1/2 w-full md:-mb-10 mb-6">
            <Image
              src="/images/journy.png"
              alt="logo"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            />
          </div>
          <div className="md:w-1/2 w-full md:pb-0 pb-8">
            <h2 className="text-white pb-8">A journey of a thousand miles begins with a single step</h2>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <Image
                src="/images/google-play.jpg"
                alt="logo"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="!w-[12.0625rem] !h-[4.25rem] rounded-[0.8125rem]"
              />
              <Image
                src="/images/app-store.jpg"
                alt="logo"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="!w-[12.0625rem] !h-[4.25rem] rounded-[0.8125rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournyInfo;