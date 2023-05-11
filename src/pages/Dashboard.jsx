import Layout from "../../Components/Layout";
import Image from "next/image";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerModal from "../../Components/Calendar"
// import Calendar from "../../Components/Calendar"


export default function Dashboard() {
    const [openCalendar,setOpenCalendar]=useState(false)

  return (
    
    <Layout title="dashboard">
      <section className="flex flex-col items-start pt-8 gap-8 w-full">
        <section className={` px-8 flex flex-col items-start gap-6 w-full`}>
          <div className="w-full">
            <h2 className="  text-3xl text-gray-900 font-semibold leading-9 not-italic">
              Home
            </h2>
            <p className="text-base text-gray-600 font-normal leading-6 not-italic">
              Welcome back, Olivia!
            </p>
          </div>

          <div className="flex flex-row  w-full items-start justify-between gap-4">
            <div
              className={` btn2  pl-1  flex flex-row items-start  isolate gap-2`}
            >
              <div className="">
                <button
                  className={`border_Right font-semibold text-sm leading-5 text-gray-700 px-4 py-2`}
                >
                  12 months
                </button>
              </div>

              <div>
                <button
                  className={`border_Right  font-semibold text-sm leading-5 text-gray-700 px-4 py-2`}
                >
                  30 days
                </button>
              </div>

              <div>
                <button
                  className={` font-semibold text-sm leading-5 text-gray-800 px-4 py-2`}
                >
                  7 days
                </button>
              </div>
              <div>
                <button
                  className={` font-semibold text-sm leading-5 text-gray-800 px-4 py-2`}
                >
                  24 hours
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 ">
           
              <div className="">
              {openCalendar && <DatePickerModal/>}
                <button onClick={()=>setOpenCalendar(!openCalendar) } 
                  className={`downloadBtn px-4 py-2  gap-[10px]  download-btn flex flex-row  items-center justify-center box-border bg-[#FFFFFF]  text-sm font-semibold text-gray-500 not-italic`}
                >
                  
                  <Image
                    src="./assets/images/calander.svg"
                    alt="My Image"
                    width={15}
                    height={15}
                  />
                  <p>Select dates</p>
                </button>
                
              </div>
              <div className="">
                <button
                  className={`downloadBtn px-4 py-2  gap-[10px]  download-btn flex flex-row  items-center justify-center box-border bg-[#FFFFFF]  text-sm font-semibold text-gray-700 not-italic`}
                >
                  <Image
                    src="./assets/images/filter.svg"
                    alt="My Image"
                    width={15}
                    height={15}
                  />
                  <p>Filters</p>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className=" w-full flex flex-row px-8 gap-6">
          <section className="  w-full flex flex-row items-start gap-6 py-6 px-6 noc_soc_Container">
            <div className="">
              {/* this is for pie chart */}
              <Image
                width="120"
                height="120"
                src="/assets/images/piechart.svg"
              />
            </div>

            <div className=" w-full flex flex-col gap-6">
              {/* this is for content */}
              <div className="flex flex-row justify-between ">
                <div>
                  {/* <h1 className=""></h1> */}
                  <p className="no font-semibold text-base text-gray-900">NOC Tickets</p>

                </div>
                <div>
                  <button>
                    <Image
                      width="4"
                      height="12"
                      src="/assets/images/three-dot-icon.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="flex- flex-col gap-2">
                <div>
                  {" "}
                  <p className="not-italic font-medium text-sm text-gray-600">Open Tickets</p>
  
                </div>

                <div className="flex flex-row justify-between  ">
                  <p className=" text-3xl font-semibold text-gray-900">25</p>
                  <div className=" mt-2 mb-1 flex flex-row items-center bg-[#ECFDF3] gap-[6px] border rounded-2xl px-[10px] py-0 mix-blend-multiply">
                    <div className="">
                      <Image
                        width="10"
                        height="10"
                        src="/assets/images/up-arrow-icon.svg"
                      />
                    </div>
                    <p className=" text-sm font-medium text-[#027A48]">3</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="  w-full flex flex-row items-start gap-6 py-6 px-6 noc_soc_Container">
            <div className="">
              {/* this is for pie chart */}
              <Image
                width="120"
                height="120"
                src="/assets/images/piechart2.svg"
              />
            </div>

            <div className=" w-full flex flex-col gap-6">
              {/* this is for content */}
              <div className="flex flex-row justify-between ">
                <div>
                  {/* <h1 className=""></h1> */}
                  <p className="no font-semibold text-base text-gray-900">SOC Tickets</p>

                </div>
                <div>
                  <button>
                    <Image
                      width="4"
                      height="12"
                      src="/assets/images/three-dot-icon.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="flex- flex-col gap-2">
                <div>
                  {" "}
                  <p className="not-italic font-medium text-sm text-gray-600">Open Tickets</p>
  
                </div>

                <div className="flex flex-row justify-between  ">
                  <p className=" text-3xl font-semibold text-gray-900">10</p>
                  <div className=" mt-2 mb-1 flex flex-row items-center bg-[#ECFDF3] gap-[6px] border rounded-2xl px-[10px] py-0 mix-blend-multiply">
                    <div className="">
                      <Image
                        width="10"
                        height="10"
                        src="/assets/images/up-arrow-icon.svg"
                      />
                    </div>
                    <p className=" text-sm font-medium text-[#027A48]">2</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            
          </section>
        </section>

       
      </section>
    </Layout>
  );
}
