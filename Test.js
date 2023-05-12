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



const objectC = {...objectA}

objectC.objectB.cui = "sadas"

console.log(objectA)