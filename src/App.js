import './style.scss'
import Window from "./components/Window";
import MainModal from "./components/modal/mainModal";
import React, {useState} from "react";
import NewUserModal from "./components/modal/newUserModal";


function App() {



    return (
        <div className="App">
            <Window/>
            <MainModal/>
            <NewUserModal/>
        </div>
    );
}

export default App;
