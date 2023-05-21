import React, {useState} from 'react';
import apiStore from '../store/apiStore'
import axios from "axios";

const TypeBar = () => {
    const [message, setMessage] = useState('')

    const handleChange = event => {
        setMessage(event.target.value);
    };

    // Send message func
    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            await apiStore.sendMessage(message)
        }
    };

    // const deleteNotif = async () =>{
    //     for(let i = 70; i < 200; i++){
    //         await axios.get(`${apiStore.host}waInstance${apiStore.idInstanse}/receiveNotification/${apiStore.token}`)
    //             .then(response => {
    //                 console.log(response)
    //             })
    //             .catch(e => console.log(e))
    //         await axios.delete(`${apiStore.host}waInstance${apiStore.idInstanse}/deleteNotification/${apiStore.token}/${i}`)
    //             .then(response => {
    //                 console.log(response)
    //             })
    //             .catch(e => console.log(e))
    //     }
    // }

    return (
        <div className='type-bar'>
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