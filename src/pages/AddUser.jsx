import Layout from "../../Components/Layout";
import Link from "next/link";
import AddUserStyle from '../styles/AddUser.module.css'
import Image from "next/image";
export default function AddUser(){
    return(
        <Layout title="add user">
      <div className="pl-10 w-full">
      <div className={`${AddUserStyle.MainSection} main-section h-full w-full  px-[200px] py-[100px]`}>
      <div className={`${AddUserStyle.modal} flex flex-col items-center p- bg-[#FFFFFF] `}>
        <section className={`${AddUserStyle.bdrBtm} w-full flex flex-row py-6 pl-6  gap-3 bdr-btm`}>
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
          <div className="flex flex-col  w-full px-2 ">
             <div className=" flex flex-row justify-between">
               <p className="not-italic font-semibold text-gray-900 text-lg">
                 Add User
               </p>

               {/* <button><img className="pb-3" src={xIcon}></img></button> */}
             </div>
             <p className="not-italic font-normal text-sm text-gray-600">
               Add a new user to your organization
             </p>
           </div>
        </section>

        <section className={`${AddUserStyle.bdrBtm} w-full px-5 py-5 bdr-btm `}>
          {/* form container  */}
          <form className="w-full  ">
         
             <div className="flex flex-col mb-3 ">
               <label
                 className="text-sm font-medium text-gray-700 pb-[6px]"
                 htmlFor="username"
               >
                 First Name*
               </label>
               <input
                 className={AddUserStyle.input_conatiner}
                 id="username"
                 type="text"
               />
             </div>

             <div className="flex flex-col mb-3 ">
               <label
                 className="text-sm font-medium text-gray-700 pb-[6px]"
                 htmlFor="username"
               >
                 Last Name*
               </label>
               <input
                 className={AddUserStyle.input_conatiner}
                 id="username"
                 type="text"
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
                 id="username"
                 type="text"
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
               <select className={AddUserStyle.input_conatiner}>
        <option className="not-italic font-normal text-base text-black">Administrator</option>

        <option value="1"></option>
        <option value="2"> </option>
      </select>
             </div>

             
          

           </form>

         

        </section>
        <section className="w-full px-5 py-5 ">
          <div className=" flex flex-row gap-3">
            <div className="">
            <Link href='/Adminstration'>
            <button className={`${AddUserStyle.add_user2} add-user2 text px-10 py-1.5 bg-[#FFFFFF]font-semibold not-italic text-base text-gray-700`}>Cancel</button>
            
            </Link>
            </div>
            <div className="">
              <button className={`${AddUserStyle.add_user2} add-user2 text px-10 py-1.5 bg-[#7F56D9] font-semibold not-italic text-base text-[#FFFFFF]`}>Add User</button>
            </div>
            
          </div>
        </section>
      </div>
    </div>
      </div>

        </Layout>
    )
}