import React, {useState} from 'react';
import axios from "axios";
import apiStore from '../store/apiStore'

const TypeBar = () => {
    const [message, setMessage] = useState('')

    const handleChange = event => {
        setMessage(event.target.value);

    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter')  {
            fetchPosts()
        }
    };


    const host = apiStore.host
    const id = apiStore.id
    const token = apiStore.token


    const fetchPosts = async () => {
        try{
            const response = await axios.post(`https://api.green-api.com/waInstance${id}/SendMessage/${token}`, {
                "chatId": "79887206320@c.us",
                "message": message
            })
            apiStore.addMessage(message)
            console.log(response.data)
        }
        catch (e){
            console.log(e, host)
        }

    }


    return (
        <div className='type-bar'>
               <input type="text" placeholder='Type a message' onChange={handleChange} value={message} onKeyDown={handleKeyDown}/>
        </div>
    );
};

export default TypeBar;