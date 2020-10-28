import React from "react";
import "./thirdcont.css";
import ThirdContentOne from "./thirdcontentone";

const thirdContent= () =>{
    return(
        <div style={{backgroundColor:"white"}}>
            <table width="100%" cellSpacing="0" cellPadding="0" border="0px">
                <tr>
                    <td>
                        <div id="big_contain1">
                        <div className="fea_article">FEATURE ARTCLE</div><br/>
                        <div className="cont_king">IF CONTENT IS KING,<br/>
                            THEN WHO IS QUEEN?</div><br/>
                            <div >
                                <small style={{color:"#e6a80e"}}>2 days ago | 15 min read</small><br/>
                                <img className="blog_im1" src={"img/blog-im1.jpg"}/>
                            </div><br/>
                            <div className="para1">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.<br/><br/>
                                At vero eos et accusamus et iusto odio stum deleniti atque corrupti quos dolores et quas molestias.<br/><br/>
                                <span style={{color:"#e6a80e"}}>Continue reading &gt;&gt;</span><br/><br/>
                                <hr/>
                            </div><br/><br/>
                                <div className="guest">GUEST CONTRIBUTOR</div><br/>
                                <div className="exp">HOW USER EXPERIENCE<br/>
                                TRANSLATES TO MARKETRING</div><br/><br/>
                            <div>
                                <small style={{color:"#e6a80e"}}>By Mattia Rasulo 10min read</small><br/><br/>
                                <div className="para1">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.<br/><br/>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati elum dolor...<br/><br/>
                                <span style={{color:"#e6a80e"}}>Continue reading &gt;&gt;</span><br/><br/>
                                </div>
                            </div>                   
                        </div>
                        
                    </td>
                    <td>
                        <ThirdContentOne/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default thirdContent;