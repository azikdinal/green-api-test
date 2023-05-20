import React from 'react';
import Chat from "./Chat";
import counter from "../store/apiStore";

const Chats = () => {
    return (
        <div className='chats'>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>

        </div>
    );
};

export default Chats;