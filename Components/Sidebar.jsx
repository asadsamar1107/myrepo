import sidebarStyle from "../src/styles/Sidebar.module.css";
import Image from "next/image";
import navlogo from "../public/assets/images/Content.svg";
import Layout from "./Layout";
export default function Sidebar() {
  return (
    <div className={`${sidebarStyle.main} h-screen fixed top-0 left-0`}>
      <div className="flex flex-col justify-between items-start h-screen ">
        <section className="  w-full ">
          {/* Navigation  */}
          <div className="flex flex-col mt-8 gap-6 ">
            <div className="w-full pl-6">
              {/* Header  */}
              <div className="  flex flex-row gap-2  ">
                <div className=" ">
                  {/* logo-Image  */}
                  <Image
                    src="./assets/images/Content.svg"
                    alt="My Image"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="  mt-1 pl-[3px]  ">
                  {/* Logo-title  */}
                  <p className="not-italic font-semibold text-[#000000]">
                    Horizon
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="px-6 w-full ">
              
              <div className={sidebarStyle}>
                <input type="text" placeholder="" className={sidebarStyle.inputBox}></input>
              </div>
            
            </div> */}

            <div className="px-6 w-full ">
           
              <input
                className={`${sidebarStyle.input_conatiner}  placeholder:font-normal text-base text-gray-500`}
                id="username"
                type="text"
                placeholder="Search"
              />
            </div>

            <div className={`${sidebarStyle}`}>
              {/* Navigation  */}
              <div className="px-[19px] gap-1">
                <div className={`${sidebarStyle} px-3 py-2`}>
                  <div
                    className={`${sidebarStyle} flex flex-row gap-[15px] items-center`}
                  >
                    <div className={`${sidebarStyle} px-0.5`}>
                      <Image
                        src="./assets/images/home-icon.svg"
                        alt="My Image"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className={`${sidebarStyle} `}>
                      <button className="pt-0.5 font-semibold text-base text-gray-700">
                        Home
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`${sidebarStyle} px-3 py-2`}>
                  <div
                    className={`${sidebarStyle} flex flex-row gap-[15px] items-center`}
                  >
                    <div className={`${sidebarStyle} px-0.5`}>
                      <Image
                        src="./assets/images/dashboard-icon.svg"
                        alt="My Image"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className={`${sidebarStyle}`}>
                      {/* <h1 className="pt-0.5 font-semibold text-base text-gray-700">Dashboard</h1>
                       */}
                      <button className="pt-0.5 font-semibold text-base text-gray-700">
                        Dashboard
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`${sidebarStyle} px-3 py-2`}>
                  <div
                    className={`${sidebarStyle} flex flex-row gap-[15px] items-center`}
                  >
                    <div className={`${sidebarStyle} px-0.5`}>
                      <Image
                        src="./assets/images/project-icon.svg"
                        alt="My Image"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className={`${sidebarStyle}`}>
                      {/* <h1 className="pt-0.5 font-semibold text-base text-gray-700">Projects</h1> */}
                      <button className="pt-0.5 font-semibold text-base text-gray-700">
                        Projects
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`${sidebarStyle} px-3 py-2`}>
                  <div
                    className={`${sidebarStyle} flex flex-row gap-[15px] items-center`}
                  >
                    <div className={`${sidebarStyle} px-0.5`}>
                      <Image
                        src="./assets/images/tasks-icon.svg"
                        alt="My Image"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className={`${sidebarStyle}`}>
                      {/* <h1 className=" pt-0.5 font-semibold text-base text-gray-700">Tasks</h1> */}
                      <button className="pt-0.5 font-semibold text-base text-gray-700">
                        Tasks
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`${sidebarStyle} px-3 py-2`}>
                  <div
                    className={`${sidebarStyle} flex flex-row gap-[15px] items-center`}
                  >
                    <div className={`${sidebarStyle} px-0.5`}>
                      <Image
                        src="./assets/images/reporting-icon.svg"
                        alt="My Image"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className={`${sidebarStyle}`}>
                      {/* <h1 className="pt-0.5  font-semibold text-base text-gray-700">Reporting</h1> */}
                      <button className="pt-0.5 font-semibold text-base text-gray-700">
                        Reporting
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`${sidebarStyle} px-3 py-2`}>
                  <div
                    className={`${sidebarStyle} flex flex-row gap-[15px] items-center`}
                  >
                    <div className={`${sidebarStyle} px-0.5`}>
                      <Image
                        src="./assets/images/admin-icon.svg"
                        alt="My Image"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className={`${sidebarStyle}`}>
                      {/* <h1 className="pt-0.5  font-semibold text-base text-gray-700">Administration</h1> */}
                      <button className="pt-0.5 font-semibold text-base text-gray-700">
                        Administration
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${sidebarStyle} w-full pl-3 pb-8`}>
          {/* Footer  */}
          <div className={`${sidebarStyle} flex flex-row  gap-3`}>
            <div className={`${sidebarStyle} flex flex-row pl-2 gap-3`}>
              {/* Avtar  */}
              <div className={sidebarStyle}>
                {/* image  */}
                <Image
                  src="./assets/images/Avatar.svg"
                  alt="My Image"
                  width={40}
                  height={40}
                />
              </div>
              <div className={`${sidebarStyle} flex flex-col`}>
                <p className="not-italic font-semibold text-sm text-gray-700">
                  Olivia Rhye
                </p>

                <p className="not-italic font-normal text-sm text-gray-600">
                  olivia@untitledui.com
                </p>

                {/* <p>okvbnm,gvbhjfvgbh</p> */}
              </div>
            </div>
            <div className={`${sidebarStyle} pt-1 pl-3`}>
              {/* Button  */}
              <Image
                src="./assets/images/footer-arrow.svg"
                alt="My Image"
                width={20}
                height={1}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
