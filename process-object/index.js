const initialMemoryUsage = process.memoryUsage();
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i=0; i<=10000; i++) {
// coba perulangan
}

const currentMemoryUsage = process.memoryUsage();

console.log(`Hai, ${yourName}`);
console.log(`Mode Environtment: ${initialMemoryUsage}`);
console.log(`Pengguna memory dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);