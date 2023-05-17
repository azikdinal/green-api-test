import React from 'react';
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const Window = () => {
    return (
        <div className='window'>
            <LeftBar/>
            <RightBar/>
        </div>
    );
};

export default Window;