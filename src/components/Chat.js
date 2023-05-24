import React from 'react';
import image from '../assets/image.jpg'
import {observer} from "mobx-react-lite";
import ApiStore from "../store/ChatStore";

const Chat = observer(() => {
    return (
        <div className='chat'>
            <div className='image'>
                <img className='img' src={image} alt="" height={50}/>
            </div>
            <div className='content'>
                <div className='fst-line'>
                    <div>{ApiStore.chatId}</div>
                    {/*<div>Yesterday</div>*/}
                </div>
                {/*<div className='last-message'>Вас понял</div>*/}
            </div>
        </div>
    );
})

export default Chat;