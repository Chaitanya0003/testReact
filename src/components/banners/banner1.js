import React from "react";
import './banner.css';

const Banner1 = () =>{
    return(
        <div>   
          <div>
              <div>
                  <div className="wrap1">
                    <div>CREATIVITY</div><br/>
                    <div>CONTENT</div>
                    <div className="wrap2">
                        <img src={"img/lower-shadow.png"} style={{width:"215px"}}/>
                        <div>MARKETING</div>
                        <img src={"img/upper-shadow.png"}/>
                    </div>
                    <div className="wrap3">
                        <div style={{paddingLeft:"10px"}}>Evoluto.</div>
                    </div>
                  </div>                         
              </div>
          </div>
        <div>
            <div style={{ paddingTop: '60px', paddingLeft: '150px'}} >
                <fieldset className="fieldsetStyle">
                  <legend>Andrea's projects and activities have been featured in</legend>
                  <div style={{padding: '16px'}}>
                    <div>Forbes</div>
                  </div>
                </fieldset>
            </div>
        </div> 
    </div>
    )
}

export default Banner1;