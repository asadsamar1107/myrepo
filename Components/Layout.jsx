import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar"
import Adminstration from "@/pages/Adminstration";
import Footer from "./Footer";


export default function Layout({children,title}){
    return(
     <div className="h-screen flex flex-row justify-start">
        <Head>
            <title>{title}</title>
            <link  />
        </Head>
        {/* <Header/> */}
        <Sidebar/>
         <main>
            {children}

         </main> 
        {/* <Footer/> */}
     </div>
        
    )
}