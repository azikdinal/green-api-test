import React from 'react';
import image from '../assets/image.jpg'

const Chat = () => {
    return (
        <div className='chat'>
            <div className='image'>
                <img className='img' src={image} alt="" height={50}/>
            </div>
            <div className='content'>
                <div className='fst-line'>
                    <div>+7 911 727-89-33</div>
                    <div>Yesterday</div>
                </div>
                <div className='last-message'>Вас понял</div>
            </div>
        </div>
    );
};

export default Chat;