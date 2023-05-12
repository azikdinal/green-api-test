const city = "Moscow"
const country = "Russia"

const objectA = {
	city,
	country,
	func(ad) {
		return 3
	},
	objectB:{
		home: "house"
	}
}



const objectC = {...objectA}

objectA.func = () => {

	return 10
}



f1 = (obj) => Object.assign({}, obj)

const objectD = f1(objectA)
objectD.objectB = "asdasd"
console.dir(objectD)