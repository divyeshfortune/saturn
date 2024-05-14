import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSub from "@/components/HeroSub";
import JournyInfo from "@/components/JournyInfo";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {team} from '../../api/data'

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <Header />
      <HeroSub
        title="We strive to innovate"
        description="With a passion for technology and a commitment to excellence, we empower businesses to thrive in the digital landscape."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section>
        <div className="container">
          <div className="bg-SnowySky border border-solid border-stroke rounded-3xl grid md:grid-cols-12 grid-cols-1 items-center gap-[1.875rem]">
            <div
              className="md:col-span-5 col-span-6 md:pl-[5.375rem] pl-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2>Our mission. Drive business growth</h2>
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
                  <span className="text-18 font-medium text-DeepOcean">
                    Expert Help
                  </span>
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
                  <span className="text-18 font-medium text-DeepOcean">
                    Proven results
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 col-span-6 pl-[0.80rem]">
              <Image
                src="/images/about-busines.jpg"
                alt="Grow Performance"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="rounded-e-3xl"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-center mb-[3.75rem]">
            <h2>Our Team</h2>
            <p className="text-xl font-normal text-DeepOcean">
              Dedicated professionals of Saturn
            </p>
          </div>
          <div className="grid md:grid-cols-12 sm:grid-cols-6 grid-cols-1 gap-[1.875rem]">
            {team.map((items, index) => (    
                <div key={index} className="col-span-3 overflow-hidden">
                    <Image
                        alt="Team"
                        src={items.image}
                        className="mb-9 rounded-lg hover:scale-[1.1] hover:cursor-pointer transition duration-500 ease-in-out"
                        width={0}
                        height={0}
                        layout="responsive"
                        quality={100}
                        sizes="100vh"
                    ></Image>
                    <h3 className="text-midnight_text pb-2">{items.title}</h3>
                    <p className="text-18 font-medium text-DeepOcean">{items.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <JournyInfo />
      <Footer />
    </>
  );
};

export default page;
