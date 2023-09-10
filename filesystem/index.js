// TODO : tampilkan teks pada notes.txt pada console.
// install fs
const fs = require('fs'); //memanggil package fs

// ketentuan jika gagal membaca file
const fileReadCallback = (error,data) => {
	if(error) {
		console.log ('Gagal membaca berkas');
		return;
	}
	console.log(data);

};

// memanggil file untuk di callback
fs.readFile('notes.txt', 'UTF-8', fileReadCallback);

