// function readBooksPromise(time, book) {
//     console.log("saya mulai membaca " + book.name)
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             let sisaWaktu = time - book.timeSpent
//             if (sisaWaktu >= 0) {
//                 console.log("saya sudah selesai membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
//                 resolve(sisaWaktu)
//             } else {
//                 console.log("saya sudah tidak punya waktu untuk baca " + book.name)
//                 reject(sisaWaktu)
//             }
//         }, book.timeSpent)
//     })
// }

// var books = [
//     { name: 'LOTR', timeSpent: 3000 },
//     { name: 'Fidas', timeSpent: 2000 },
//     { name: 'Kalkulus', timeSpent: 4000 }
// ]

// function readingBooks(sisaWaktu, index) {
//     readBooksPromise(sisaWaktu, books[index])
//         .then(function (sisaWaktu) {
//             if (index < books.length - 1) {
//                 readingBooks(sisaWaktu, index + 1)
//             }
//         })
// }

// readingBooks(10000, 0);

/* Promise 2 */
function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books = [
            { name: "shinchan", totalPage: 50, isColorful: true },
            { name: "Kalkulus", totalPage: 250, isColorful: false },
            { name: "doraemon", totalPage: 40, isColorful: true },
            { name: "algoritma", totalPage: 250, isColorful: false },
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason = new Error("Maaf buku di bawah 40 halaman tidak tersedia")
            reject(reason);
        }
    });
}
async function periksaBuku(colorful, amountOfPage) {
    try {
        var res = await filterBooksPromise(colorful, amountOfPage)
        console.log(res)
    } catch (err) {
        console.log(err.message)
    }
}
periksaBuku(true, 40)
periksaBuku(false, 250)
periksaBuku(true, 30)

