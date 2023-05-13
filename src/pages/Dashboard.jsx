import Layout from "../../Components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerModal from "../../Components/Calendar";
// import Calendar from "../../Components/Calendar"
import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
Chart.register(Tooltip, Title, ArcElement, Legend);

export default function Dashboard() {
  const [openCalendar, setOpenCalendar] = useState(false);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // });
  const Nocdata = {
    datasets: [
      {
        data: [10, 20, 30, 15, 33],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          "rgba(127, 86, 217, 1)",
          "rgba(158, 119, 237, 1)",
          "rgba(182, 146, 246, 1)",
          "rgba(214, 187, 251, 1)",
          "rgba(244, 235, 255, 1)",
        ],
        backgroundColor: [
          "rgba(127, 86, 217, 1)",
          "rgba(158, 119, 237, 1)",
          "rgba(182, 146, 246, 1)",
          "rgba(214, 187, 251, 1)",
          "rgba(244, 235, 255, 1)",
        ],
        borderColor: [
          "rgba(127, 86, 217, 1)",
          "rgba(158, 119, 237, 1)",
          "rgba(182, 146, 246, 1)",
          "rgba(214, 187, 251, 1)",
          "rgba(244, 235, 255, 1)",
        ],
        borderWidth: 0,
        hoverBorderWidth: 4,
        spacing: 0,
        cutout: 38,
      },
    ],
  };
  const Socdata = {
    datasets: [
      {
        data: [10, 20, 30, 15, 33],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          "rgba(71, 84, 103, 1)",
          "rgba(102, 112, 133, 1)",
          "rgba(152, 162, 179, 1)",
          "rgba(208, 213, 221, 1)",
          "rgba(242, 244, 247, 1)",
        ],
        backgroundColor: [
          "rgba(71, 84, 103, 1)",
          "rgba(102, 112, 133, 1)",
          "rgba(152, 162, 179, 1)",
          "rgba(208, 213, 221, 1)",
          "rgba(242, 244, 247, 1)",
        ],
        borderColor: [
          "rgba(71, 84, 103, 1)",
          "rgba(102, 112, 133, 1)",
          "rgba(152, 162, 179, 1)",
          "rgba(208, 213, 221, 1)",
          "rgba(242, 244, 247, 1)",
        ],
        borderWidth: 0,
        hoverBorderWidth: 4,
        spacing: 0,
        cutout: 38,
      },
    ],
  };

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
                {openCalendar && <DatePickerModal />}
                <button
                  onClick={() => setOpenCalendar(!openCalendar)}
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

        <section className=" w-full flex flex-row px-8 gap-6  ">
          <section className="  w-full flex flex-row items-start gap-6 py-4 px-6 noc_soc_Container  ">
            <div className=" flex flex-row  items-center justify-center   ">
              {/* this is for pie chart */}
              {/* <Image
                width="120"
                height="120"
                src="/assets/images/piechart.svg"
              /> */}
              <Doughnut
                data={Nocdata}
                className="w-[110px] h-[110px]  "
              ></Doughnut>
            </div>

            <div className=" w-full flex flex-col gap-6  py-2">
              {/* this is for content */}
              <div className="flex flex-row justify-between ">
                <div>
                  {/* <h1 className=""></h1> */}
                  <p className="no font-semibold text-base text-gray-900">
                    NOC Tickets
                  </p>
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
                  <p className="not-italic font-medium text-sm text-gray-600">
                    Open Tickets
                  </p>
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
          <section className="  w-full flex flex-row items-start gap-6 py-4 px-6 noc_soc_Container  ">
            <div className=" flex flex-row  items-center justify-center   ">
              {/* this is for pie chart */}
              {/* <Image
                width="120"
                height="120"
                src="/assets/images/piechart.svg"
              /> */}
              <Doughnut
                data={Socdata}
                className="w-[110px] h-[110px]  "
              ></Doughnut>
            </div>

            <div className=" w-full flex flex-col gap-6  py-2">
              {/* this is for content */}
              <div className="flex flex-row justify-between ">
                <div>
                  {/* <h1 className=""></h1> */}
                  <p className="no font-semibold text-base text-gray-900">
                    SOC Tickets
                  </p>
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
                  <p className="not-italic font-medium text-sm text-gray-600">
                    Open Tickets
                  </p>
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
        </section>

        <section className=" w-full flex flex-row items-start px-8 gap-6 mb-6 ">
          <div className=" w-[60%] flex flex-col items-start  gap-6   ">
            {/* this is card One  */}
            <div className=" w-full flex flex-col items-start p-6 gap-5 noc_soc_Container ">
              <div className=" w-full flex flex-row justify-between">
                <div>
                  <p className=" font-semibold text-base text-gray-900">Balance over time</p>
                </div>
                <div>
                  <Image
                    width="4"
                    height="12"
                    src="/assets/images/three-dot-icon.svg"
                  />
                </div>
              </div>
              <div className="">
                <Image
                  width="600"
                  height="200"
                  src="/assets/images/Line and bar chart.svg"
                />
              </div>
            </div>

            <div className=" p-5 gr w-full flex flex-col items-start noc_soc_Container gap-5">
            <div className=" w-full flex flex-row justify-between  ">
                <div>
                  <p className=" font-semibold text-base text-gray-900">Newsletter</p>
                </div>
                <div>
                  <Image
                    width="4"
                    height="12"
                    src="/assets/images/three-dot-icon.svg"
                  />
                </div>
              </div>

              <div className="blog-subscribe ">
                <div className="t flex flex-row items-center justify-center ">
                <Image
                    width="22"
                    height="22"
                    src="/assets/images/telegram-icon.svg"
                    
                  />
                </div>
                <div className="w-full  flex flex-col items-start gap-8">
                  <div className=" w-full flex flex-col items-start gap-2 ">
                   <p className="font-semibold text-gray-900 text-2xl">Weekly newsletter</p>
                   <p className="text-gray-600 text-base font-normal">No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week.</p>
                   
                  </div>
                  <div className="w-full flex flex-col items-start gap-4  ">
                   <div className="w-full flex flex-col items-start gap-[6px]">
                   <input
                          className="input_conatiner w-full placeholder:font-normal text-base text-gray-500"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                        />
                        <p className="text-gray-600 text-sm font-normal">Read about our privacy policy.</p>
                   </div>
                   <div className="w-full flex flex-row justify-center AddUserBtn downloadBtn bg-[#7F56D9] py-2 text-[#FFFFFF] font-semibold text-base">
                    <button className=" ">Subscribe</button>
                    </div>
                   <div>
                    

                   </div>
                   
                  </div>
                  
                </div>
                


             </div>
             <div className="border_Bottom w-full "></div>

             <div className="flex flex-row justify-end w-full py-4">
              <button className="downloadBtn  px-4 py-[10px] text-gray-700 font-semibold text-sm">Manage cards</button>
             </div>


             
            
            </div>
            
          </div>

          <div className="p-5 w-[40%] gr flex flex-col items-start noc_soc_Container gap-5">
            {/* this is card two */}
            <div className=" w-full flex flex-row justify-between  ">
                <div>
                  <p className=" font-semibold text-base text-gray-900">Top Tickets</p>
                </div>
                <div>
                  <Image
                    width="4"
                    height="12"
                    src="/assets/images/three-dot-icon.svg"
                  />
                </div>
              </div>
            <div>
              {/* this is content-table */}
              <table>
                
              </table>
            </div>
            <div>
              this is footer
            </div>
            
          </div>
        </section>
      </section>
    </Layout>
  );
}
