// TODO : tampilkan teks pada notes.txt pada console.
// install fs
const fs = require('fs');

const fileReadCallback = (error,data) => {
	if(error) {
		console.log ('Gagal membaca berkas');
		return;
	}
	console.log(data);

};
// path.resolve (__dirname, 'notes.txt');
fs.readFile('notes.txt', 'UTF-8', fileReadCallback);


// const data = fs.readFileSync('./notes.txt', 'UTF-8');

// console.log(data);

