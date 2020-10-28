
import React from "react";
import "./subscribe.css"

const BannerSubscribe = ()=>{
    return(
     <div className="subscribecontainer" style={{display:'flex'}} >
        <div className="touchstyle">GET IN TOUCH AND STAY UPDATED WITH OUR NEWS AND EVENTS</div>
        
        <div style={{paddingLeft: '16px'}}>
            <input type="text" className="textstyle" />
            <button className="blackbutton">SUBSCRIBE</button>
        </div>
     </div>   
    )
}

export default BannerSubscribe;
