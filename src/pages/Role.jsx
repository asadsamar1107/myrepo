import Layout from "../../Components/Layout";
import Image from "next/image";

export default function Role() {
  return (
    <Layout title="Role">
      <section className="  flex flex-col items-start pt-8 gap-6">
        {/* Main Section  */}
        <section className={`px-8`}>
          <div className={` w-[100%]`}>
            <h2 className="text-3xl text-gray-900 font-semibold leading-9 not-italic">
              Adminstration
            </h2>
            <p className="text-base text-gray-600 font-normal leading-6 not-italic">
              Manage your team and preferences here.
            </p>
          </div>

          <div
            className={`btn2  pl-1 mt-6 flex flex-row items-start  isolate gap-2`}
          >
            <div className="">
              <button
                className={`border_Right font-semibold text-sm leading-5 text-gray-700 px-4 py-2`}
              >
                My details
              </button>
            </div>

            <div>
              <button
                className={`border_Right  font-semibold text-sm leading-5 text-gray-700 px-4 py-2`}
              >
                Password
              </button>
            </div>

            <div>
              <button
                className={` font-semibold text-sm leading-5 text-gray-800 px-4 py-2`}
              >
                User Administration
              </button>
            </div>
          </div>
        </section>

        <section className=" w-full flex flex-col items-start p-0 gap-6  px-8 ">
          {/* this is sub header  */}
          <div className="  w-full flex flex-row items-start gap-2">
            <div className="">
              <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-500 leading-5">
                Users
              </button>
            </div>

            <div className="">
              <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-700 leading-5">
                Roles
              </button>
            </div>
          </div>
        </section>

        <section className=" w-full px-8">
          <div className="table w-full">
            <div className=" flex flex-col items-start gap-5">
              {/* this is card Header  */}
              <div className="flex flex-col items-start pt-5 pl-5 w-full">
                <div className="g w-full">
                  <h2
                    className={`font-semibold text-lg leading-7 text-gray-900 not-italic`}
                  >
                    Roles
                  </h2>
                </div>
                <div className="g w-full">
                  <p className={`text-sm text-gray-600 font-normal not-italic`}>
                    Manage your team members and their account permissions here.
                  </p>
                </div>
              </div>

              <div className="border_Bottom w-full"></div>
            </div>
            <div className=" flex flex-col items-start   w-full ">
              {/* this is table container */}
              <div className=" w-full">
                <table className="w-full">
                  <thead className=" ">
                    <tr className=" border_Bottom ">
                      <th
                        scope="col"
                        className={` box-border items-center w-[60%]`}
                      >
                        <div className={`  flex flex-row py-3  gap-2 pl-5`}>
                          <div className="  flex flex-row justify-center">
                            <input
                              type="checkbox"
                              className="  w-[16px] h-[16px] "
                            ></input>
                          </div>
                          <div className="flex flex-row justify-center ">
                            <p className=" not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                              Name
                            </p>
                          </div>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className={` table-hea border-btm  box-border items-center w-[20%] `}
                      >
                        <div className={`  flex flex-row py-3  gap-2`}>
                          {/* <div className="  flex flex-row justify-center">
                       <input
                          type="checkbox"
                          className="  w-[16px] h-[16px] "
                        ></input>
                       </div>
                       <div className="flex flex-row justify-center ">
                       <p className=" not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                          Name
                        </p>
                       </div> */}
                        </div>
                      </th>

                      <th
                        scope="col"
                        className={`  table-hea border-btm  box-border items-center w-`}
                      >
                        <div className={``}>
                          
                          <div className=" py-3 flex flex-row justify-center ">
                            <p className=" not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                              Permissions
                            </p>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border_Bottom">
                      <td className={` pl-5 w-[60%] py-6 `}>
                        <p className="not-italic font-medium text-sm text-gray-900">
                          Administrator
                        </p>
                      </td>

                      <td className={` pl-5 w-[20%] py-6 `}>
                        <p className="not-italic font-medium text-sm text-gray-900"></p>
                      </td>

                      <td className={`flex flex-row justify-center  py-6 `}>
                        <button>
                          <Image
                            src="./assets/images/edit-icon.svg"
                            alt="My Image"
                            width={16}
                            height={16}
                          />
                        </button>
                      </td>
                    </tr>

                    <tr className="border_Bottom bg-gray-50">
                      <td className={` pl-5 w-[60%] py-6 `}>
                        <div className={`  flex flex-row  gap-2 `}>
                          <div className="  flex flex-row justify-center">
                            <input
                              type="checkbox"
                              className="  w-[16px] h-[16px] "
                            ></input>
                          </div>
                          <div className="flex flex-row justify-center ">
                            <p className=" not-italic font-medium text-xs leading-[18px] text-gray-900 ">
                              Horizon Read Only
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className={` pl-5 w-[20%] py-6 `}>
                        <p className="not-italic font-medium text-sm text-gray-900"></p>
                      </td>

                      <td className={`flex flex-row justify-center  py-6 `}>
                        <button>
                          <Image
                            src="./assets/images/edit-icon.svg"
                            alt="My Image"
                            width={16}
                            height={16}
                          />
                        </button>
                      </td>
                    </tr>

                    <tr className="border_Bottom ">
                      <td className={` pl-5 w-[60%] py-6 `}>
                        <div className={`  flex flex-row  gap-2 `}>
                          <div className="  flex flex-row justify-center">
                            <input
                              type="checkbox"
                              className="  w-[16px] h-[16px] "
                            ></input>
                          </div>
                          <div className="flex flex-row justify-center ">
                            <p className=" not-italic font-medium text-xs leading-[18px] text-gray-900 ">
                              Horizon Read Write
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className={` pl-5 w-[20%] py-6 `}>
                        <p className="not-italic font-medium text-sm text-gray-900"></p>
                      </td>

                      <td className={`flex flex-row justify-center  py-6 `}>
                        <button>
                          <Image
                            src="./assets/images/edit-icon.svg"
                            alt="My Image"
                            width={16}
                            height={16}
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="py-5 pl-5 pr-10">
              {/* this is footer  */}
              
                <div className="  flex flex-row justify-between ">
                  <div className="">
                    <button
                      className={`paginationBtn px-3 py-2 gap-2  download-btn flex flex-row  items-center justify-center box-border bg-[#FFFFFF]  text-sm font-semibold text-gray-700 not-italic`}
                    >
                      <Image
                        src="./assets/images/left-arrow.svg"
                        alt="My Image"
                        width={11}
                        height={11}
                      />
                      <p> Previous</p>
                    </button>
                  </div>
                 
                  <div className="">
                    <button
                      className={`paginationBtn py-2 gap-2  download-btn flex flex-row  items-center justify-center box-border bg-[#FFFFFF]  text-sm font-semibold text-gray-700 not-italic`}
                    >
                      <p> Next</p>
                      <Image
                        src="./assets/images/right-arrow.svg"
                        alt="My Image"
                        width={11}
                        height={11}
                      />
                    </button>
                  </div>
                </div>
              
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}
