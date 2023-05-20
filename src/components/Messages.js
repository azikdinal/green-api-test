import React, {useEffect, useRef, useState} from 'react';
import Date from "./Date";
import Message from "./Message";
import apiStore from '../store/apiStore'
import {observer} from 'mobx-react-lite'
import axios from "axios";

const Messages = observer(() => {

    const host = apiStore.host
    const id = apiStore.id
    const token = apiStore.token




    const messages = apiStore.messages
        // Scroll to be in bottom at start
        const typeBarRef = useRef(null);

        useEffect(() => {
                typeBarRef.current.scrollTop = typeBarRef.current.scrollHeight;
        }, []);



        const [isClicked, setIsClicked] = useState(false);

        const handleClick = () => {
                setIsClicked(true);
        };


        let messageId = 0



        const recieveMessage = async () =>{

            await axios.get(`https://api.green-api.com/waInstance1101822336/receiveNotification/95247822b8fe41d8b937cd71d959334c6719ee252dae4b4bac`)
                .then(response => {
                    messageId = response.data.receiptId
                })
                .catch(e => console.log(e))
        }
        //
        // setTimeout(() => recieveMessage(),5000)


        return (
        <div className='messages' ref={typeBarRef}>
            <Date/>
            {messages.map(message =>
               <Message message={message} isUser={true}/>
            )}
        </div>
    );
}
)

export default Messages;