import React from "react";
import "./fourthinfo.css";

const fourthInfo = () =>{
    return(
        <div style={{backgroundColor:"white"}}>
            <table width="100%" cellPadding="0px" cellSpacing="0px" border="0px">
                <tr>
                    <td>
                        <div className="bigbox1">
                            <div className="intouch">GET IN TOUCH</div><br/><br/>
                            <div>
                                <table width="500px" cellPadding="0px" cellSpacing="0px" border="0px">
                                    <tr>
                                        <td className="table_row"><input className="personinfo" type="text" placeholder="First Name"></input></td>
                                        <td className="table_row"><input className="personinfo" type="text" placeholder="Last Name"></input></td>
                                    </tr>
                                    <tr>
                                        <td className="table_row"><input className="personinfo" type="text" placeholder="Email Address"></input></td>
                                        <td className="table_row"><input className="personinfo" type="text" placeholder="Website"></input></td>
                                    </tr>
                                    <tr>
                                        <td className="table_row"><input className="personinfo" type="text" placeholder="Phone Number"></input></td>
                                        <td className="table_row" rowspan="2"><span style={{color:"gray"}}>Message</span><br/>
                                            <textarea></textarea></td>
                                    </tr>
                                    <tr>
                                        <td className="table_row"><input className="personinfo" type="date"></input></td>
                                    </tr>
                                    <br/>
                                </table>
                            </div><br/><br/>
                            <button className="submit">SUBMIT</button>
                        </div>
                    </td>
                    <td>
                        <div className="bigbox2">
                            <div className="events">EVENTS</div>
                            <div className="april">APRIL</div>
                            <table width="500px" cellPadding="0px" cellSpacing="0px" border="0px">
                                <tr className="separated">
                                    <td className="number">28</td>
                                    <td style={{width:"340px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td className="detailtext">DETAILS</td>
                                </tr>
                                <tr className="separated">
                                    <td className="number">27</td>
                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td className="detailtext">DETAILS</td>
                                </tr>
                                <tr className="separated">
                                    <td className="number">20</td>
                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td className="detailtext">DETAILS</td>
                                </tr>
                                <tr className="separated">
                                    <td className="number">16</td>
                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td className="detailtext">DETAILS</td>
                                </tr>
                                <tr className="lastone">
                                    <td className="number">10</td>
                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td className="detailtext">DETAILS</td>
                                </tr>
                            </table>   
                            <div className="more_events">MORE EVENTS</div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default fourthInfo;