/* TODO :
Buatlah program untuk membaca teks input.txt dan menuliskan ulang pada berkas output.txt
menggunakan teknik readable stream dan writeable stream.
*/
const fs= require('fs');

const readableStream = fs.createReadStream('./input.txt', {
	highWaterMark: 29
});

const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

readableStream.on ('data', (chunk) => {
	try {
		process.stdout.write(`[${chunk}]`);
	} catch(error) {
		console.error(error);
		//catch the error when the cunk cannot be read.
	}

});

readableStream.on ('end',() => {
	console.log('\nDone');
});



writableStream.on('finish', () =>{
	console.log('\nfile output telah dibuat.');
});

writableStream.on('error', (error) =>{
	console.log('file gagal dibuat.', error);
});