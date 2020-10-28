import React from "react";
import "./secondcont.css"

const secondContent= ()=>{
    return(
        <div>
            <div className="container1">
                <div className="first_img">
                    <div className="main">DO NOT WAIT TO</div>
                    <div className="submain">GET MOTIVATED</div>
                    <button className="button">READ MORE</button>
                </div>
                <div className="second_img">
                    <div className="text">
                        <span>HARD</span><br/>
                        <span>DAYS</span><br/>
                        <span>WON'T</span><br/>
                        <span>WIN</span>
                    </div>
                    <button className="button1">READ MORE</button>
                </div>
            </div>
            <div className="container2">
                <div className="third_img">
                    <div className="moto">LAUGH.SMILE.LOVE.</div>
                    <div className="submoto">FOCUS ON YOUR PURPOSE</div>
                    <button className="button2">READ MORE</button>
                </div>
                <div className="fourth_img">
                    <div className="start">LET'S DO</div>
                    <div className="start">WHAT WE</div>
                    <div className="end">LOVE</div>
                    <button className="button3">READ MORE</button>
                </div>
            </div>
            
        </div>
    )
}

export default secondContent;