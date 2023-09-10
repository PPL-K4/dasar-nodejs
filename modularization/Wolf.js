class Wolf {
	constructor() {
		this.strength = Math.floor(Math.random()*100);
	}

	howl() {
		console.log('owooooooooo!')
	}
}


//TODO 2 -> untuk export class wolf
module.exports = Wolf;