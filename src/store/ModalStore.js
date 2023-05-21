import {makeAutoObservable} from "mobx";

class ModalStore {

    showPopup = true
    value = ''

    constructor() {
        makeAutoObservable(this)
    }

    switch(){
        this.showPopup = !this.showPopup
    }

}

export default new ModalStore()