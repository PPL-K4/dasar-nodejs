const {EventEmitter} = require('events');

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
	console.log(`Happy Birthday ${name}!`);
}

const myEmitter = ({name}) => {
	birthdayEventListener(name);
}

myEventEmitter.on('birthday', myEmitter);

myEventEmitter.emit('birthday', {name : 'Fakeh'});