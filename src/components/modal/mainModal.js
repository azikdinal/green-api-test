import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import ModalStore from "../../store/ModalStore";
import ApiStore from "../../store/ApiStore";

const MainModal = observer(() => {
        const [idInstance, setIdInstance] = useState(null)
        const [token, setToken] = useState('')

        const [errorMessage, setErrorMessage] = useState(false)

        const handleId = event => {
            setIdInstance(event.target.value);
        };

        const handleToken = event => {
            setToken(event.target.value);
        };

        const sendData = (idInstance, token) => {
            if (idInstance && token) {
                ApiStore.setIdInstance(idInstance)
                ApiStore.setToken(token)
                ModalStore.switch()
                console.log(ApiStore.idInstanse)
            } else {
                setErrorMessage(true)
            }
        }

        return (
            <div className={ModalStore.showPopup ? 'modal' : 'none'} onClick={() => ModalStore.switch()}>
                <div className="content" onClick={e => e.stopPropagation()}>
                    <div>Enter your data</div>
                    <input type="text" placeholder="idInstance" value={idInstance} onChange={handleId}/>
                    <input type="text" placeholder="Token" value={token} onChange={handleToken}/>
                    <button onClick={() => sendData(idInstance, token)}>Sign up</button>
                    <div className={errorMessage ? "error-message" : 'none'}>
                        You have not entered data!
                    </div>
                </div>
            </div>
        );
    }
)

export default MainModal;