import {makeAutoObservable} from "mobx";

class NewUserModalStore {

    showPopup = false
    value = ''

    constructor() {
        makeAutoObservable(this)
    }

    switch(){
        this.showPopup = !this.showPopup
    }



}

export default new NewUserModalStore()