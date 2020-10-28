import React from "react";
import "./footer.css";
import FourthContent from "./fourth/fourthcontent";
import FourthInfo from "./fourth/fourtrhinfo";

const footer = () =>{
    return(
        <React.Fragment>
            <div className="footcontainer1" style={{display:'flex'}}>
                <div className="ftext_1">RESTRA SEMPRE<br/>
                    CONSESCO</div>
                <div className="smybol">
                    <img className="social_logo" src="img/facebook.png"/>
                    <img className="social_logo" src="img/linkedin.png"/>
                    <img className="social_logo" src="img/twitter.png"/>
                    <img className="social_logo" src="img/youtube.png"/>
                    <img className="social_logo" src="img/instagram.png"/>
                    <img className="social_logo" src="img/gmail.png"/>
                </div>
                <div className="ftext_2">RESTRA SEMPRE<br/>
                    CONSESCO</div>
                <div style={{paddingLeft:"30px"}} >
                    <button className="btn">SUBSCRIBE</button>
                </div>
            </div>  
            <FourthContent/>
            <FourthInfo/>

            <div className="footcontainer2" style={{display:'flex'}} >
                <div className="foot_txt">
                    <span>Ady production,LLC</span>
                    <span>|</span>
                    <span>Copyright 2020</span>
                    <span>|</span>
                    <span>All Rights Reserved</span>
                </div>
            </div>   
        </React.Fragment>
    )
}

export default footer;