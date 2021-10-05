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

const jalankan = async () => {
    const hasilPertama = await mulai();
    const hasilKedua = await orderMakanan(hasilPertama);
    const hasilKetiga = await memasak(hasilKedua);
    const hasilTerakhir = await sajikan(hasilKetiga);
    await selesai(hasilTerakhir);
}

jalankan();