/* TODO :
Buatlah program untuk membaca teks input.txt dan menuliskan ulang pada berkas output.txt
menggunakan teknik readable stream dan writeable stream.
*/
const fs= require('fs');

//memanggil file yang akan dibaca 
const readableStream = fs.createReadStream('./input.txt', {
	highWaterMark: 29 //membatasi karakter yang dibaca
});

//membuat file output
const writableStream = fs.createWriteStream('output.txt');

//mengcopy isi file dari readable ke writeable
readableStream.pipe(writableStream);

//menampilkan data
readableStream.on ('data', (chunk) => {
	try {
		process.stdout.write(`[${chunk}]`);
	} catch(error) {
		console.error(error);
		//catch the error when the cunk cannot be read.
	}

});

//status selesai
readableStream.on ('end',() => {
	console.log('\nDone');
});


//status file output telah dibuat
writableStream.on('finish', () =>{
	console.log('\nfile output telah dibuat.');
});

//status jika file gagal dibuat
writableStream.on('error', (error) =>{
	console.log('file gagal dibuat.', error);
});