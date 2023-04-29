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
        <Sidebar/>
         <main className="w-full">
            {children}

         </main> 
        {/* <Footer/> */}
     </div>
        
    )
}