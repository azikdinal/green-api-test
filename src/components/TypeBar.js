import React, {useState} from 'react';
import apiStore from '../store/ApiStore'
import ModalStore from "../store/ModalStore";
import axios from "axios";

const TypeBar = () => {
    const [message, setMessage] = useState('')

    const handleChange = event => {
        setMessage(event.target.value);
    };

    // Send message func
    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            await apiStore.sendMessage(message, true)
        }
    };

    const deleteNotif = async () =>{
        for(let i = 121; i < 200; i++){
            await axios.get(`${apiStore.host}waInstance${apiStore.idInstanse}/receiveNotification/${apiStore.token}`)
                .then(response => {
                    console.log(response)
                })
                .catch(e => console.log(e))
            await axios.delete(`${apiStore.host}waInstance${apiStore.idInstanse}/deleteNotification/${apiStore.token}/${i}`)
                .then(response => {
                    console.log(response)
                })
                .catch(e => console.log(e))
        }
    }

    return (
        <div className='type-bar'>
            <button onClick={() => ModalStore.switch()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fill-rule="evenodd"
                          d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
            </button>
            <button onClick={() => apiStore.recieveMessage()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path
                        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
            </button>

            <input type="text" placeholder='Type a message' onChange={handleChange} value={message}
                   onKeyDown={handleKeyDown}/>
        </div>
    );
};

export default TypeBar;