import Layout from "../../Components/Layout";
import AdminStyle from "../styles/admin.module.css";
import Image from "next/image";
import Modal from "../../Components/AddUserModal";
import AddUserStyle from "../styles/AddUser.module.css"
import { useState } from "react";
import Link from "next/link";
export default function Adminstration() {

const [showModal,setShowModal]=useState(false);
const [selectValue,setSelectValue]=useState("")
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("")


const handleFormSubmit=(e)=>
{
e.preventDefault();
console.log("okay")
console.log(firstName)
console.log(lastName)
console.log(email)
console.log(selectValue)

}


  return (
    <Layout title="Admin">
      <section className="flex flex-col items-start pt-8 gap-6">
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
             <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-700 leading-5">
                Users
              </button>
             </Link>
            </div>

            <div className="">
              <Link href="/Role">
              <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-500 leading-5">
                Roles
              </button>
              </Link>
            </div>
            <div className="">
              <button className=" px-[12px] py-[7px] not-italic font-semibold text-sm text-gray-500 leading-5">
              Permissions
              </button>
            </div>
          </div>
        </section>

        
        <section className={`${AdminStyle}  w-full px-6 py-6 `}>
          <div
            className={`${AdminStyle.table1} flex flex-col items-start p-0 bg-[#FFFFFF] w-full  `}
          >
            {/* this is main table container  */}
            <div
              className={` ${AdminStyle["borderBtm"]} ${AdminStyle[""]} border-btm flex flex-row justify-between gap-4  w-full  py-5 px-6`}
            >
              {/* this is card header  */}
              <div className={`${AdminStyle} flex flex-col  w-[95%] gap-1 `}>
                <div className={`${AdminStyle}  flex flex-row   gap-4`}>
                  <h2
                    className={`${AdminStyle} font-semibold text-lg leading-7 text-gray-900 not-italic`}
                  >
                    Team members
                  </h2>
                  <p
                    className={`${AdminStyle}  bg-blue-50 mix-blend-multiply rounded-2xl font-medium text-xs pt-[6px] px-2 text-[#6941C6] leading-4 align-middle not-italic`}
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
                  <button onClick={()=>{setShowModal(true)}}
                    className={`${AdminStyle["AddUserBtn"]} ${AdminStyle["downloadBtn"]}  px-3 py-2 gap-1 add-user-btn download-btn flex flex-row  items-center justify-center box-border bg-primary-600 bg-[#7F56D9]  text-sm font-semibold text-[#FFFFFF] not-italic`}
                  >
                    <Image
                      src="./assets/images/plus-icon.svg"
                      alt="My Image"
                      width={11}
                      height={11}
                    />
                    <p >Add user</p>
                  </button>
                  <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className=" w-full">
          <div className="">
            <div className="">
              <section
                className={`${AddUserStyle} flex flex-row px-4 py-5  gap-3 w-full`}
              >
                {/* Nav Section  */}
                <button className={`${AddUserStyle.btn}  px-[12px] py-1  `}>
                  {/* <img src={addUserIcon} alt=""></img> */}
                  <Image
                    src="./assets/images/Add-user-icon.svg"
                    alt="My Image"
                    width={20}
                    height={18}
                  />
                </button>
                <div className={`${AddUserStyle} flex flex-col  w-full `}>
                  <div className={`${AddUserStyle} flex flex-row justify-between`}>
                    <p className="not-italic font-semibold text-gray-900 text-lg">
                      Add User
                    </p>

                    <button onClick={()=>{setShowModal(false)}}><Image src="/assets/images/x-icon.svg" width="12" height="12"></Image> </button>
                  </div>
                  <div>
                  <p className="not-italic font-normal text-sm text-gray-600">
                    Add a new user to your organization
                  </p>
                  </div>
                </div>
              </section>

              <section
                className={`${AddUserStyle.bdrBtm} w-full px-5 py-5 bdr-btm `}
              >
                {/* form container  */}
                <form onSubmit={handleFormSubmit} className="w-full  ">
                  <div className="flex flex-col mb-3 ">
                    <label
                      className="text-sm font-medium text-gray-700 pb-[6px]"
                      htmlFor="username"
                    >
                      First Name*
                    </label>
                    <input
                      className={AddUserStyle.input_conatiner}
                      name="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e)=>{setFirstName(e.target.value)}}
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-3 ">
                    <label
                      className="text-sm font-medium text-gray-700 pb-[6px]"
                      
                    >
                      Last Name*
                    </label>
                    <input
                      className={AddUserStyle.input_conatiner}
                      name="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e)=>setLastName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-3 ">
                    <label
                      className="text-sm font-medium text-gray-700 pb-[6px]"
                      htmlFor="username"
                    >
                      Email Address*
                    </label>
                    <input
                      className={AddUserStyle.input_conatiner}
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e)=>
                      {
                        setEmail(e.target.value)
                      }}
                      required
                    />
                  </div>
                  <div className="flex flex-col mb-3 ">
                    <label
                      className="text-sm font-medium text-gray-700 pb-[6px]"
                      htmlFor="username"
                      
                    >
                      Role
                    </label>
                    {/* <input
                 className="input-conatiner"
                 id="username"
                 type="se"
               /> */}
                    <select value={selectValue} onChange={(e)=>{setSelectValue(e.target.value)}} className={AddUserStyle.input_conatiner}>
                      <option value="Administrator"  className="not-italic font-normal text-base text-black">
                        Administrator
                      </option>
                      <option value="User" className="not-italic font-normal text-base text-black">
                        User
                      </option>
                      

                      
                    </select>
                  </div>
                </form>
              </section>
              <section className="w-full px-5 py-5 ">
                <div className=" flex flex-row gap-3">
                  <div className="">
                    <button onClick={()=>{setShowModal(false)}}
                      className={`${AddUserStyle.add_user2} add-user2 text px-10 py-1.5 bg-[#FFFFFF]font-semibold not-italic text-base text-gray-700`}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="">
                    <button onClick={handleFormSubmit}
                      className={`${AddUserStyle.add_user2} add-user2 text px-10 py-1.5 bg-[#7F56D9] font-semibold not-italic text-base text-[#FFFFFF]`}
                    >
                      Add User
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Modal>
         
        
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
                <thead className={AdminStyle.borderBtm}>
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
                  <tr className={`${AdminStyle.borderBtm} flex flex-row w-full table-hea border-btm  box-border items-center   `}>
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

                  <tr className={`${AdminStyle.borderBtm} flex flex-row w-full table-hea border-btm  box-border items-center   `}>
                    {/* Row 2 */}

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

                  <tr className={`${AdminStyle.borderBtm} flex flex-row w-full table-hea border-btm  box-border items-center   `}>
                    {/* Row 3 */}

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

                  <tr className={`${AdminStyle.borderBtm} flex flex-row w-full table-hea border-btm  box-border items-center   `}>
                    {/* Row 4 */}

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

                  <tr className={`${AdminStyle.borderBtm} flex flex-row w-full table-hea border-btm  box-border items-center   `}>
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

                  <tr className={`${AdminStyle.borderBtm} flex flex-row w-full table-hea border-btm  box-border items-center   `}>
                    {/* Row 5 */}

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

        </section>
      
    </Layout>
  );
}
