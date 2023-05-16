import React from 'react';
import MessageList from "./MessageList";
import RightNavbar from "./RightNavbar";
import TypeBar from "./TypeBar";

const RightBar = () => {
    return (
        <div className="right-bar">
            <RightNavbar/>
            <MessageList/>
            <TypeBar/>
        </div>
    );
};

export default RightBar;