import React from 'react';
import addNotification from "react-push-notification";
import logo from "../images/chilon-logo.ico";

function Notificationtest() {
    const clickToNotify = ()=>{
        addNotification({
            title: "Sizga yangi xabar keldi",
            message: "Ariza qoldirildi. Tasdiqlash uchun bosing...",
            duration: 86400000, // 24 soat uchun
            icon: logo,
            native: true,
            onClick: ()=> window.location =  "/ochiq-arizalar"
        })
    }

    return ( 
        <>
        <button onClick={clickToNotify} style={{margin: "100px", backgroundColor: "gray", color: "#fff", padding:"3px"}}>
            Click to notify
        </button>
        </>
     );
}

export default Notificationtest;    