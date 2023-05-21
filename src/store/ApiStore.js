import {makeAutoObservable} from "mobx";
import axios from "axios";

class ApiStore {
    id = 0
    chatId = ""
    messages = []
    receiptId = null
    host = 'https://api.green-api.com/'
    idInstanse = null
    token = ''
    constructor() {
        makeAutoObservable(this)
    }

    setIdInstance(idInstanse){
        this.idInstanse = idInstanse
    }
    setToken(token){
        this.token = token
    }

    addMessage(newMessage, isUser) {
        this.messages = [...this.messages, {is: isUser, text: newMessage}]
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
            console.log(this.idInstanse)
            this.addMessage(message)
        }
        catch (e){
            console.log(e)
        }
    }

    async recieveMessage(){
            await axios.get(`${this.host}waInstance${this.idInstanse}/receiveNotification/${this.token}`)
                .then(response => {
                    this.addMessage(response.data.body.messageData.extendedTextMessageData.text, false)
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