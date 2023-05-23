import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar"
import Adminstration from "@/pages/Adminstration";
import Footer from "./Footer";


export default function Layout({children,title}){
    return(
     <div className="h-screen flex flex-row justify-start w-full h-full">
        <Head>
            <title>{title}</title>
            <link  />
        </Head>
        {/* <Header/> */}
        <Sidebar className="fixed top-0 left-0"/>
         <main className="w-full ml-[250px]">
            {children}

         </main> 
        {/* <Footer/> */}
     </div>
        
    )
}