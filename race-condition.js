// Race condition

function requestAjax() {
    console.log('Requesting Ajax...');
}

function displayUser() {
    console.log('Display user...');
}
console.log('------');


console.log('Hello');
let user = requestAjax();
displayUser(user);

setTimeout(() => {

}, 100);