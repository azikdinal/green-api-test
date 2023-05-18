import React, {useEffect, useRef} from 'react';
import Date from "./Date";
import Message from "./Message";

const Messages = () => {

        // Scroll to be in bottom at start
        const typeBarRef = useRef(null);

        useEffect(() => {
                typeBarRef.current.scrollTop = typeBarRef.current.scrollHeight;
        }, []);

    return (
        <div className='messages' ref={typeBarRef}>
            <Date/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
            <Message isUser={false}/>
            <Message isUser={true}/>
        </div>
    );
};

export default Messages;