import React from 'react';
import Date from "./Date";
import Message from "./Message";

const Messages = () => {
    return (
        <div className='messages'>
            <Date/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={true}/><Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={true}/><Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
        </div>
    );
};

export default Messages;