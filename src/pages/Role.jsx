import Layout from "../../Components/Layout";
import Image from "next/image";
import { useState } from "react";
import RoleModal from "../../Components/RoleModal";
import Link from "next/link";

export default function Role() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout title="Role">
      <section className="  flex flex-col items-start pt-8 gap-3">
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
              <Link href="/Adminstration">
                <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-500 leading-5">
                  Users
                </button>
              </Link>
            </div>

            <div className="">
              <Link href="/Role">
                <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-700 leading-5">
                  Roles
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className={`  w-full px-[30px] py-6 `}>
          <div
            className={`table  flex-col items-start p-0 bg-[#FFFFFF] w-full  `}
          >
            {/* this is main table container  */}
            <div
              className={`  border_Bottom flex flex-row justify-end gap-4  w-full  py-5 px-6`}
            >
              {/* this is card header  */}
              <div className={` flex flex-col  gap-1 w-full `}>
                <div className=" flex flex-row   gap-4">
                  <h2
                    className={` font-semibold text-lg leading-7 text-gray-900 not-italic`}
                  >
                    Roles
                  </h2>
                  <p
                    className={` bg-blue-50 mix-blend-multiply rounded-2xl font-medium text-xs pt-[6px] px-2 text-[#6941C6] leading-4 align-middle not-italic`}
                  >
                    8 Roles
                  </p>
                </div>

                <div className="">
                  <p
                    className={` text-sm text-gray-600 font-normal not-italic`}
                  >
                    Manage your user administration roles here
                  </p>
                </div>
              </div>

              <div className={`  w-full flex flex-row justify-end gap-2 pt-2 `}>
                <div className={` `}>
                  <button
                    className={`downloadBtn px-3 py-2  gap-1  download-btn flex flex-row  items-center justify-center box-border bg-[#FFFFFF]  text-sm font-semibold text-gray-700 not-italic`}
                  >
                    <Image
                      src="./assets/images/download-icon.svg"
                      alt="My Image"
                      width={16}
                      height={16}
                    />
                    <p>Download CSV</p>
                  </button>
                </div>

                <div className="pb-2">
                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className={`AddUserBtn downloadBtn  px-3 py-2 gap-1 add-user-btn download-btn flex flex-row  items-center justify-center box-border bg-primary-600 bg-[#7F56D9]  text-sm font-semibold text-[#FFFFFF] not-italic`}
                  >
                    <Image
                      src="./assets/images/plus-icon.svg"
                      alt="My Image"
                      width={11}
                      height={11}
                    />
                    <p>Add Role</p>
                  </button>
                </div>
              </div>
            </div>

            <div className={`border_Bottom border-btm bg-[#FFFFFF] w-full`}>
              {/* <h className="text-[9px] text-gray-500">
                _________________________________________________________________________________________________________________________________________________________________________
              </h> */}
              {/* this is content container  */}
              <table className="w-full">
                <thead className="border_Bottom">
                  <tr className="  flex flex-row ">
                    <th
                      scope="col"
                      className={` w-[35%]  box-border items-center gap-3 px-6 py-2`}
                    >
                      <div className={` flex flex-row   gap-3`}>
                        <input
                          type="checkbox"
                          className="w-[16px] h-[16px] mt-0.5"
                        ></input>
                        <p className="not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                          Name
                        </p>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className={`  w-[35%]  box-border items-center gap-3 px-6 py-2`}
                    >
                      <p className="not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                        Description
                      </p>
                    </th>

                    <th
                      scope="col"
                      className={` w-[15%]   box-border items-center gap-3 px-6 py-2`}
                    >
                      <p className="not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                        Users
                      </p>
                    </th>

                    <th
                      scope="col"
                      className={` w-[15%]  box-border items-center gap-3 px-6 py-2`}
                    >
                      <div className={` flex flex-row justify-center  gap-3`}>
                        <p className="not-italic font-medium text-xs leading-[18px] text-gray-600 "></p>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className=" w-full flex flex-col">
                  <tr
                    className={`border_Bottom flex flex-row w-full  items-center   `}
                  >
                    {/* Row 1 */}

                    <td
                      className={`   pl-6 flex flex-row   gap-3 w-[35%] py-6 `}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] mt-0.5"
                      ></input>
                      <p className="not-italic font-medium text-sm text-gray-900">
                        Administrator
                      </p>
                    </td>

                    <td
                      className={` pl-6  w-[35%]  py-6 flex flex-row gap-7 items-center justify-center `}
                    >
                      <p className="not-italic font-normal text-sm text-gray-600">
                        This is an administrator account
                      </p>
                    </td>

                    <td
                      className={` w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
                    >
                      <p className="not-italic font-normal text-sm text-gray-600">
                        5 Users
                      </p>
                    </td>

                    <td
                      className={` w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
                    >
                      <button>
                        <Image
                          src="./assets/images/delete-icon.svg"
                          alt="My Image"
                          width={15}
                          height={15}
                        />
                      </button>
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

                  <tr
                    className={`border_Bottom flex flex-row w-full  items-center   `}
                  >
                    {/* Row 1 */}

                    <td
                      className={`   pl-6 flex flex-row   gap-3 w-[35%] py-6 `}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] mt-0.5"
                      ></input>
                      <p className="not-italic font-medium text-sm text-gray-900">
                        Custom Role
                      </p>
                    </td>

                    <td
                      className={` pl-6  w-[35%]  py-6 flex flex-row gap-7 items-center justify-center `}
                    >
                      <p className="not-italic font-normal text-sm text-gray-600">
                        This is an Custom-role account
                      </p>
                    </td>

                    <td
                      className={` w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
                    >
                      <p className="not-italic font-normal text-sm text-gray-600">
                        1 User
                      </p>
                    </td>

                    <td
                      className={` w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
                    >
                      <button>
                        <Image
                          src="./assets/images/delete-icon.svg"
                          alt="My Image"
                          width={15}
                          height={15}
                        />
                      </button>
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

                  <tr
                    className={`border_Bottom flex flex-row w-full  items-center   `}
                  >
                    {/* Row 1 */}

                    <td
                      className={`   pl-6 flex flex-row   gap-3 w-[35%] py-6 `}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] mt-0.5"
                      ></input>
                      <p className="not-italic font-normal text-sm text-gray-900">
                        Read-only
                      </p>
                    </td>

                    <td
                      className={` pl-6  w-[35%]  py-6 flex flex-row gap-7 items-center justify-center `}
                    >
                      <p className="not-italic font-normal text-sm text-gray-600">
                        This is a Read-only account
                      </p>
                    </td>

                    <td
                      className={` w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
                    >
                      <p className="not-italic font-normal text-sm text-gray-600">
                        0 Users
                      </p>
                    </td>

                    <td
                      className={` w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
                    >
                      <button>
                        <Image
                          src="./assets/images/delete-icon.svg"
                          alt="My Image"
                          width={15}
                          height={15}
                        />
                      </button>
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

            <div className="flex flex-row justify-between   w-full  py-5 px-6">
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
              <div className="flex flex-row not-italic font-medium text-sm text-center text-gray-800">
                <div className="px-3 py-2  ">
                  <button>1</button>
                </div>
                <div className="px-3 py-2 ">
                  <button>2</button>
                </div>
                <div className="px-3 py-2 ">
                  <button>3</button>
                </div>
                <div className="px-3 py-2 ">
                  <button>4</button>
                </div>
                <div className="px-3 py-2 ">
                  <button>5</button>
                </div>{" "}
                <div className="px-3 py-2 ">
                  <button>6</button>
                </div>
              </div>
              <div className="">
                <button
                  className={`paginationBtn px-3 py-2 gap-2  download-btn flex flex-row  items-center justify-center box-border bg-[#FFFFFF]  text-sm font-semibold text-gray-700 not-italic`}
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
        </section>

        <RoleModal show={showModal} onClose={() => setShowModal(false)}>
          <div className=" w-full flex flex-col gap-8 px-5 pt-2 ">
            <section className={` flex flex-row px-4 py-5  gap-3 w-full`}>
              {/* Nav Section  */}
              <div classname="">
                <button className={`Modalbtn  px-[12px] py-1  `}>
                  {/* <img src={addUserIcon} alt=""></img> */}
                  <Image
                    src="./assets/images/Add-user-icon.svg"
                    alt="My Image"
                    width={20}
                    height={18}
                  />
                </button>
              </div>

              <div className={` flex flex-col  w-full `}>
                <div className={` flex flex-row justify-between w-full`}>
                  <p className="not-italic font-semibold text-gray-900 text-lg">
                    Permissions
                  </p>

                  <button
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <Image
                      src="/assets/images/x-icon.svg"
                      width="12"
                      height="12"
                    ></Image>{" "}
                  </button>
                </div>
                <div classname="w-full">
                  <p className="not-italic font-normal text-sm text-gray-600">
                    Add permissions to a role
                  </p>
                </div>
              </div>
              {/* <p>--------------------------------------------------------</p> */}
            </section>

            <section className=" flex flex-col items-start gap-1 px-6">
              <div>
                <label
                  className="text-sm font-medium text-gray-700 pb-[6px]"
                  htmlFor="username"
                >
                  Name*
                </label>
              </div>
              <div classname="w-full">
                <input
                  className="input_conatiner "
                  name="firstName"
                  type="text"
                  // value={firstName}
                  // onChange={(e)=>{setFirstName(e.target.value)}}
                  required
                />
              </div>

              {/* this is content Container  */}
            </section>

            <section className="w-full px-5 ">
              {/* this is table container */}
              <div className=" w-full table">
                <table className="w-full">
                  <thead className="w-full bg-[#F9FAFB] ">
                    <tr className=" border_Bottom ">
                      <th
                        scope="col"
                        className={` box-border items-center w-[80%] `}
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
                              Feature
                            </p>
                          </div>
                        </div>
                      </th>

                      <th scope="col" className={` box-border  w-[10%] `}>
                        <p className=" not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                          Create
                        </p>
                      </th>
                      <th scope="col" className={` box-border  w-[10%] `}>
                        <p className=" not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                          Delete
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border_Bottom">
                      <td
                        className={` pl-5 w-[80%] py- not-italic font-medium text-sm text-gray-900 `}
                      >
                        Administration
                      </td>

                      <td
                        className={` w-[10%] py-6 not-italic font-medium text-sm text-gray-900 `}
                      >
                        <div className="  flex flex-row justify-center">
                          <input
                            type="checkbox"
                            className="  w-[16px] h-[16px] "
                          ></input>
                        </div>
                      </td>
                      <td
                        className={` w-[10%] py-6 not-italic font-medium text-sm text-gray-900 `}
                      >
                        <div className="  flex flex-row justify-center">
                          <input
                            type="checkbox"
                            className="  w-[16px] h-[16px] "
                          ></input>
                        </div>
                      </td>
                    </tr>

                    <tr className="border_Bottom">
                      <td
                        className={` pl-5 w-[80%] py- not-italic font-medium text-sm text-gray-900 `}
                      >
                        Home
                      </td>

                      <td
                        className={` w-[10%] py-6 not-italic font-medium text-sm text-gray-900 `}
                      >
                        <div className="  flex flex-row justify-center">
                          <input
                            type="checkbox"
                            className="  w-[16px] h-[16px] "
                          ></input>
                        </div>
                      </td>
                      <td
                        className={` w-[10%] py-6 not-italic font-medium text-sm text-gray-900 `}
                      >
                        <div className="  flex flex-row justify-center">
                          <input
                            type="checkbox"
                            className="  w-[16px] h-[16px] "
                          ></input>
                        </div>
                      </td>
                    </tr>

                    <tr className="border_Bottom">
                      <td
                        className={` pl-5 w-[80%] py- not-italic font-medium text-sm text-gray-900 `}
                      >
                        Home/Users
                      </td>

                      <td
                        className={` w-[10%] py-6 not-italic font-medium text-sm text-gray-900 `}
                      >
                        <div className="  flex flex-row justify-center">
                          <input
                            type="checkbox"
                            className="  w-[16px] h-[16px] "
                          ></input>
                        </div>
                      </td>
                      <td
                        className={` w-[10%] py-6 not-italic font-medium text-sm text-gray-900 `}
                      >
                        <div className="  flex flex-row justify-center">
                          <input
                            type="checkbox"
                            className="  w-[16px] h-[16px] "
                          ></input>
                        </div>
                      </td>
                    </tr>

                    <tr className="border_Bottom">
                      <td
                        className={` pl-5 w-[80%] py- not-italic font-medium text-sm text-gray-900 `}
                      >
                        Dashboard
                      </td>

                      <td
                        className={` w-[10%] py-6 not-italic font-medium text-sm text-gray-900 `}
                      >
                        <div className="  flex flex-row justify-center">
                          <input
                            type="checkbox"
                            className="  w-[16px] h-[16px] "
                          ></input>
                        </div>
                      </td>
                      <td
                        className={` w-[10%] py-6 not-italic font-medium text-sm text-gray-900 `}
                      >
                        <div className="  flex flex-row justify-center">
                          <input
                            type="checkbox"
                            className="  w-[16px] h-[16px] "
                          ></input>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="py-8 flex flex-col gap-7 ">
                {/* this is footer  */}
                <div className="border_Bottom"></div>
                <div className="px-6 flex flex-row gap-3 justify-start ">
                  <div className=" w-full  ">
                    <button className="btn2 w-full flex flex-row justify-center py-2 not-italic font-semibold text-base text-gray-700">
                      Cancel
                    </button>
                  </div>
                  <div className=" w-full">
                    <button className="btn2 w-full flex flex-row justify-center py-2 bg-[#7F56D9] not-italic font-semibold text-base text-[#FFFFFF]">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </RoleModal>
      </section>
    </Layout>
  );
}
