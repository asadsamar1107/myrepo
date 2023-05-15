import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoginStyle from "../styles/Login.module.css";
import * as Yup from "yup";
const FormSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required*")
    .email("Please enter a valid email*"),


  password: Yup.string().required("This field is required*"),
  // .password("password must be atleast 8 characters"),
});

export default function Signup() {
  const handleSubmit = (values) => {
    //     if (values.email == "tachyon@123" && values.password == "1234") {
    //       router.push("/Adminstration");
    //     } else {
    //       alert("email or password may be incorrect!");
    //     }
    //     console.log(values.email);
    //     console.log(values.password);
    //   };
  };

  return (
    <div className="flex flex-row  w-full h-full items-center bg-[#FFFFFF] mb-[60px]  ">
      <section className="w-[50%] h-full flex flex-col justify-between items-center gap-[60px]    ">
        {/* Form Container  */}
        <section className={`w-full flex flex-row items-start p-8 `}>
          {/* Header section  */}
          <div className={` flex flex-row items-center gap-2  `}>
            <div className=" ">
              {/* logo-Image  */}
              <Image
                src="./assets/images/Content.svg"
                alt="My Image"
                width={32}
                height={32}
              />
            </div>
            <div className={` mt-1 pl-[3px]`}>
              {/* Logo-title  */}
              <p className="not-italic font-semibold text-[#000000]">Horizon</p>
            </div>
          </div>
        </section>

        <section className={` w-full flex flex-col items-cente px-[140px]   `}>
          {/* Form section   */}
          <div className={` flex flex-col items-cente gap-8  `}>
            {/* Form div  */}
            <div className={` w-full `}>
              <h1 className="not-italic font-semibold text-3xl text-gray-900">
                Login
              </h1>
            </div>

            <div className="">
              {/* Form Container  */}
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  fullName: "",
                  confirm_password: "",
                  phoneNumber: "",
                }}
                validationSchema={FormSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form className="w-full flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-[4px] w-full  ">
                      <div className="">
                        <label
                          className="text-sm font-medium text-gray-700"
                          htmlFor="name"
                        >
                          Full Name*
                        </label>
                      </div>
                      <div className="">
                        <Field
                          className={`input_conatiner w-full placeholder:font-normal text-base text-gray-500`}
                          name="full_Name"
                          id="full_Name"
                          placeholder="Enter your full Name"
                        />
                      </div>
                      <div className="text-red-500 text-xs ">
                        <ErrorMessage name="name" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-[4px] w-full ">
                      <div className="">
                        <label
                          className="text-sm font-medium text-gray-700"
                          htmlFor="name"
                        >
                          Email*
                        </label>
                      </div>
                      <div className="">
                        <Field
                          className={`input_conatiner w-full placeholder:font-normal text-base text-gray-500`}
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="text-red-500 text-xs ">
                        <ErrorMessage name="email" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-[4px] w-full ">
                      <div className="">
                        <label
                          className="text-sm font-medium text-gray-700 mb-2"
                          htmlFor="password"
                        >
                          Password*
                        </label>
                      </div>
                      <div className="">
                        <Field
                          type="password"
                          className={`input_conatiner w-full placeholder:font-normal text-base text-gray-500`}
                          name="password"
                          id="password"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="text-red-500 text-xs ">
                        <ErrorMessage name="password" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-[4px] w-full ">
                      <div className="">
                        <label
                          className="text-sm font-medium text-gray-700 mb-2"
                          htmlFor="password"
                        >
                          Confirm Password*
                        </label>
                      </div>
                      <div className="">
                        <Field
                          type="password"
                          className={`input_conatiner w-full placeholder:font-normal text-base text-gray-500`}
                          name="confirm_password"
                          id="confirm_password"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="text-red-500 text-xs ">
                        <ErrorMessage name="confirm_password" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-[4px] w-full ">
                      <div className="">
                        <label
                          className="text-sm font-medium text-gray-700 mb-2"
                          htmlFor="password"
                        >
                          Phone Number*
                        </label>
                      </div>
                      <div className="">
                        <Field
                          type="phone_number"
                          className={`input_conatiner w-full placeholder:font-normal text-base text-gray-500`}
                          name="phone_number"
                          id="phone_number"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                      <div className="text-red-500 text-xs ">
                        <ErrorMessage name="phone_number" />
                      </div>
                    </div>

                    <div className="login_btn mt-6">
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
      </section>

      <section className={`${LoginStyle} bg-gray-50   `}>
        <div className={`${LoginStyle.bgimage} absolute top-0 w-[50%] h-full `}>
          <div className={`${LoginStyle.attributionCard} top-[60%] w-full absolute`}>
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
