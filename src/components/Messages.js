import React, {useEffect, useRef, useState} from 'react';
import Date from "./Date";
import Message from "./Message";
import apiStore from '../store/ApiStore'
import {observer} from 'mobx-react-lite'

const Messages = observer(() => {

        const messages = apiStore.messages
        // Scroll to be in bottom at start
        const typeBarRef = useRef(null);

        useEffect(() => {
            typeBarRef.current.scrollTop = typeBarRef.current.scrollHeight;
        }, []);

        return (
            <div className='messages' ref={typeBarRef}>
                <Date/>
                {messages.map(message =>
                    <Message message={message.text} isUser={message.is_user}/>
                )}
            </div>
        );
    }
)

export default Messages;