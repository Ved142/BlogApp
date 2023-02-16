import React from "react";
// import SearchIcon from "@mui/material";
import "../../css/Explore.css";
import Featured from "./Featured";
import Blogs from "./Blogs";
     
const Explore=(props)=>{

    return (
        <div>
        <div className="searchbox">
                <span style={{width :"97%"}}><input
                    className="Inputbox"
                    type='text'
                    placeholder="Search anything..."
                    
                />
                </span>
                {/* <span><Search/></span> */}
            </div>
            <hr className="hruled" />
            <div className="heading"><span>Article of the Day</span></div>
            <div className="banner">
                <Featured link="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
            </div>
            <div className="heading"><span>Topic Match for You</span></div>
            <div className="tab">
                <button className="tab-buttons">Design</button>
                <button className="tab-buttons">Technology</button>
                <button className="tab-buttons">Programming</button>
                <button className="tab-buttons">Crypto</button>
                <button className="tab-buttons">Blockchain</button>
                <button className="tab-buttons">Metaverse</button>
            </div>
            <Blogs />
        </div>
    );
}

export default Explore;