import {makeAutoObservable} from "mobx";
import axios from "axios";

class ApiStore {
    id = 0
    chatId = "79887206320@c.us"
    messages = []
    receiptId = 0
    host = 'https://api.green-api.com/'
    idInstanse = 1101822336
    token = '95247822b8fe41d8b937cd71d959334c6719ee252dae4b4bac'
    constructor() {
        makeAutoObservable(this)
    }

    addMessage(newMessage) {
        this.messages = [...this.messages, {id: this.id + 1, text: newMessage}]
    }

    setChatId(chatId){
        this.chatId = chatId + "@c.us"
    }

    async sendMessage(message){
        try{
            await axios.post(`${this.host}waInstance${this.idInstanse}/SendMessage/${this.token}`, {
                "chatId": this.chatId,
                "message": message
            })
            this.addMessage(message)
        }
        catch (e){
            console.log(e)
        }
    }

    async recieveMessage(){
            await axios.get(`${this.host}waInstance${this.idInstanse}/receiveNotification/${this.token}`)
                .then(response => {
                    this.addMessage(response.data.body.messageData.extendedTextMessageData.text)
                    this.receiptId = response.data.receiptId
                    console.log(response)
                })
                .catch(e => console.log(e))
            await axios.delete(`${this.host}waInstance${this.idInstanse}/deleteNotification/${this.token}/${this.receiptId}`)
                .then(response => {
                    console.log(response)
                })
                .catch(e => console.log(e))
    }

}

export default new ApiStore()