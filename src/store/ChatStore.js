import {makeAutoObservable} from "mobx";
import axios from "axios";
import {getMessage} from "@testing-library/jest-dom/dist/utils";

class ChatStore {
    messages = []
    host = 'https://api.green-api.com/waInstance'

    constructor() {
        makeAutoObservable(this)
    }


    setData(idInstance, token) {
        this.idInstance = idInstance
        this.token = token
    }

    setChatId(chatId) {
        this.chatId = chatId + `@c.us`
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

    async sendMessage(message) {
        let url = this.host + this.idInstance + `/SendMessage/` + this.token
        try {
            await axios.post(url, {
                "chatId": this.chatId,
                "message": message
            })
            return this.showMessage(message, true)
        } catch (e) {
            console.log(e)
        }
    }

    async recieveMessage() {
        let url = this.host + this.idInstance + `/SendMessage/` + this.token

        let message = ''
        try {
            message = this.getRecievedMessage()
            await this.showMessage(message, false)
            console.log(message)
        } catch (e) {
            console.log(e)
        }
    }

    async isMessageRecieved() {
        let typeWebhook = ''
        try {
            await this.getNotification()
                .then(response => {
                    typeWebhook = response.body.typeWebhook
                })
            if (typeWebhook === "incomingMessageReceived") {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log(e)
        }
    }

    async getMessage(message) {
        await this.getNotification()
            .then(response => {
                message = response.data.body.messageData.extendedTextMessageData.text
            })
            .catch(e => console.log(e))
        return message
    }

    async getRecievedMessage() {
        let message = ''

        try {
            await this.isMessageRecieved()
                ?
                message = await this.getMessage(message)
                :
                console.log("THERE IS NOT RECIEVED MESSAGE!")
            return message
        } catch (e) {
            console.log(e)
        }
    }

    async showMessage(message, isUser) {
        try {
            return this.messages = [...this.messages, {is_user: isUser, text: message}]
        } catch (e) {
            return console.log(e)
        }
    }

}

export default new ChatStore()