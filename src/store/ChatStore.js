import {makeAutoObservable} from "mobx";
import axios from "axios";

class ChatStore {
    id = 0
    chatId = ""
    messages = []
    receiptId = null // notification id
    host = 'https://api.green-api.com/'
    idInstanse = 1101822336
    token = '95247822b8fe41d8b937cd71d959334c6719ee252dae4b4bac'


    GET_NOTIFICATION_URL = `${this.host}waInstance${this.idInstanse}/receiveNotification/` + this.token
    DELETE_NOTIFICATION_URL(receiptId) { return `${this.host}waInstance${this.idInstanse}/deleteNotification/${this.token}/${receiptId}`}
    SEND_MESSAGE_URL = `${this.host}waInstance${this.idInstanse}/SendMessage/${this.token}`

    constructor() {
        makeAutoObservable(this)
    }

    // async addMessageToChat(newMessage, isUser) {
    //     this.messages = [...this.messages, {is_user: isUser, text: newMessage}]
    // }

    setChatId(chatId) {
        this.chatId = chatId + "@c.us"
    }

    async getIdInstance() {
        let receiptId = null
        let url = this.GET_NOTIFICATION_URL

        await axios.get(url)
            .then((response) => {
                receiptId = response.data.receiptId
            })
            .catch(e => console.log(e))
        return receiptId
    }


    async deleteNotification(receiptId) {
        let url = this.DELETE_NOTIFICATION_URL(receiptId)

        await axios.delete(url)
            .then(response => {
                console.log(response)
            })
            .catch(e => console.log(e))
    }

    async sendMessage(chatId, message) {
        let url = this.SEND_MESSAGE_URL
        try {
            await axios.post(url, {
                "chatId": chatId,
                "message": message
            })
        } catch (e) {
            console.log(e)
        }
    }

}

export default new ChatStore()