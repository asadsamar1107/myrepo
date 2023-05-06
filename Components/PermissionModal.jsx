import {useState,useEffect} from 'react'
import  ReactDOM  from 'react-dom'
import addUserStyle from "../src/styles/AddUser.module.css"

export default function RoleModal({show,onClose,children}){
    const [isBrowser,setIsBrowser]=useState(false)

    useEffect(()=>
    {
        setIsBrowser(true)
        // document.body.style.overflow="hidden";
    },[])
  

    const modalContent=show ?(
        <div className={`${addUserStyle.overlay}  w-full h-ful`}>
            <div className={`${addUserStyle.modal } absolute top-10 w-[50%] h-ful`}>
               
            <div className={`{addUserStyle.body} w-full `}>{children}</div>
            </div>
        </div>

    ):null
    if(isBrowser){
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    }
    else{
        return null;
    }

}