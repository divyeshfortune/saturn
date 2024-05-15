"use client"
import { useState } from "react";
import Link from "next/link";
import PulseBig from '@/components/PulseBig'

const PricingPackages = () => {
  const [selectedPlan, setSelectedPlan] = useState('Monthly');

  const handleSwitchChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  // Define content for the <p> tag based on the selected plan
  const renderContent = () => {
    if (selectedPlan === "Monthly") {
      return "Phasellus ut nibh sit amet libero tempor corper. Proin eu augue sit amet diam mattis lacinia.";
    } else if (selectedPlan === "Yearly") {
      return "Amet consectetur adipisicing elit. Atque numquam non, delectus eu augue sit amet optio dolor diam mattis lacinia.";
    }
  };

  return (
    <section className="relative border-t border-solid border-stroke">
      <div className="absolute right-[15%] -top-[12%] z-0 xl:inline-block hidden">
        <PulseBig />
      </div>
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center md:-mx-4 mx-0 gap-[1.875rem] relative">
          <div className="col-span-3 mb-8 lg:mb-0">
            <h2 className="text-start pb-[1.875rem] max-w-[16.625rem]">Choose our pricing plans</h2>
            <div className="switches-container">
                <input
                  type="radio"
                  id="switchMonthly"
                  name="switchPlan"
                  value="Monthly"
                  checked={selectedPlan === "Monthly"}
                  onChange={handleSwitchChange}
                />
                <input
                  type="radio"
                  id="switchYearly"
                  name="switchPlan"
                  value="Yearly"
                  checked={selectedPlan === "Yearly"}
                  onChange={handleSwitchChange}
                />
                <label htmlFor="switchMonthly">Monthly</label>
                <label htmlFor="switchYearly">Yearly</label>
                <div className="switch-wrapper">
                  <div className="switch">
                    <div>Monthly</div>
                    <div>Yearly</div>
                  </div>
                </div>
              </div>
              <p className="mt-12 text-DeepOcean text-18">
              {renderContent()}
            </p>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-4 mb-8 lg:mb-0 shadow-[0_0px_30px_rgba(24,23,23,0.1)] rounded-[0.3125rem] dark:bg-DarkPrimary">
            <div className="flex flex-col p-6 sm:p-8">
              <div className="space-y-2 pb-2">
                <span className="text-40 font-bold text-primary">
                  $39
                  <span className="text-xl text-DeepOcean font-normal">
                    /Month
                  </span>
                </span>
              </div>
              <span className="text-3xl font-bold text-midnight_text dark:text-CeruleanBlue">
                Basic
              </span>
              <p className="text-DeepOcean text-base pt-6 border-b border-solid border-stroke pb-5">
                Sometimes chunks as necessary making this the first true
              </p>
              <ul className="flex-1 space-y-5 pt-6">
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#D2FFDC" />
                    <g clipPath="url(#clip0_255_2)">
                      <path
                        d="M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z"
                        fill="#12C038"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_255_2">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(7 7)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-17 text-midnight_text dark:text-CrystalSky font-medium">
                    Training Intake / Requests
                  </span>
                </li>
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#D2FFDC" />
                    <g clipPath="url(#clip0_255_2)">
                      <path
                        d="M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z"
                        fill="#12C038"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_255_2">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(7 7)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-17 text-midnight_text dark:text-CrystalSky font-medium">
                    Planning Board
                  </span>
                </li>
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#FFE0E0" />
                    <g clipPath="url(#clip0_256_3)">
                      <path
                        d="M13.4912 12.5001L16.8562 9.13495C16.9488 9.04232 16.9999 8.91873 17 8.78695C17 8.6551 16.9489 8.53137 16.8562 8.43888L16.5613 8.14407C16.4686 8.05122 16.345 8.00037 16.2131 8.00037C16.0814 8.00037 15.9578 8.05122 15.8651 8.14407L12.5001 11.509L9.13502 8.14407C9.04246 8.05122 8.9188 8.00037 8.78695 8.00037C8.65524 8.00037 8.53159 8.05122 8.43902 8.14407L8.144 8.43888C7.952 8.63088 7.952 8.94317 8.144 9.13495L11.509 12.5001L8.144 15.865C8.05137 15.9578 8.00037 16.0814 8.00037 16.2132C8.00037 16.345 8.05137 16.4686 8.144 16.5613L8.43895 16.8561C8.53151 16.9489 8.65524 16.9998 8.78688 16.9998C8.91873 16.9998 9.04239 16.9489 9.13495 16.8561L12.5001 13.4911L15.865 16.8561C15.9578 16.9489 16.0813 16.9998 16.213 16.9998H16.2132C16.345 16.9998 16.4686 16.9489 16.5613 16.8561L16.8561 16.5613C16.9487 16.4686 16.9998 16.345 16.9998 16.2132C16.9998 16.0814 16.9487 15.9578 16.8561 15.8651L13.4912 12.5001Z"
                        fill="#E23C3C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_256_3">
                        <rect
                          width="9"
                          height="9"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-17 text-midnight_text dark:text-CrystalSky font-medium">
                    Unlimited Collaborators
                  </span>
                </li>
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#FFE0E0" />
                    <g clipPath="url(#clip0_256_3)">
                      <path
                        d="M13.4912 12.5001L16.8562 9.13495C16.9488 9.04232 16.9999 8.91873 17 8.78695C17 8.6551 16.9489 8.53137 16.8562 8.43888L16.5613 8.14407C16.4686 8.05122 16.345 8.00037 16.2131 8.00037C16.0814 8.00037 15.9578 8.05122 15.8651 8.14407L12.5001 11.509L9.13502 8.14407C9.04246 8.05122 8.9188 8.00037 8.78695 8.00037C8.65524 8.00037 8.53159 8.05122 8.43902 8.14407L8.144 8.43888C7.952 8.63088 7.952 8.94317 8.144 9.13495L11.509 12.5001L8.144 15.865C8.05137 15.9578 8.00037 16.0814 8.00037 16.2132C8.00037 16.345 8.05137 16.4686 8.144 16.5613L8.43895 16.8561C8.53151 16.9489 8.65524 16.9998 8.78688 16.9998C8.91873 16.9998 9.04239 16.9489 9.13495 16.8561L12.5001 13.4911L15.865 16.8561C15.9578 16.9489 16.0813 16.9998 16.213 16.9998H16.2132C16.345 16.9998 16.4686 16.9489 16.5613 16.8561L16.8561 16.5613C16.9487 16.4686 16.9998 16.345 16.9998 16.2132C16.9998 16.0814 16.9487 15.9578 16.8561 15.8651L13.4912 12.5001Z"
                        fill="#E23C3C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_256_3">
                        <rect
                          width="9"
                          height="9"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-17 text-midnight_text dark:text-CrystalSky font-medium">
                    Insights and Analytics
                  </span>
                </li>
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#FFE0E0" />
                    <g clipPath="url(#clip0_256_3)">
                      <path
                        d="M13.4912 12.5001L16.8562 9.13495C16.9488 9.04232 16.9999 8.91873 17 8.78695C17 8.6551 16.9489 8.53137 16.8562 8.43888L16.5613 8.14407C16.4686 8.05122 16.345 8.00037 16.2131 8.00037C16.0814 8.00037 15.9578 8.05122 15.8651 8.14407L12.5001 11.509L9.13502 8.14407C9.04246 8.05122 8.9188 8.00037 8.78695 8.00037C8.65524 8.00037 8.53159 8.05122 8.43902 8.14407L8.144 8.43888C7.952 8.63088 7.952 8.94317 8.144 9.13495L11.509 12.5001L8.144 15.865C8.05137 15.9578 8.00037 16.0814 8.00037 16.2132C8.00037 16.345 8.05137 16.4686 8.144 16.5613L8.43895 16.8561C8.53151 16.9489 8.65524 16.9998 8.78688 16.9998C8.91873 16.9998 9.04239 16.9489 9.13495 16.8561L12.5001 13.4911L15.865 16.8561C15.9578 16.9489 16.0813 16.9998 16.213 16.9998H16.2132C16.345 16.9998 16.4686 16.9489 16.5613 16.8561L16.8561 16.5613C16.9487 16.4686 16.9998 16.345 16.9998 16.2132C16.9998 16.0814 16.9487 15.9578 16.8561 15.8651L13.4912 12.5001Z"
                        fill="#E23C3C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_256_3">
                        <rect
                          width="9"
                          height="9"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-17 text-midnight_text dark:text-CrystalSky font-medium">
                    Live Chat Support
                  </span>
                </li>
              </ul>
              <Link
                href="#"
                className="btn mt-12 py-[0.75rem] rounded-[0.3125rem] text-center max-w-[10.4rem]"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-span-4 mb-8 lg:mb-0 shadow-[0_0px_30px_rgba(24,23,23,0.1)] rounded-[0.3125rem] bg-primary">
            <div className="flex flex-grow flex-col p-6 sm:p-8">
              <div className="space-y-2 pb-2">
                <span className="text-40 font-bold text-white">
                  $39
                  <span className="text-xl font-normal text-MistyBlue">
                    /Month
                  </span>
                </span>
              </div>
              <span className="text-3xl font-bold text-white">Platinum</span>
              <p className="text-white opacity-[0.75] text-base pt-6 border-b border-solid border-[#5FA4FC] pb-5">
                Sometimes chunks as necessary making this the first true
              </p>
              <ul className="flex-1 space-y-5 pt-6">
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#60A6FE" />
                    <g clipPath="url(#clip0_262_4)">
                      <path
                        d="M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_262_4">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(7 7)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-17 text-white font-medium">
                    Training Intake / Requests
                  </span>
                </li>
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#60A6FE" />
                    <g clipPath="url(#clip0_262_4)">
                      <path
                        d="M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_262_4">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(7 7)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-17 text-white font-medium">
                    Planning Board
                  </span>
                </li>
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#60A6FE" />
                    <g clipPath="url(#clip0_262_4)">
                      <path
                        d="M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_262_4">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(7 7)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-17 text-white font-medium">
                    Unlimited Collaborators
                  </span>
                </li>
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#60A6FE" />
                    <g clipPath="url(#clip0_262_4)">
                      <path
                        d="M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_262_4">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(7 7)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-17 text-white font-medium">
                    Insights and Analytics
                  </span>
                </li>
                <li className="flex items-center space-x-5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#60A6FE" />
                    <g clipPath="url(#clip0_262_4)">
                      <path
                        d="M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_262_4">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(7 7)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-17 text-white font-medium">
                    Live Chat Support
                  </span>
                </li>
              </ul>
              <Link
                href="#"
                className="btn_white mt-12 py-[0.7rem] rounded-[0.3125rem] text-center max-w-[10.5rem]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;