console.log("Hello binarian!");
setTimeout(() => {
    console.log("Javascript")
}, 10);
console.log("Developer");


function requestAjax() {
    console.log('Requesting Ajax...');
}

function displayUser() {
    console.log('Display user...');
}
console.log('------');

// Race condition
console.log('Hello');
let user = requestAjax();
displayUser(user);

setTimeout(() => {

}, 100);

setTimeout(() => {

}, 100);

