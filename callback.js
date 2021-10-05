const fs = require("fs");
const option = { encoding: "utf-8" };

// method 1
const callback1 = (err, data) => {
    console.log('Aku muncul kedua-1');

    if (err) {
        return console.log('Error:', err.message);
    }

    console.log('Isi File:', data);
};

// method 2
function callback2(err, data) {
    console.log('Aku muncul kedua-2');

    if (err) {
        return console.log('Error:', err.message);
    }

    console.log('Isi File:', data);
};

console.log('Calling callback1');
fs.readFile('./files/text.txt', option, callback1);

console.log('Calling callback2');
fs.readFile('./files/text.txt', option, callback2);

console.log('Aku muncul pertama');

// fs Sync, 2 parameters
const data = fs.readFileSync('./files/text.txt', option);
console.log(`from readFileSync: ${data}`);