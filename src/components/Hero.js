import React from "react";
import Pulse from "./Pulse";
import Image from "next/image";
import Link from "next/link";
import {businessgrow} from "../api/data";
import Pulsesmall from "./PulseSmall";

const Hero = () => {
  return (
    <section className="bg-primary relative h-full">
      <div className="container">
        <div className="absolute z-0 left-[31%] top-[38%] md:inline-block hidden">
          <Pulse />
        </div>
        <div className="absolute z-0 sm:left-2/3 left-[33.666667%] -top-[2%]">
          <Pulsesmall/>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-6 justify-between items-center">
          <div className="col-span-5 xl:-ml-[16.375rem] -ml-[0] md:-ml-[1.375rem] z-0">
              <Image
                src="/images/hero.jpg"
                alt="Grow Performance"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
              ></Image>
          </div>
          <div className="col-span-1"></div>
          <div className="max-w-[39.125rem] col-span-6 z-[1]">
            <h1 className="">Task Management AssistantYou Gonna Love</h1>
            <div className="py-6 pb-12">
              <p className="text-CrystalSky text-xl">
                We offer you a new generation of task and project management
                system. Plan, manage and track all your tasks in one flexible
                software purus pretium!
              </p>
            </div>
            <div className="flex sm:items-center items-start gap-4 sm:flex-row flex-col">
              <Link href="#" className="btn_white">Get Started</Link>
              <Link href="#" className="btn_trans">Start 30 Days Trial</Link>
            </div>
          </div>
        </div>
        <div className="lg:mt-[14.5rem] mt-[4.5rem]">
          <h2 className="text-center max-w-[39.5rem] m-auto md:pb-[5.375rem] pb-[2.375rem] text-white">
            Saas Solutions for your Business Grow on time
          </h2>
          <div className="grid md:grid-cols-12 sm:grid-cols-6 grid-cols-1 gap-[1.875rem]">
            {businessgrow.map((item, index) => (
              <div key={index} className="col-span-3">
                <div className="flex items-center gap-[1.875rem] pb-9">
                  <Image
                    alt="Hero"
                    src={item.icon}
                    className="m_icon bg-no-repeat bg-contain"
                    width={0}
                    height={0}
                  >
                  </Image>
                  <h3 className="max-w-[7.875rem]">{item.heading}</h3>
                </div>
                <p className="text-base font-normal text-CrystalSky max-w-[16.875rem]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
