import React from "react";
import Image from "next/image";
import Pulse from "./Pulse";
import Link from "next/link";

const JournyInfo = () => {
  return (
    <section className="bg-primary pb-0 relative">
      <div className="container">
        <div className="absolute left-[37%] bottom-[20%] lg:inline-block hidden">
          <Pulse/>
        </div>
        <div className="flex flex-wrap justify-between items-center overflow-hidden">
          <div className="md:w-[42%] w-full md:-mb-10 mb-0 z-[1] md:order-none order-2">
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
          <div className="md:w-[52%] w-full md:pb-0 pb-8 z-10">
            <h2 className="text-white pb-8 dark:text-white" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">A journey of a thousand miles begins with a single step</h2>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <Link href="https://play.google.com/store/apps?hl=en_IN&gl=US&pli=1" target="_blank">
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
              </Link>
              <Link href="https://www.apple.com/in/app-store/" target="_blank">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournyInfo;