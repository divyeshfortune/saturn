import React from "react";
import Image from "next/image";
import {frequently} from '../api/data';
import Link from "next/link";

const Frequently = () => {
  return (
    <section className="bg-secondary dark:bg-darklight">
      <div className="container">
        <div className="text-center">
          <h2 className="pb-2">Frequently asked questions</h2>
          <p className="text-DeepOcean text-24 font-normal">
            sometimes chunks as necessary making this the first search
          </p>
          <form className="md:w-[48.125rem] w-full block my-0 mx-auto pt-[3.75rem]">
            <div className="relative before:content-[''] before:absolute before:bg-[url('/icon/search.svg')] before:bg-no-repeat before:bg-contain before:inline-block before:w-[1.625rem] before:h-[1.625rem] before:right-0 before:cursor-pointer">
            <input
              type="text"
              id="search-bar"
              placeholder="Search"
              className="dark:!text-white"
            />
            </div>
          </form>
        </div>
        <div className="grid md:grid-cols-12 sm:grid-cols-4 grid-cols-1 items-center gap-[1.875rem] mt-14">
            {frequently.map((items, index) => (
                <Link href="javascript:void(0)" key={index} className="bg-white dark:bg-darkmode flex items-center flex-col py-[1.8rem] rounded-[0.625rem] col-span-2 -mx-[0.30rem] gap-4 hover:shadow-[0_25px_60px_rgba(59,75,104,0.1)]" data-aos="fade-up" data-aos-delay={items.delay} data-aos-duration="1000">
                    <Image src={items.image} width={0} height={0} alt="Frequently asked questions" className="bg-no-repeat bg-contain w-[3.75rem] h-[3.75rem] inline-block" />
                    <span className="text-21 font-medium text-midnight_text dark:text-white inline-block text-center max-w-[6.625rem]">{items.title}</span>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Frequently;