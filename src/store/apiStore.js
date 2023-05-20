import {makeAutoObservable} from "mobx";

class ApiStore {
    messages = []
    host = 'https://api.green-api.com/'
    id = 1101822336
    token = '95247822b8fe41d8b937cd71d959334c6719ee252dae4b4bac'
    constructor() {
        makeAutoObservable(this)
    }

    addMessage(newMessage) {
        this.messages = [...this.messages, newMessage]
    }




}

export default new ApiStore()