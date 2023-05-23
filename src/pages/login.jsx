import React from "react";
import LoginStyle from "../styles/Login.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Adminstration } from "@/pages/Adminstration";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const FormSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("Please enter a valid email"),

  password: Yup.string().required("This field is required"),
  // .password("password must be atleast 8 characters"),
});

export default function Login() {
  const router = useRouter();
  const handleSubmit = (values) => {
    if (values.email == "jeeshan@123" && values.password == "1234") {
      router.push("/Adminstration");
    } else {
      alert("email or password may be incorrect!");
    }
    console.log(values.email);
    console.log(values.password);
  };

  return (
    <div
      className={` w-full flex flex-row  bg-[#FFFFFF] h-screen  `}
    >
      <main
        className="flex flex-col gap-[13%] w-[50%] "
      >
        {/* Form container  */}
        <header
          className={`${LoginStyle} w-full flex flex-row items-start p-8  mt-[5%]`}
        >
          {/* Header section  */}
          <div className={`${LoginStyle} flex flex-row items-center gap-2 `}>
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
        </header>

        <section
          className={`${LoginStyle} w-full flex flex-col items-cente px-[140px]  h-screen  `}
        >
          {/* Form section   */}
          <div className={`${LoginStyle} flex flex-col items-cente gap-8 `}>
            {/* Form div  */}
            <div className={`${LoginStyle} w-full  h-full`}>
              <h1 className="not-italic font-semibold text-3xl text-gray-900">
                Login
              </h1>
            </div>

            <div className=" w-full h-full">
              {/* Form Container  */}
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={FormSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form className="w-full flex flex-col gap-4 h-full">
                    <div className="flex flex-col gap-[6px] w-full h-full">
                      <div className="h-full">
                        <label
                          className="text-sm font-medium text-gray-700"
                          htmlFor="name"
                        >
                          Email*
                        </label>
                      </div>
                      <div className={LoginStyle}>
                        <Field
                          className={`${LoginStyle.input_conatiner} w-full h- placeholder:font-normal text-base text-gray-500`}
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="text-red-500 text-xs ">
                        <ErrorMessage name="email" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-[6px] w-full">
                      <div className={LoginStyle}>
                        <label
                          className="text-sm font-medium text-gray-700 mb-2"
                          htmlFor="password"
                        >
                          Password*
                        </label>
                      </div>
                      <div className={LoginStyle}>
                        <Field
                          type="password"
                          className={`${LoginStyle.input_conatiner} w-full placeholder:font-normal text-base text-gray-500`}
                          name="password"
                          id="password"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="text-red-500 text-xs ">
                        <ErrorMessage name="password" />
                      </div>
                    </div>

                    <div className={`${LoginStyle.btn}`}>
                      <input
                        type="submit"
                        className="not-italic font-semibold text-base text-[#FFFFFF] cursor-pointer"
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>

        <footer
          className={`${LoginStyle} w-full flex flex-row justify-between p-8   mb-[5%]  `}
        >
          {/* Footer section  */}
          <div className="flex flex-row items-center gap-[6px] h-full ">
            {/* <h1 className="not-italic font-normal text-sm text-gray-600 h-full r">
              © Tachyon Security
            </h1> */}
            <p className="not-italic font-normal text-sm text-gray-600">© Tachyon Security</p>
          </div>
          <div className="flex flex-row items-center gap-[6px] h-full ">
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
        </footer>

      </main>

      <section className={`${LoginStyle} bg-gray-50 p-2  h-screen`}>
        <div className={`${LoginStyle.bgimage}  absolute top-0 w-[50%] h-full`}>
          <div className={`${LoginStyle.attributionCard} bottom-0 w-full absolute`}>
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
                      <button>
                        <Image
                          src="/assets/images/testiomon-left-arrow.svg"
                          width="14"
                          height="14"
                        />
                      </button>
                    </div>
                    <div className={`${LoginStyle.testiomonial}`}>
                      <button className="">
                        <Image
                          src="/assets/images/testiomon-right-arrow.svg"
                          width="14"
                          height="14"
                        />
                      </button>
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
