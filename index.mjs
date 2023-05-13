'use strict'


const obj = {
	city:"Moscow"
}

class NumbersArray extends Array{


	sum(){
		return this.reduce((el, acc) => acc += el, 0)
	}
}

const ex = new NumbersArray(1,2,3)


const arr = [1,2,3]

console.dir(ex.reduce((el, acc) => acc += el, 0))
