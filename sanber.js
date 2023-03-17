/* Template Literals */
console.log("Template Literals");
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);
console.log("\n")

/* Concantenation */
console.log("Concantenation");
let kataPertama = "saya";
let kataKedua = "senang";
let kataKetiga = "belajar";
let kataKeempat = "javascript";

console.log(kataPertama.concat(" ", kataKedua.charAt(0).toUpperCase(), kataKedua.substring(1), " ", kataKetiga.substring(0, 6), kataKetiga.charAt(6).toUpperCase(), " ", kataKeempat.toUpperCase()));
console.log("\n")

/* Changing data types */
console.log("Changing data types");
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let alasSegitiga = "6";
let tinggiSegitiga = "7";

let kelilingPersegiPanjang = parseInt(panjangPersegiPanjang) * 2 + parseInt(lebarPersegiPanjang) * 2;
console.log(kelilingPersegiPanjang);

let luasSegitiga = parseInt(alasSegitiga) * parseInt(tinggiSegitiga) / 2;
console.log(luasSegitiga);
let sentences = 'wah javascript itu keren sekali';

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 18);
let fourthWords = sentences.substring(19, 24);;
let fifthWords = sentences.substring(25, 31);

console.log('Kata Pertama: ' + firstWords);
console.log('Kata Kedua: ' + secondWords);
console.log('Kata Ketiga: ' + thirdWords);
console.log('Kata Keempat: ' + fourthWords);
console.log('Kata Kelima: ' + fifthWords);
console.log("\n")

/* Accessing String Characters */
console.log("Accessing String Characters");
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]
var seventhWord = sentence[23] + sentence[24];
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34]

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord)
console.log("\n")

/* Sentence Slicing */
console.log("Sentence Slicing")
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil)
console.log("\n")

/* Two Conditional */
console.log("Two Conditional")
var nilaiJohn = 80;
var nilaiDoe = 50;

if (nilaiJohn >= 80) {
    console.log("A");
} else if (nilaiJohn >= 70) {
    console.log("B")
} else if (nilaiJohn >= 60) {
    console.log("C")
} else if (nilaiJohn >= 50) {
    console.log("D")
} else {
    console.log("E")
}

if (nilaiDoe >= 80) {
    console.log("A");
} else if (nilaiDoe >= 70) {
    console.log("B")
} else if (nilaiDoe >= 60) {
    console.log("C")
} else if (nilaiDoe >= 50) {
    console.log("D")
} else {
    console.log("E")
}
console.log("\n")

/* Two Simple Loop */
console.log("Two Simple Loop")
console.log("LOOPING PERTAMA");
for (i = 2; i <= 20; i += 2) {
    console.log(`${i} - I love coding`)
}

console.log("LOOPING KEDUA");
for (i = 20; i >= 2; i -= 2) {
    console.log(`${i} - I will become a frontend developer`)
}

/* Looping with Condition */
console.log("Looping with Condition")
for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - BERKUALITAS`)
    } else if (i % 3 === 0 && i % 2 !== 0) {
        console.log(`${i} - I LOVE CODING`)
    } else {
        console.log(`${i} - SANTAI`)
    }
}
console.log("\n")

/* Triangle Looping */
// for (i = 1; i <= 7; i++) {
//     console.log("#".repeat(i))
// }
console.log("Triangle Looping")
let tag = "";
for (i = 1; i <= 7; i++) {
    for (j = 1; j <= i; j++) {
        tag += "#";
    }
    tag += "\n"
}
console.log(tag);
console.log("\n")

/* Destructuring Array */
console.log("Destructuring Array")
let dataPeserta = ["john", "laki-laki", "programmer", "30"]

let [nama, jenisKelamin, profesi, umur] = dataPeserta;
let output = `Nama saya ${nama}, saya ${jenisKelamin} berumur ${umur} bekerja sebagai seorang ${profesi}.`;

console.log(output)
console.log("\n")

/* Take Array Elements */
console.log("Take Array Elements")

let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]

for (i = 0; i < array1.length; i++) {
    console.log(array1[i])
}
console.log("\n")

/* Take Array Elements with Condition */
console.log("Take Array Element with Condition")
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
        console.log(array2[i])
    }
}
console.log("\n")

/* Element Deprecation and Join into a String */
let kalimat = ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
kalimat.shift();
console.log(kalimat.join(" "))
console.log("\n")

/* Add and Sort Element to Array */
var sayuran = []
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge")
sayuran.sort()
for (i = 0; i < sayuran.length; i++) {
    console.log(`${i + 1} - ${sayuran[i]}`)
}
console.log("\n")

/* Create Funtion with Formula */
luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
}
kelilingPersegiPanjang = (panjang, lebar) => {
    return 2 * panjang + 2 * lebar
}
volumeBalok = (panjang, lebar, tinggi) => {
    return panjang * lebar * tinggi;
}

let panjang = 12
let lebar = 4
let tinggi = 8

let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang)
console.log(HasilkelilingPersegiPanjang)
console.log(HasilvolumeBalok)
console.log("\n")

/* Create return String Function + rest parameter */
introduce = (...bioData) => {
    let [nama, umur, jenisKelamin, profesi] = bioData;
    if (jenisKelamin === "Laki-Laki") {
        jenisKelamin = "Pak"
    } else {
        jenisKelamin = "Bu"
    }
    return (`${jenisKelamin} ${nama} adalah seorang ${profesi} yang berusia ${umur}`)
}
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan);
console.log("\n")

/* Turning Object into Array */
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)
console.log("\n")

/* Create Array of Object and Filter */
let buah = [
    { nama: 'Nanas', warna: 'Kuning', adaBijinya: false, harga: 9000 },
    { nama: 'Jeruk', warna: 'Oranye', adaBijinya: true, harga: 8000 },
    { nama: 'Semangka', warna: 'Hijau & Merah', adaBijinya: true, harga: 10000 },
    { nama: 'Pisang', warna: 'Kuning', adaBijinya: false, harga: 5000 },
]

console.log(buah.filter(buah => buah.adaBijinya === false))
console.log("\n")

/* Object Destructuring */
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
const phoneBrand = phone.brand;
const phoneName = phone.name;
const year = phone.year;
const colorBlack = phone.colors[2];
const colorBronze = phone.colors[0];
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)
console.log("\n")

/* Spread Operator on Object */
let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

let dataBuku = { ...buku, ...dataBukuTambahan, warnaSampul: [...buku.warnaSampul, ...warna] }
console.log(dataBuku)

/* Create Function to Add Data to Array */
tambahDataFilm = (nama, durasi, genre, tahun) => {
    dataFilm.push({ nama, durasi, genre, tahun })
}

let dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)