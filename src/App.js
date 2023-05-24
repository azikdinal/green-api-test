import './style.scss'
import Window from "./components/Window";
import MainModal from "./components/modal/mainModal";
import React, {useState} from "react";
import NewUserModal from "./components/modal/newUserModal";
import ApiStore from "./store/ChatStore";


function App() {

    // setInterval(() => ApiStore.deleteNotification(), 5000)
    return (
        <div className="App">
            <Window/>
            <MainModal/>
            <NewUserModal/>
            <button onClick={() => ApiStore.recieveMessage()}>click</button>
            <button onClick={() => ApiStore.deleteNotification()}>DELETE</button>
        </div>
    );
}

export default App;
