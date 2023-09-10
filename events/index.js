const {EventEmitter} = require('events'); /*TODO 1 -> memanggil package event*/

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
	console.log(`Happy Birthday ${name}!`);
}

//TODO 2 -> membuat Variable myEmitter
const myEmitter = ({name}) => {
	birthdayEventListener(name);
}

//TODO 3 -> membuat event birthday untuk membangkitkan variable myEmitter
myEventEmitter.on('birthday', myEmitter);

//TODO 4 -> membangkitkan birthday dengan method emit
myEventEmitter.emit('birthday', {name : 'Fakeh'});