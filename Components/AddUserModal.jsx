import {useState,useEffect} from 'react'
import  ReactDOM  from 'react-dom'
import addUserStyle from "../src/styles/AddUser.module.css"

export default function Modal({show,onClose,children}){
    const [isBrowser,setIsBrowser]=useState(false)

    useEffect(()=>
    {
        setIsBrowser(true)
        // document.body.style.overflow="hidden";
    },[])
  

    const modalContent=show ?(
        <div className={`${addUserStyle.overlay} w-full h-full`}>
            <div className={addUserStyle.modal}>
               
                <div className={addUserStyle.body}>{children}</div>
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