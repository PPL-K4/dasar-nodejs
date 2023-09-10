/* TODO :
Buatlah program untuk membaca teks input.txt dan menuliskan ulang pada berkas output.txt
menggunakan teknik readable stream dan writeable stream.
*/
const fs= require('fs');

const readableStream = fs.createReadStream('./input.txt', {
	highWaterMark: 29
});

readableStream.on ('readable', () => {
	try {
		process.stdout.write(`[${readableStream.read()}]`);
	} catch(error) {
		//catch the error when the cunk cannot be read.
	}

});

readableStream.on ('end',() => {
	console.log('Done');
});

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('input.txt\n');
writableStream.write('input.txt\n');
writableStream.end('done');
