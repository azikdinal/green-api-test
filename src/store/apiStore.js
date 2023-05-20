import {makeAutoObservable} from "mobx";
import axios from "axios";

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

    async sendMessage(message){
        try{
            const response = await axios.post(`https://api.green-api.com/waInstance1101822336/SendMessage/95247822b8fe41d8b937cd71d959334c6719ee252dae4b4bac`, {
                "chatId": "79887206320@c.us",
                "message": message
            })
            this.addMessage(message)
        }
        catch (e){
            console.log(e)
        }
    }

    async recieveMessage(){
        await axios.get(`https://api.green-api.com/waInstance1101822336/receiveNotification/95247822b8fe41d8b937cd71d959334c6719ee252dae4b4bac`)
            .then(response => {
                this.addMessage(response.data.body.messageData.extendedTextMessageData.text)
            })
            .catch(e => console.log(e))
    }

}

export default new ApiStore()