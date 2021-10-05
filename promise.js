// const myPromise = new Promise(resolve => resolve('Hello world'));
// console.log(myPromise);

// myPromise.then(resolve => {
//     console.log('Hello me!');
// })


function isPasswordCorrect(password) {
    return new Promise((resolve, reject) => {
        console.log('Password:', password);

        if (password !== '1234') {
            reject('Wrong password!');
            return;
        }

        resolve('Password is correct!');
    })
}

isPasswordCorrect('1234')
    .then(resolve => console.log(resolve))
    .catch(reject => console.error(reject));

isPasswordCorrect('123456')
    .then(resolve => console.log(resolve))
    .catch(reject => console.error(reject));

