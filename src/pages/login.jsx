import React from "react";
import Link from "next/link";
import LoginStyle from "../styles/Login.module.css";
import Layout from "../../Components/Layout";
import Image from "next/image";
export default function Login() {
  return (
    <div
      className={`${LoginStyle} w-full flex flex-row items-center bg-[#FFFFFF]`}
    >
      <section
        className={`${LoginStyle} w-[50%] flex flex-col justify-between items-center gap-[60px]`}
      >
        {/* Form container  */}
        <section
          className={`${LoginStyle} w-full flex flex-row items-start p-8`}
        >
          {/* Header section  */}
          <div className={`${LoginStyle} flex flex-row items-center gap-2  `}>
            <div className=" ">
              {/* logo-Image  */}
              <Image
                src="./assets/images/Content.svg"
                alt="My Image"
                width={32}
                height={32}
              />
            </div>
            <div className={`${LoginStyle} mt-1 pl-[3px]`}>
              {/* Logo-title  */}
              <p className="not-italic font-semibold text-[#000000]">Horizon</p>
            </div>
          </div>
        </section>

        <section
          className={`${LoginStyle} w-full flex flex-col items-cente px-[140px] `}
        >
          {/* Form section   */}
          <div className={`${LoginStyle} flex flex-col items-cente gap-8 `}>
            {/* Form div  */}
            <div className={`${LoginStyle} w-full`}>
              <h1 className="not-italic font-semibold text-3xl text-gray-900">
                Login
              </h1>
            </div>

            <div className={`${LoginStyle}`}>
              {/* Form Container  */}
              <form className="w-full flex flex-col gap-5 ">
                <div className="flex flex-col gap-[6px] w-full ">
                  <div className={LoginStyle}>
                    <label
                      className="text-sm font-medium text-gray-700 "
                      htmlFor="username"
                    >
                      Email*
                    </label>
                  </div>
                  <div className={`${LoginStyle} w-full`}>
                    <input
                      className={`${LoginStyle.input_conatiner} w-full placeholder:font-normal text-base text-gray-500`}
                      id="username"
                      type="text"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[6px] ">
                  <div className={LoginStyle}>
                    <label
                      className="text-sm font-medium text-gray-700 "
                      htmlFor="password"
                    >
                      Password*
                    </label>
                  </div>
                  <div className={LoginStyle}>
                    <input
                      className={`${LoginStyle.input_conatiner} w-full placeholder:font-normal text-base text-gray-500`}
                      id="username"
                      type="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div>
                    <h1 className="not-italic font-normal text-sm text-gray-600">
                      Must be at least 8 characters.
                    </h1>
                  </div>
                </div>

                <div className={`${LoginStyle.btn}`}>
                  <button>
                    <p className="not-italic font-semibold text-base text-[#FFFFFF]">
                      Login
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section
          className={`${LoginStyle} w-full flex flex-row justify-between p-8`}
        >
          {/* Footer section  */}
          <div>
            <h1 className="not-italic font-normal text-sm text-gray-600">
              © Tachyon Security
            </h1>
          </div>
          <div className="flex flex-row items-center gap-[6px]">
            <div>
              <Image
                src="./assets/images/email-Icon.svg"
                width={13}
                height={10}
              />
            </div>
            <div>
              <h1 className="not-italic font-normal text-sm text-gray-600">
                help@tachyonsecurity.com
              </h1>
            </div>
          </div>
        </section>
      </section>

      <section className={`${LoginStyle} bg-gray-50 p-2 `}>
        <div className={`${LoginStyle.bgimage} relative`}>
          <div className={`${LoginStyle.attributionCard} w-full absolute`}>
            <div>
              <p className="not-italic font-semibold text-xl text-[#FFFFFF]">
                “Horizon has saved us thousands of hours of work. We’re able to
                spin up projects and features faster.”
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <div
                className={`${LoginStyle} w-full flex flex-row items-start justify-between `}
              >
                <div className="w-[70%]">
                  <h1 className="not-italic font-semibold text-3xl text-[#FFFFFF]">
                    Alisa Hester
                  </h1>
                </div>
                <div
                  className={`${LoginStyle} flex flex-row items-start gap-1`}
                >
                  <Image src="/assets/images/star.svg" width="20" height="20" />
                  <Image src="/assets/images/star.svg" width="20" height="20" />
                  <Image src="/assets/images/star.svg" width="20" height="20" />
                  <Image src="/assets/images/star.svg" width="20" height="20" />
                  <Image src="/assets/images/star.svg" width="20" height="20" />
                </div>
              </div>


              <div
                className={`${LoginStyle} w-full flex flex-row items-start justify-between `}
              >
                <div className={`${LoginStyle} w-[70%] flex flex-col gap-1`}>
                <div>
                    <p className="not-italic font-semibold text-lg text-[#FFFFFF]">
                      SOC Manager,
                    </p>
                  </div>
                  <div>
                    <p className="not-italic font-medium text-base text-[#FFFFFF]">
                      Manufacturing company
                    </p>
                  </div>
                </div>
                <div
                  className={`${LoginStyle} flex flex-row items-start gap-1 mt-3`}
                >
                   <div className={`${LoginStyle} flex flex-row  gap-8 `}>
                  <div className={`${LoginStyle.testiomonial}`}>
                    <button><Image src="/assets/images/testiomon-left-arrow.svg" width="14" height="14" /></button>
                  </div>
                  <div className={`${LoginStyle.testiomonial}`}>
                  <button className=""><Image src="/assets/images/testiomon-right-arrow.svg" width="14" height="14" /></button>
                  </div>
                </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
