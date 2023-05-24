import './style.scss'
import Window from "./components/Window";
import MainModal from "./components/modal/mainModal";
import React, {useState} from "react";
import NewChatModal from "./components/modal/newChatModal";
import ApiStore from "./store/ChatStore";


function App() {

    // setInterval(() => ApiStore.deleteNotification(), 5000)
    return (
        <div className="App">
            <Window/>
            <MainModal/>
            <NewChatModal/>
            <button onClick={() => ApiStore.showMessage(true)}>click</button>
            <button onClick={() => ApiStore.deleteNotification()}>DELETE</button>
        </div>
    );
}

export default App;
