import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import NewUserModalStore from "../../store/NewUserModalStore";
import ApiStore from "../../store/ApiStore";

const NewUserModal = observer(() => {

        const [number, setNumber] = useState('')


        const handleNumber = event => {
            setNumber(event.target.value);
        };

        const addNumber = number => {
            ApiStore.setChatId(number)
            NewUserModalStore.switch()
            console.log(ApiStore.chatId)
        }

        return (
            <div className={NewUserModalStore.showPopup ? 'modal' : 'none'} id='new-user'
                 onClick={() => NewUserModalStore.switch()}>
                <div className="content" onClick={e => e.stopPropagation()}>
                    <div>Enter number of your friend</div>
                    <input type="text" placeholder="Type a number" onChange={handleNumber} value={number}/>
                    <button onClick={() => addNumber(number)}>
                        Add number
                    </button>
                </div>
            </div>
        );
    }
)

export default NewUserModal;