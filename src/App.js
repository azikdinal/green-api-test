import './style.scss'
import Window from "./components/Window";
import MainModal from "./components/modal/mainModal";
import React, {useState} from "react";
import NewUserModal from "./components/modal/newUserModal";
import ApiStore from "./store/ChatStore";


function App() {


    return (
        <div className="App">
            {/*<Window/>*/}
            {/*<MainModal/>*/}
            {/*<NewUserModal/>*/}
            <button onClick={() => ApiStore.getIdInstance()}>click</button>
        </div>
    );
}

export default App;
