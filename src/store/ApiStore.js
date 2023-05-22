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

    setIdInstance(idInstanse) {
        this.idInstanse = idInstanse
    }

    setToken(token) {
        this.token = token
    }

    addMessage(newMessage, isUser) {
        this.messages = [...this.messages, {is_user: isUser, text: newMessage}]
    }

    setChatId(chatId) {
        this.chatId = chatId + "@c.us"
    }

    async sendMessage(message) {
        try {
            await axios.post(`${this.host}waInstance${this.idInstanse}/SendMessage/${this.token}`, {
                "chatId": this.chatId,
                "message": message
            })
            console.log(this.idInstanse)
            this.addMessage(message, true)
            await this.deleteFourNotif()
        } catch (e) {
            console.log(e)
        }
    }

    async recieveMessage() {
        await this.deleteNotif()
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

    async deleteNotif() {
        let receiptId = 0
        await axios.get(`${this.host}waInstance${this.idInstanse}/receiveNotification/${this.token}`)
            .then(async (response) => {
                if (!(response.data.body.messageData)) {
                    receiptId = response.data.receiptId
                    await axios.delete(`${this.host}waInstance${this.idInstanse}/deleteNotification/${this.token}/${receiptId}`)
                        .then(response => {
                            console.log(response)
                        })
                        .catch(e => console.log(e))
                    return this.deleteNotif()
                }
            })
            .catch(e => console.log(e))

    }


    async deleteFourNotif() {
        let receiptId = 0

        for (let i = 0; i < 5; i++) {
            await axios.get(`${this.host}waInstance${this.idInstanse}/receiveNotification/${this.token}`)
                .then((response) => {
                    receiptId = response.data.receiptId
                })
                .catch(e => console.log(e))
            await axios.delete(`${this.host}waInstance${this.idInstanse}/deleteNotification/${this.token}/${receiptId}`)
                .then(response => {
                    console.log(response)
                })
                .catch(e => console.log(e))
        }
    }
}

export default new ApiStore()