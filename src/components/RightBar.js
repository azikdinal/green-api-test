import React from 'react';
import Messages from "./Messages";
import RightNavbar from "./RightNavbar";
import TypeBar from "./TypeBar";

const RightBar = () => {
    return (
        <div className="right-bar">
            <RightNavbar/>
            <Messages/>
            <TypeBar/>
        </div>
    );
};

export default RightBar;