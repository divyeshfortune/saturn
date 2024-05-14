import Header from "@/components/Header";
import HeroSub from "@/components/HeroSub";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogpage } from "../../api/data";
import Footer from "@/components/Footer";

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      <Header />
      <HeroSub
        title="Blog"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section>
        <div className="container">
          <div className="blog-list grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-[1.875rem]">
            {blogpage.map((post, index) => (
              <Link
                key={index}
                href={`/blog-details/${post.slug}`}
                className="blog-item pricing col-span-4 group"
                data-aos="fade-up"
                data-aos-delay={post.delay}
                data-aos-duration="1000"
              >
                <div className="blog-img max-w-full overflow-hidden relative w-full h-auto">
                  <Image
                    src={post.image}
                    alt="blog"
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    sizes="100vh"
                    className="object-cover rounded-md w-full h-full transition duration-500 group-hover:scale-[1.2]"
                  />
                  <span className="postdate py-[0.475rem] max-w-[4.9375rem] w-full text-center bg-primary text-white absolute left-0 top-0 mt-[0.9375rem] ml-[0.9375rem] rounded-[0.25rem] text-[0.8125rem] leading-[1.0581rem] font-medium">
                    {post.lable}
                  </span>
                </div>
                <div className="blog-cont">
                  <h5 className="pt-[1.5rem] pb-[0.875rem] group-hover:text-primary">
                    {post.title}
                  </h5>
                  <span className="text-[0.8125rem] leading-7 text-[#ACBCCA]">
                    {post.timing}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="container mx-auto px-4 pt-[4.8125rem] pb-6">
            <nav
              className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
              aria-label="Pagination"
            >
              <Link
                className="flex w-10 h-10 mr-1 text-xl justify-center items-center rounded-full border border-[#D1E1FD] bg-white text-primary hover:border-stroke hover:bg-primary hover:text-white"
                href="#"
                title="Previous Page"
              >
                <span className="sr-only">Previous Page</span>
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 256 512"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
                </svg>
              </Link>
              <Link
                className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-primary text-white hover:border-gray-300 pointer-events-none"
                href="#"
                title="Page 1"
              >
                1
              </Link>
              <Link
                className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-midnight_text hover:border-gray-300 hover:bg-primary hover:text-white"
                href="#"
                title="Page 2"
              >
                2
              </Link>
              <Link
                className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-stroke bg-white text-midnight_text hover:bg-primary hover:text-white"
                href="#"
                aria-current="page"
                title="Page 3"
              >
                3
              </Link>
              <Link
                className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-midnight_text hover:border-gray-300 hover:bg-primary hover:text-white"
                href="#"
                title="Page 4"
              >
                4
              </Link>
              <Link
                className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-primary hover:border-gray-300 hover:bg-primary hover:text-white"
                href="#"
                title="Next Page"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 256 512"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                </svg>
              </Link>
            </nav>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default page;
