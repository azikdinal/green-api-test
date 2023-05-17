import React from 'react';
import LeftNavbar from "./LeftNavbar";
import Chats from "./Chats";

const LeftBar = () => {
    return (
        <div className="left-bar">
            <LeftNavbar/>
            <Chats/>
        </div>
    );
};

export default LeftBar;