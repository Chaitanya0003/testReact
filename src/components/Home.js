
import React from "react";
import Header from "./header";
import BannerSubscribe from "./banners/bannersubscribe";
import FirstContent from "./first/firstcontent";
import SecondContent from "./second/secondcontent";
import ThirdContent from "./third/thirdcontent";
import Footer from "./footer";

const Home= ()=>{
    return(
        <div>
            <Header />
            <FirstContent/>
            <SecondContent/>
            <BannerSubscribe/>
            <ThirdContent/>
            <Footer/>
        </div>
    )
}

export default Home;