import Image from "next/image";
export default function RoleModal() {
  return (
    <div className=" w-full flex flex-col gap-10 px-5 pt-2 ">
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
                <th scope="col" className={` box-border items-center w-[80%] `}>
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
                cancel


              </button>
            </div>
           <div className=" w-full">
           <button className="btn2 w-full flex flex-row justify-center py-2 bg-[#7F56D9] not-italic font-semibold text-base text-[#FFFFFF]">

           Add User

           </button>
           </div>
          </div>
        </div>
      </section>
    </div>
  );
}
