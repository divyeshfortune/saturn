"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Productvideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when modal is closed
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset"; // Reset overflow style when component unmounts
    };
  }, [isModalOpen]);

  return (
    <section className="bg-secondary pb-0 relative z-[1]">
      <div className="container">
        <div className="">
          <div className="flex flex-wrap items-center justify-between">
            <div className="">
              <h2 className="max-w-[21.25rem]">How our product is working ?</h2>
            </div>
            <div>
              <p className="max-w-[34.3125rem] text-DeepOcean text-18 lg:pb-0 pb-4">
                Sometimes by accident, sometimes chunks as necessary making this
                the first true generator on the Internet. recently with desktop
                publishing software like Aldus PageMaker
              </p>
            </div>
          </div>
          <div className="mt-14 relative">
            <Image
              src="/images/product-working.jpg"
              alt="Product"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            ></Image>
            <Link
              href="javascript:void(0)"
              className="bg-white group sm:w-[3.75rem] w-12 sm:h-[3.875rem] h-12 absolute top-1/2 left-[48%] translate-x-[-15%] -translate-y-2/4 rounded-[2.0625rem] shadow-[0_0px_30px_rgba(24,23,23,0.1)] flex items-center justify-center"
              onClick={openModal}
            >
              <svg
                fill="currentcolor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="0 0 163.861 163.861"
                xmlSpace="preserve"
                className="bg-no-repeat w-[0.8rem] h-[0.875rem] inline-block bg-cover group-hover:text-primary"
              >
                <g>
                  <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275 c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
                </g>
              </svg>
            </Link>
            {isModalOpen && (
              // Render your YouTube popup modal here
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg sm:m-0 m-4">
                  <div className="overlay flex items-center justify-between border-b border-solid border-stroke p-5 z-50">
                    <h3 className="text-midnight_text">Video</h3>
                    <button onClick={closeModal} className="bg-[url('/icon/closed.svg')] bg-no-repeat bg-contain w-5 h-5 inline-block"></button>
                  </div>
                  <iframe
                    height="400"
                    className="p-4 md:w-[50rem] w-full"
                    src="https://www.youtube.com/embed/fVFKt6GF7XU"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>                  
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productvideo;

