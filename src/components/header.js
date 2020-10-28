import React from "react";
import Banner1 from "./banners/banner1";
import "./header.css";

const Header= () =>{
    return(
        <header>
             <div className="head">
                 <div style={{display: 'flex', justifyContent:'space-between'}}>
                     <div >
                        <img className="logo" src={"img/logo.png"} alt="logo"/>
                     </div>
                     <div style={{paddingRight: '1em'}} id="list">
                        <ul>
                            <li><a className="active" href="#">HOME</a></li>
                            <li><a href="#">PODCAST</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">EVENTS</a></li>
                            <li><a href="#">CONTACT</a></li>
                            <li><a href="#">STORY</a></li>
                            <li><a href="#">CHARITY</a></li>
                            <li><a href="#">CAREERS</a></li>
                            <li><a href="#">ENGLISH</a></li>
                            <li><a href="#"><img src={"img/search-white.png"} style={{width: '16px', height: '16px'}} alt="logo"/></a></li>
                        </ul>
                     </div>
                 </div>
                <Banner1 />
            </div>
        </header>
       
    )
}

export default Header;