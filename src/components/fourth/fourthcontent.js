import React from "react";
import "./fourthcont.css"

const fourthContent = () =>{
    return(
        <div style={{backgroundColor:"#e6a80e"}}>
            <table width="100%" border="0px" cellSpacing="0" cellPadding="0">
                <tr>
                    <td>
                        <div className="bucket1">   
                            <div className="marketg">WHAT IS PERFORMANCE<br/>
                                MARKETRING?</div><br/><br/>
                            <small style={{color:"white"}}>By Mattia Rasulo 10min read</small><br/><br/>
                            <div className="para1">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.<br/><br/>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati elum dolor...<br/><br/>
                                <span style={{color:"white"}}>Continue reading &gt;&gt;</span><br/><br/>
                                <div className="marticle"><small>MORE ARTICLES</small></div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="bucket2">
                            <div className="popular">POPULAR</div><br/>
                            <div>At vero eos et accusamus et iusto odio stum deleniti<br/>
                                atque corrupti quos dolores et quas molestias.</div><br/>
                            <div>
                                <small style={{color:"white"}}>YouTube&nbsp;|&nbsp;01:38:01</small><br/>
                                <img className="vdeo1" src={"img/video-3.jpg"}/><br/><br/>
                                <div className="mvideos"><small>MORE VIDEOS</small></div>
                            </div><br/><br/>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default fourthContent;