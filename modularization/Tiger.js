class Tiger {
	constructor() {
		this.strength = Math.floor(Math.random()*100);
	}

	growl() {
		console.log('grrrrrrrrrrr!')
	}
}


//TODO 1 -> untuk export class tiger
module.exports = Tiger;