import Layout from "../../Components/Layout";
import AdminStyle from "../styles/admin.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Adminstration() {
  return (
    <Layout title="Admin">
      <div className="w-full flex flex-col gap-6">
        <section className={`${AdminStyle}   mx-8 `}>
          <div className={`${AdminStyle}  mt-8 w-[100%]`}>
            <h2 className="text-3xl text-gray-900 font-semibold leading-9 not-italic">
              Adminstration
            </h2>
            <p className="text-base text-gray-600 font-normal leading-6 not-italic">
              Manage your team and preferences here.
            </p>
          </div>

          <div
            className={`${AdminStyle.btn2}  pl-1 mt-6 flex flex-row items-start  isolate gap-2`}
          >
            <div className={`${AdminStyle}`}>
              <button
                className={`${AdminStyle.h}  font-semibold text-sm leading-5 text-gray-700 px-2 py-2`}
              >
                My details
              </button>
            </div>

            <div>
              <button
                className={`${AdminStyle.h}  font-semibold text-sm leading-5 text-gray-700 px-2 py-2`}
              >
                Password
              </button>
            </div>

            <div>
              <button
                className={`${AdminStyle.h}  font-semibold text-sm leading-5 text-gray-700 px-2 py-2`}
              >
                User Administration
              </button>
            </div>
          </div>
        </section>

        <section className={`${AdminStyle}    mx-8 `}>
          {/* this is sub header  */}
          <div className=" flex flex-row ">
            <div className={`${AdminStyle}`}>
              <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-700 leading-5">
                Users
              </button>
            </div>

            <div className={`${AdminStyle}`}>
              <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-500 leading-5">
                Roles
              </button>
            </div>
            <div className={`${AdminStyle}`}>
              <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-500 leading-5">
                Permissions
              </button>
            </div>
          </div>
        </section>

        {/* <section className={`${AdminStyle.b}  mx-8 `}>
         <h1>okhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhddddddddddddddddddddddddddddddhhhh</h1>

        </section> */}
        <section className={`${AdminStyle}  w-full `}>
          <div
            className={`${AdminStyle.table1} flex flex-col items-start p-0 bg-[#FFFFFF] w-full mx-8  `}
          >
            {/* this is main table container  */}
            <div
              className={` ${AdminStyle["borderBtm"]} ${AdminStyle[""]} border-btm flex flex-row gap-4  w-full  py-5 px-6`}
            >
              {/* this is card header  */}
              <div className={`${AdminStyle} flex flex-col  w-[60%] gap-1 `}>
                <div className={`${AdminStyle}  flex flex-row   gap-4`}>
                  <h2
                    className={`${AdminStyle} font-semibold text-lg leading-7 text-gray-900 not-italic`}
                  >
                    Team members
                  </h2>
                  <p
                    className={`${AdminStyle}  bg-blue-50 mix-blend-multiply rounded-2xl font-medium text-xs py-[3px] px-2 text-[#6941C6] leading-4 align-middle not-italic`}
                  >
                    48 users
                  </p>
                </div>
                <div className={`${AdminStyle}`}>
                  <p
                    className={`${AdminStyle} text-sm text-gray-600 font-normal not-italic`}
                  >
                    Manage your team members and their account permissions here.
                  </p>
                </div>
              </div>

              <div
                className={`${AdminStyle} w-[40%] flex flex-row gap-2 py-0.5 mb-2 `}
              >
                <div className={`${AdminStyle} `}>
                  <button
                    className={`${AdminStyle.downloadBtn} px-3 py-2  gap-1  download-btn flex flex-row  items-center justify-center box-border bg-[#FFFFFF]  text-sm font-semibold text-gray-700 not-italic`}
                  >
                    {/* <img className="" src={downloadIcon}></img> */}
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
                  <Link href="/AddUser"><button
                    className={`${AdminStyle["AddUserBtn"]} ${AdminStyle["downloadBtn"]}  px-3 py-2 gap-1 add-user-btn download-btn flex flex-row  items-center justify-center box-border bg-primary-600 bg-[#7F56D9]  text-sm font-semibold text-[#FFFFFF] not-italic`}
                  >
                    <Image
                      src="./assets/images/plus-icon.svg"
                      alt="My Image"
                      width={11}
                      height={11}
                    />
                    <p >Add user</p>
                  </button></Link>
                </div>
              </div>
            </div>

            <div
              className={`${AdminStyle.borderBtm} border-btm bg-[#FFFFFF] w-full`}
            >
              {/* <h className="text-[9px] text-gray-500">
                _________________________________________________________________________________________________________________________________________________________________________
              </h> */}
              {/* this is content container  */}
              <table className="w-full">
                <thead className={AdminStyle}>
                  <tr className="  flex flex-row ">
                    <th
                      scope="col"
                      className={`${AdminStyle} w-[20%]    table-hea border-btm  box-border items-center gap-3 px-6 py-2`}
                    >
                      <div className={`${AdminStyle}  flex flex-row   gap-3`}>
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
                      className={`${AdminStyle} w-[15%]    table-hea border-btm  box-border items-center gap-3 px-6 py-2`}
                    >
                      <div className=" flex flex-row   gap-1.5 ">
                        <p className="not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                          Status
                        </p>
                        {/* <img src={statusIcon}></img> */}
                        <Image
                          src="./assets/images/status-icon.svg"
                          alt="My Image"
                          width={9.33}
                          height={9.33}
                        />
                      </div>
                    </th>

                    <th
                      scope="col"
                      className={`${AdminStyle} w-[20%]    table-hea border-btm  box-border items-center gap-3 px-6 py-2`}
                    >
                      <div className=" flex flex-row   gap-3 ">
                        <p className="not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                          Email address
                        </p>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className={`${AdminStyle} w-[30%]    table-hea border-btm  box-border items-center gap-3 px-6 py-2`}
                    >
                      <div className=" flex flex-row   gap-3 ">
                        <p className="not-italic font-medium text-xs leading-[18px] text-gray-600 ">
                          Roles
                        </p>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className={`${AdminStyle} w-[15%]    table-hea border-btm  box-border items-center gap-3 px-6 py-2`}
                    >
                      <div className=" flex flex-row   gap-3 "></div>
                    </th>
                  </tr>
                </thead>

                <tbody className=" w-full flex flex-col">
                  <tr className=" flex flex-row w-full table-hea border-btm  box-border items-center   ">
                    {/* Row 1 */}

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] mt-0.5"
                      ></input>
                      <p className="not-italic font-medium text-sm text-gray-900">
                        Phoenix Baker
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row  w-[15%] py-6 `}
                    >
                      <Image
                        src="./assets/images/success-dot.svg"
                        alt="My Image"
                        width={6}
                        height={6}
                      />

                      <p
                        className={`${AdminStyle.activeBadge} not-italic font-medium text-xs text-[#027A48]`}
                      >
                        Active
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <p className="font-normal text-sm leading-5 text-gray-600">
                        phoenix@untitledui.com
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[30%] py-6 `}
                    >
                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>
                      <p
                        className={`${AdminStyle.activeBadge} active-badge not-italic font-medium text-xs text-[#027A48]`}
                      >
                        Viewer
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6  w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
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

                  <tr className=" flex flex-row w-full table-hea border-btm  box-border items-center   ">
                    {/* Row 1 */}

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] mt-0.5"
                      ></input>
                      <p className="not-italic font-medium text-sm text-gray-900">
                        Lana Steiner
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row  w-[15%] py-6 `}
                    >
                      <Image
                        src="./assets/images/offline-dot.svg"
                        alt="My Image"
                        width={6}
                        height={6}
                      />

                      <p
                        className={`${AdminStyle.offlineBadge} not-italic font-medium text-xs text-[#344054]`}
                      >
                        Offline
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <p className="font-normal text-sm leading-5 text-gray-600">
                        lana@untitledui.com
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[30%] py-6 `}
                    >
                      <p
                        className={`${AdminStyle.operationBadge} active-badge not-italic font-medium text-xs text-rose-700`}
                      >
                        Operations
                      </p>
                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>

                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>

                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>
                      
                    </td>

                    <td
                      className={`${AdminStyle} pl-6  w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
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

                  <tr className=" flex flex-row w-full table-hea border-btm  box-border items-center   ">
                    {/* Row 1 */}

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] mt-0.5"
                      ></input>
                      <p className="not-italic font-medium text-sm text-gray-900">
                        Demi Wilkinson
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row  w-[15%] py-6 `}
                    >
                      <Image
                        src="./assets/images/success-dot.svg"
                        alt="My Image"
                        width={6}
                        height={6}
                      />

                      <p
                        className={`${AdminStyle.activeBadge} not-italic font-medium text-xs text-[#027A48]`}
                      >
                        Active
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <p className="font-normal text-sm leading-5 text-gray-600">
                        lana@untitledui.com
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[30%] py-6 `}
                    >
                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Operator
                      </p>

                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>
                      <p
                        className={`${AdminStyle.activeBadge} active-badge not-italic font-medium text-xs text-[#027A48]`}
                      >
                        Viewer
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6  w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
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

                  <tr className=" flex flex-row w-full table-hea border-btm  box-border items-center   ">
                    {/* Row 1 */}

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] mt-0.5"
                      ></input>
                      <p className="not-italic font-medium text-sm text-gray-900">
                      Candice Wu
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row  w-[15%] py-6 `}
                    >
                      <Image
                        src="./assets/images/offline-dot.svg"
                        alt="My Image"
                        width={6}
                        height={6}
                      />

                      <p
                        className={`${AdminStyle.offlineBadge} not-italic font-medium text-xs text-[#344054]`}
                      >
                        Offline
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <p className="font-normal text-sm leading-5 text-gray-600">
                      candice@untitledui.com
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[30%] py-6 `}
                    >
                      <p
                        className={`${AdminStyle.operationBadge} active-badge not-italic font-medium text-xs text-rose-700`}
                      >
                        Operations
                      </p>
                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Operator
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6  w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
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

                  <tr className=" flex flex-row w-full table-hea border-btm  box-border items-center   ">
                    {/* Row 1 */}

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] mt-0.5"
                      ></input>
                      <p className="not-italic font-medium text-sm text-gray-900">
                      Drew Cano
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row  w-[15%] py-6 `}
                    >
                      <Image
                        src="./assets/images/success-dot.svg"
                        alt="My Image"
                        width={6}
                        height={6}
                      />

                       <p
                        className={`${AdminStyle.activeBadge} not-italic font-medium text-xs text-[#027A48]`}
                      >
                        Active
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <p className="font-normal text-sm leading-5 text-gray-600">
                        lana@untitledui.com
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[30%] py-6 `}
                    >
                       <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>
                      <p
                        className={`${AdminStyle.operationBadge} active-badge not-italic font-medium text-xs text-rose-700`}
                      >
                        Operations
                      </p>
                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6  w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
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

                  <tr className=" flex flex-row w-full table-hea border-btm  box-border items-center   ">
                    {/* Row 1 */}

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] mt-0.5"
                      ></input>
                      <p className="not-italic font-medium text-sm text-gray-900">
                      Orlando Diggs
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row  w-[15%] py-6 `}
                    >
                      <Image
                        src="./assets/images/success-dot.svg"
                        alt="My Image"
                        width={6}
                        height={6}
                      />

                      <p
                        className={`${AdminStyle.activeBadge} not-italic font-medium text-xs text-[#027A48]`}
                      >
                        Active
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[20%] py-6 `}
                    >
                      <p className="font-normal text-sm leading-5 text-gray-600">
                      orlando@untitledui.com
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6 flex flex-row   gap-3 w-[30%] py-6 `}
                    >
                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>

                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>

                      <p
                        className={`${AdminStyle.horizonBadge} horizon-badge not-italic font-medium text-xs text-blue-700`}
                      >
                        Horizon Admin
                      </p>
                      <p

                      
                        className={`${AdminStyle.activeBadge} active-badge not-italic font-medium text-xs text-prima`}
                      >
                        Viewer
                      </p>
                    </td>

                    <td
                      className={`${AdminStyle} pl-6  w-[15%] py-6 flex flex-row gap-7 items-center justify-center `}
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

            {/* Footer  */}
            <div className={`${AdminStyle.borderBtm} border-btm w-full h-full py-2`}>
           <div className="  flex flex-row justify-between py-5 px-6">
           <div className="">
                <button className={`${AdminStyle.paginationBtn} px-3 py-2 gap-2  download-btn flex flex-row  items-center justify-center box-border bg-[#FFFFFF]  text-sm font-semibold text-gray-700 not-italic`}>
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
              </div> <div className="px-3 py-2 ">
              <button>6</button>
              </div>
              
            </div>
            <div className="">
                <button className={`${AdminStyle.paginationBtn} px-3 py-2 gap-2  download-btn flex flex-row  items-center justify-center box-border bg-[#FFFFFF]  text-sm font-semibold text-gray-700 not-italic`}>
                 
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
      </div>
    </Layout>
  );
}
