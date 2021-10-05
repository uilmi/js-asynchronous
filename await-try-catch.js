let punyaBuku = false;

// Function beli buku
const beliBuku = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            punyaBuku = true;
            resolve();
        }, 1000);
    })
};

// Function gambar meminta judul sebagai parameter
// Mengembalikan Promise
const gambar = (judul) => {
    if (!punyaBuku) {
        return Promise.reject('Gak punya buku');
    }

    return Promise.resolve({
        id: Date.now(),
        title: judul,
        createdAt: Date()
    });
}

// Function utama akan menjalankan function yang lain
async function main() {
    try {
        if (!punyaBuku) await beliBuku();
        const hasilGambar = await gambar("Doraemon");
        console.log(hasilGambar)
    } catch (error) {
        console.log('Beli buku dulu dong!')
    }
}

main();