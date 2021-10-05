const mulai = (selanjutnya) => {
    selanjutnya('Pesanan diterima');
}

const orderMakanan = (hasil, selanjutnya) => {
    console.log(hasil);

    selanjutnya('Memasak makanan');
}

const memasak = (hasil, selanjutnya) => {
    console.log(hasil);

    selanjutnya('Menyajikan makanan');
}

const sajikan = (hasil) => {
    console.log(hasil);

    console.log('Selesai');
}

mulai((hasilPertama) => {
    orderMakanan(hasilPertama, (hasilKedua) => {
        memasak(hasilKedua, (hasilKetiga) => {
            sajikan(hasilKetiga, (hasilTerakhir) => {
                selesai(hasilTerakhir);
            })
        })
    })
});