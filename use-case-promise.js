const mulai = () => {
    return new Promise((resolve, reject) => {
        resolve('Pesanan diterima');
    });
}

const orderMakanan = (hasil) => {
    console.log(hasil);

    return new Promise((resolve, reject) => {
        resolve('Memasak makanan');
    });
}

const memasak = (hasil) => {
    console.log(hasil);

    return new Promise((resolve, reject) => {
        resolve('Menyajikan makanan');
    });
}

const sajikan = (hasil) => {
    console.log(hasil);

    return new Promise((resolve, reject) => {
        resolve('Selesai');
    });
}

const selesai = (hasil) => {
    console.log(hasil);
}

mulai().then(orderMakanan).then(memasak).then(sajikan).then(selesai);