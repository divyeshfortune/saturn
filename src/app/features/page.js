"use client"
import Header from "@/components/Header";
import HeroSub from "@/components/HeroSub";
import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Growperfomance from "@/components/Growperfomance";
import JournyInfo from "@/components/JournyInfo";
import Footer from "@/components/Footer";
import { bundle } from "../../api/data";
import AOS from 'aos';
import 'aos/dist/aos.css';

const page = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
    });
  }, []);
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/features", text: "Features" },
  ];
  return (
    <>
      <Header />
      <HeroSub
        title="Welcome to Our Website"
        description="Learn more about us and our services."
        breadcrumbLinks={breadcrumbLinks} // Passing breadcrumbLinks as prop
    />
      <section>
        <div className="container">
          <div className="bg-SnowySky border border-solid border-stroke rounded-3xl grid md:grid-cols-12 grid-cols-1 items-center gap-[1.875rem]">
            <div className="md:col-span-5 col-span-6 md:pl-[5.375rem] pl-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <h2>Smart solutions tailored for you</h2>
              <p className="py-8 max-w-[19.6875rem]">
                We help startups who want to rise above the ordinary with
                extraordinary messaging that speaks to their audience.
              </p>
              <Link href="#" className="btn inline-block mb-8">
                Buy Now
              </Link>
              <div className="flex items-center flex-wrap gap-[1.875rem]">
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.5" r="12" fill="#DBE7FF" />
                    <path
                      d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                      fill="#2F73F2"
                    />
                  </svg>
                  <span className="text-18 font-medium text-DeepOcean">Expert Help</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.5" r="12" fill="#DBE7FF" />
                    <path
                      d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                      fill="#2F73F2"
                    />
                  </svg>
                  <span className="text-18 font-medium text-DeepOcean">Proven results</span>
                </div>
              </div>
            </div>
            <div className="col-span-7 pt-[2.9375rem] pb-[3.75rem] pr-10 pl-[0.80rem]">
              <Image
                src="/images/organic-traffic.jpg"
                alt="Grow Performance"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="rounded-[1.875rem]"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="text-center pb-[4.6875rem]">
            <h2 className="pb-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Your bespoke service bundle</h2>
            <p className="text-xl text-DeepOcean font-normal" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              We offer you a new generation of task and project
            </p>
          </div>
          <div className="grid lg:grid-cols-12 sm:grid-cols-6 grid-cols-1 gap-[1.875rem]" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            {bundle.map((item, index) => (
              <div key={index} className="col-span-3">
                <div className="grid grid-cols-3 items-center pb-9">
                  <div className="bg-primary w-[3.4375rem] h-[3.4375rem] rounded-xl inline-flex items-center justify-center shadow-[0_8px_15px_rgba(47,116,242,0.2)]">
                    <Image
                      src={item.icon}
                      alt="Features"
                      width={0}
                      height={0}
                      layout="responsive"
                      quality={100}
                      sizes="100vh"
                      className="bg-no-repeat bg-contain inline-block !w-7 !h-7"
                    ></Image>
                  </div>
                  <h5 className="font-bold">{item.title}</h5>
                </div>
                <p className="text-18 text-DeepOcean font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Growperfomance />
      <JournyInfo />
      <Footer />
    </>
  );
};

export default page;
