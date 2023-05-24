import {makeAutoObservable} from "mobx";
import axios from "axios";

class ChatStore {
    id = 0
    chatId = ""
    messages = []
    receiptId = null // notification id
    host = 'https://api.green-api.com/waInstance'
    idInstance = ''
    token = ''

    constructor() {
        makeAutoObservable(this)
    }

    async addMessage(newMessage, isUser) {
        this.messages = [...this.messages, {is_user: isUser, text: newMessage}]
    }

    setData(idInstance, token) {
        this.idInstance = idInstance
        this.token = token
    }

    async getNotification() {
        let url = `${this.host}${this.idInstance}/receiveNotification/${this.token}`
        let notification = {}
        await axios.get(url)
            .then((response) => {
                response.data
                    ?
                    notification = response.data
                    :
                    console.error("There are not notifications!")
            })
            .catch(e => console.log(e))
        return notification
    }

    async getReceiptId() {
        let notification = {}
        try {
            notification = await this.getNotification()
            return notification.receiptId
        } catch (e) {
            return console.log(e)
        }
    }


    async setReceiptId() {
        try {
            this.receiptId = await this.getReceiptId()
        } catch (e) {
            return console.log(e)
        }
    }

    async deleteNotification() {
        await this.setReceiptId()
        let url = this.host + this.idInstance + `/deleteNotification/` + this.token + `/${this.receiptId}`

        try {
            await axios.delete(url)
            console.log(this.receiptId)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteAllNotifications() {
        try {
            while (await this.getReceiptId()) {
                await this.deleteNotification()
            }
            console.log("ALL NOTIFICATIONS ARE DELETED!")
        } catch (e) {
            console.log(e)
        }
    }

    async sendMessage(chatId, message) {
        let url = this.host + this.idInstance + `/SendMessage/` + this.token
        try {
            await axios.post(url, {
                "chatId": `${chatId}@c.us`,
                "message": message
            })
        } catch (e) {
            console.log(e)
        }
    }

    async recieveMessage() {
        let typeWebhook = ''
        let message = ''
        try {
            await this.getNotification().then(response => {
                message = response.body.messageData.extendedTextMessageData.text
                typeWebhook = esponse.body.typeWebhook
            })
            typeWebhook === "incomingMessageReceived"
                ?
                message = notification.messageData.extendedTextMessageData.text
                :
                console.log("NO MESSAGE")
            return message
        } catch (e) {
            console.log(e)
        }
    }

    async showMessage(){

    }

}

export default new ChatStore()