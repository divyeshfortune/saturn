import React from "react";
import Link from "next/link";

const Footer = () => {
    
  return (
    <footer className="bg-midnight_text relative z-[1]">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 sm:grid-cols-8 gap-[1.875rem] lg:pb-0 pb-8">
          <div className="col-span-4 lg:pt-20 pt-8 lg:pb-16 pb-0 md:border-r border-solid border-[#224767] border-none">
            <h2 className="text-white pb-10">Ready to Get Started?</h2>
            <Link href="#" className="btn inline- hover:bg-DarkPrimary hover:shadow-none">
              Get Started
            </Link>
          </div>

          <div className="col-span-4 lg:pt-20 pt-8 lg:pb-16 pb-0 md:border-r border-solid border-[#224767] md:pl-16 pl-0 border-none">
            <span className="text-18 font-bold text-white pb-4 inline-block">
              Support
            </span>
            <div className="pb-5">
              <p className="text-16 font-bold text-white">Phone</p>
              <Link
                href="tel:+(690) 2560 0020"
                className="text-24 text-MistyBlue hover:text-white"
              >
                +(690) 2560 0020
              </Link>
            </div>
            <div>
              <p className="text-16 font-bold text-white">Email</p>
              <Link
                href="mailto:info@saturn.com"
                className="text-24 text-MistyBlue hover:text-white"
              >
                info@saturn.com
              </Link>
            </div>
            <div>
              <ul className="flex items-center gap-3 mt-[1.875rem]">
                <li className="group">
                  <Link href="#" className="">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="#A3BBD1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:fill-primary"
                    >
                      <g clip-path="url(#clip0_1_343)">
                        <path d="M22.9128 0.769043H2.06165C1.34768 0.769472 0.7689 1.34854 0.769043 2.0628V22.9139C0.769472 23.6279 1.34854 24.2067 2.0628 24.2065H13.2889V15.1428H10.2448V11.5952H13.2889V8.98433C13.2889 5.95665 15.1372 4.3087 17.838 4.3087C19.1317 4.3087 20.2433 4.40512 20.5673 4.44818V7.61261H18.7049C17.2355 7.61261 16.951 8.31084 16.951 9.33566V11.5952H20.4643L20.0066 15.1428H16.951V24.2065H22.9128C23.6272 24.2067 24.2064 23.6278 24.2065 22.9134C24.2065 22.9132 24.2065 22.9131 24.2065 22.9128V2.06165C24.2063 1.34768 23.627 0.7689 22.9128 0.769043Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_343">
                          <rect width="25" height="25" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="#A3BBD1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:fill-primary"
                    >
                      <g clip-path="url(#clip0_1_345)">
                        <path d="M21.3412 0H1.65878C0.742615 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.742615 23 1.65878 23H21.3412C22.2574 23 23 22.2574 23 21.3412V1.65878C23 0.742615 22.2574 0 21.3412 0V0ZM16.7508 8.96648C16.7559 9.07966 16.7583 9.19337 16.7583 9.3076C16.7583 12.7955 14.1034 16.8176 9.24812 16.8178H9.24829H9.24812C7.75745 16.8178 6.37031 16.3809 5.20216 15.6321C5.4087 15.6565 5.61892 15.6686 5.83177 15.6686C7.06853 15.6686 8.20667 15.2468 9.11019 14.5387C7.95468 14.5173 6.98044 13.7542 6.64423 12.7053C6.80514 12.7362 6.97061 12.7531 7.1403 12.7531C7.38123 12.7531 7.61461 12.7206 7.83641 12.6601C6.62861 12.4183 5.71877 11.3508 5.71877 10.0727C5.71877 10.0607 5.71877 10.05 5.71912 10.039C6.07481 10.2367 6.48156 10.3557 6.91463 10.3691C6.20589 9.89615 5.74 9.08773 5.74 8.17192C5.74 7.68831 5.87073 7.23523 6.09744 6.84515C7.39912 8.44233 9.34445 9.49273 11.5383 9.6031C11.493 9.40973 11.4696 9.20828 11.4696 9.00122C11.4696 7.54407 12.6518 6.36189 14.1095 6.36189C14.8688 6.36189 15.5546 6.68283 16.0362 7.19592C16.6376 7.0773 17.2023 6.8576 17.7124 6.55526C17.515 7.17136 17.0966 7.68831 16.5516 8.01522C17.0856 7.95135 17.5945 7.80974 18.0674 7.59952C17.7141 8.12893 17.2661 8.59394 16.7508 8.96648Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_345">
                          <rect width="23" height="23" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="#A3BBD1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:fill-primary"
                    >
                      <g clip-path="url(#clip0_1_347)">
                        <path d="M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_347">
                          <rect width="22" height="23" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-4 lg:pt-20 pt-8 lg:pb-16 pb-2 md:pl-16 pl-0">
            <span className="text-18 font-bold text-white pb-4 inline-block">
              Subscribe Newsletter
            </span>
            <p className="text-MistyBlue text-base pb-7">
              To be updated with all the latest trends and product
            </p>
            <form className="newsletter-form bg-white flex rounded-md">
              <input
                type="email"
                placeholder="Email*"
                className="p-[0.9375rem] text-base border-0 rounded-md outline-0 w-[calc(100%_-_137px)] flex"
              />
              <button type="submit" className="btn newsletter-btn p-[0.625rem] text-17 font-medium bg-primary text-white border-none cursor-pointer rounded-[0px_6px_6px_0px] outline-0 text-center w-[8.5625rem] hover:bg-DarkPrimary hover:shadow-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap py-7 border-t border-solid border-[#224767]">
          <div>
            <ul className="flex items-center sm:flex-row flex-col sm:gap-[1.875rem] gap-[0.875rem]">
              <li className="text-base text-MistyBlue">
                <Link href="#" className="hover:text-white">
                  Landings
                </Link>
              </li>
              <li className="text-base text-MistyBlue">
                <Link href="#" className="hover:text-white">
                  Pages
                </Link>
              </li>
              <li className="text-base text-MistyBlue">
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li className="text-base text-MistyBlue">
                <Link href="#" className="hover:text-white">
                  Doc
                </Link>
              </li>
              <li className="text-base text-MistyBlue">
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-base text-MistyBlue">
              © All rights reserved. Made by Wrappixel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
