import Header from "@/components/Header";
import HeroSub from "@/components/HeroSub";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <Header />
      <HeroSub
        title="Contact Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">
        <div className="container">
          <div className="flex md:flex-row flex-col items-center sm:gap-28 gap-8">
            <div className="flex sm:flex-row flex-col items-start sm:gap-[2.0625rem] gap-[1.0625rem]">
              <div className="bg-SkyBlueMist w-[3.75rem] h-[3.75rem] flex items-center justify-center rounded-full">
                <i className="bg-[url('/icon/email.svg')] bg-no-repeat bg-contain w-[2.125rem] h-[2.125rem] inline-block"></i>
              </div>
              <div>
                <span className="text-midnight_text dark:text-white text-xl font-bold">
                  Email US
                </span>
                <p className="text-DeepOcean font-normal text-xl max-w-[20.875rem] pt-3 pb-7">
                  Please feel free to drop us a line. We will respond as soon as
                  possible.
                </p>
                <div>
                  <Link href="#" className="text-primary text-18 font-medium flex items-center gap-3 group hover:text-midnight_text">
                    Leave a message
                    <svg
                      width="23"
                      height="17"
                      viewBox="0 0 23 17"
                      fill="#2F73F2"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:fill-midnight_text"
                    >
                      <path
                        d="M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-start sm:gap-[2.0625rem] gap-[1.0625rem]">
              <div className="bg-SkyBlueMist w-[3.75rem] h-[3.75rem] flex items-center justify-center rounded-full">
                <i className="bg-[url('/icon/Career.svg')] bg-no-repeat bg-contain w-[2.125rem] h-[2.125rem] inline-block"></i>
              </div>
              <div>
                <span className="text-midnight_text dark:text-white text-xl font-bold">
                  Careers
                </span>
                <p className="text-DeepOcean font-normal text-xl max-w-[20.875rem] pt-3 pb-7">
                  Sit ac ipsum leo lorem magna nunc mattis maecenas non
                  vestibulum
                </p>
                <div>
                  <Link href="#" className="text-primary text-18 font-medium flex items-center gap-3 group hover:text-midnight_text">
                    Send an application
                    <svg
                      width="23"
                      height="17"
                      viewBox="0 0 23 17"
                      fill="#2F73F2"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:fill-midnight_text"
                    >
                      <path
                        d="M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pt-[7.875rem] pt-11 md:pb-[6.75rem] pb-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin" width="1114" height="477" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-lg w-full"></iframe>
          </div>
        </div>
        <div className="border-b border-solid border-stroke dark:border-none"></div>
      </section>
      <section className="dark:bg-darkmode">
        <div className="container">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[1.875rem]">
                <div className="col-span-6">
                    <h2 className="max-w-[17.3125rem] mb-9">Get Online Consu ltation</h2>
                    <form className="flex flex-wrap w-full m-auto justify-between">
                <div className="sm:w-[calc(50%_-_10px)] w-[calc(100%_-_0px)] mx-0 my-2.5">
                  <label for="first-name" className="pb-3 inline-block text-17 text-DeepOcean">First Name*</label>
                  <input
                    className="w-full text-17 px-[0.9375rem] py-2.5 border-stroke border-solid border transition-all duration-500 focus:border-primary focus:border-solid focus:border"
                    type="text"
                  />
                </div>
                <div className="sm:w-[calc(50%_-_10px)] w-[calc(100%_-_0px)] mx-0 my-2.5">
                <label for="last-name" className="pb-3 inline-block text-17 text-DeepOcean">Last Name*</label>
                  <input
                    className="w-full text-17 px-[0.9375rem] py-2.5 border-stroke border-solid border transition-all duration-500 focus:border-primary focus:border-solid focus:border"
                    type="text"
                  />
                </div>
                <div className="sm:w-[calc(50%_-_10px)] w-[calc(100%_-_0px)] mx-0 my-2.5">
                <label for="email" className="pb-3 inline-block text-17 text-DeepOcean">Email address*</label>
                  <input
                    type="email"
                    className="w-full text-17 px-[0.9375rem] py-2.5 border-stroke border-solid border transition-all duration-500 focus:border-primary focus:border-solid focus:border"
                  />
                </div>
                <div className="sm:w-[calc(50%_-_10px)] w-[calc(100%_-_0px)] mx-0 my-2.5">
                <label for="Specialist" className="pb-3 inline-block text-17 text-DeepOcean">Specialist*</label>
                  <select className="w-full text-17 px-[0.9375rem] py-2.5 text-DeepOcean border-stroke border-solid border transition-all duration-500 focus:border-primary focus:border-solid focus:border">
                    <option value="">Choose a specialist</option>
                    <option value="Baking &amp; Pastry">
                        Choose a specialist
                    </option>
                    <option value="Exotic Cuisine">Exotic Cuisine</option>
                    <option value="French Desserts">French Desserts</option>
                    <option value="Seafood &amp; Wine">
                        Choose a specialist
                    </option>
                  </select>
                </div>
                <div className="sm:w-[calc(50%_-_10px)] w-[calc(100%_-_0px)] mx-0 my-2.5">
                <label for="date" className="pb-3 inline-block text-17 text-DeepOcean">Date*</label>
                  <input
                    className="w-full text-17 px-[0.9375rem] rounded-md text-DeepOcean py-2.5 outline-none border-stroke border-solid border transition-all duration-500 focus:border-primary focus:border-solid focus:border"
                    type="date"
                  />
                </div>
                <div className="sm:w-[calc(50%_-_10px)] w-[calc(100%_-_0px)] mx-0 my-2.5">
                <label for="time" className="pb-3 inline-block text-17 text-DeepOcean">Time*</label>
                  <input
                    className="w-full text-17 px-[0.9375rem] text-DeepOcean rounded-md py-2.5 border-stroke outline-none border-solid border transition-all duration-500 focus:border-primary focus:border-solid focus:border"
                    type="time"
                  />
                </div>
                <div className="mx-0 my-2.5 w-full">
                  <Link href="#" className="btn py-[1.1875rem] px-[3rem] mt-8 inline-block hover:shadow-[inset_-10.5rem_0_0_0_#102D47,inset_10.5rem_0_0_0_#102D47]" type="submit">
                    Make an appointment
                  </Link>
                </div>
              </form>
                </div>
                <div className="col-span-6">
                    <Image
                      src="/images/contact.jpg"
                      alt="Contact"
                      width={0}
                      height={0}
                      layout="responsive"
                      quality={100}
                      sizes="100vh"
                      className="bg-no-repeat bg-contain"
                    ></Image>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container">
            <div className="">
                <div className="grid md:grid-cols-9 grid-cols-1 gap-[1.875rem] border-b border-solid border-[#4F8BFB] pb-11">
                    <div className="col-span-3">
                        <h2 className="text-white max-w-[13.6875rem]">Pune Head Office</h2>
                    </div>
                    <div className="col-span-3">
                        <p className="sm:text-24 text-xl text-IceBlue font-normal max-w-[16.625rem] leading-10">4292 Mapleview Drive Greenfield Zip code 38230</p>
                    </div>
                    <div className="col-span-3">
                        <Link href="mailto:headoffice@saturn.com" className="sm:text-24 text-xl text-white font-medium underline">headoffice@saturn.com</Link>
                        <Link href="tel:731-621-5503" className="sm:text-24 text-xl text-IceBlue flex items-center gap-2"><span className="text-[#8BB4FF]">Call</span>731-621-5503</Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-9 grid-cols-1 gap-[1.875rem] pt-12">
                    <div className="col-span-3">
                        <h2 className="text-white max-w-[13.6875rem]">Bengaluru Office</h2>
                    </div>
                    <div className="col-span-3">
                        <p className="sm:text-24 text-xl text-IceBlue font-normal max-w-[16.625rem] leading-10">3502 Marcus Street Geraldine Zip code 35974</p>
                    </div>
                    <div className="col-span-3">
                        <Link href="mailto:Office@saturn.com" className="sm:text-24 text-xl text-white font-medium underline">Office@saturn.com</Link>
                        <Link href="tel:731-235-7993" className="sm:text-24 text-xl text-IceBlue flex items-center gap-2"><span className="text-[#8BB4FF]">Call</span>731-235-7993</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default page;
