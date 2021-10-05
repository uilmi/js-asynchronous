// Asynchronous example

console.log("Hello binarian!");
setTimeout(() => {
    console.log("Javascript")
}, 100);
console.log("Developer");


console.log('Aku keluar pertama');

setTimeout(() => console.log('Aku keluar setelah 3 detik'), 3000);
setTimeout(() => console.log('Apakah aku yang kedua?'), 0);

console.log('Apakah aku yang ketiga?');

let a = 0;

const iniInterval = setInterval(() => {
    console.log(`${++a} kali jalan`)
    if (a === 10) clearInterval(iniInterval)
}, 100);

console.log('Apakah jalan sebelum setInterval?');