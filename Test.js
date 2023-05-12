const city = "Moscow"
const country = "Russia"


const objectA = {
	city,
	country,
	func() {
		return 3
	},
	objectB:{
		home: "house"
	}
}

console.log(objectA.func())