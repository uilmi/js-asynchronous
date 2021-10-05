function showError() {
    return new Promise((resolve, reject) => {
        reject('Oh no!');
    });
}

showError()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));