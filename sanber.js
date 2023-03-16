/* Template Literals */
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);

/* Concantenation */
let kataPertama = "saya";
let kataKedua = "senang";
let kataKetiga = "belajar";
let kataKeempat = "javascript";

console.log(kataPertama.concat(" ", kataKedua.charAt(0).toUpperCase(), kataKedua.substring(1), " ", kataKetiga.substring(0, 6), kataKetiga.charAt(6).toUpperCase(), " ", kataKeempat.toUpperCase()));

/* Changing data types */
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

/* Accessing String Characters */
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

/* Sentence Slicing */
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil)

/* Two Conditional */
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

/* Two Simple Loop */
console.log("LOOPING PERTAMA");
for (i = 2; i <= 20; i += 2) {
    console.log(`${i} - I love coding`)
}

console.log("LOOPING KEDUA");
for (i = 20; i >= 2; i -= 2) {
    console.log(`${i} - I will become a frontend developer`)
}

/* Looping with Condition */
for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - BERKUALITAS`)
    } else if (i % 3 === 0 && i % 2 !== 0) {
        console.log(`${i} - I LOVE CODING`)
    } else {
        console.log(`${i} - SANTAI`)
    }
}

/* Triangle Looping */
// for (i = 1; i <= 7; i++) {
//     console.log("#".repeat(i))
// }
let tag = "";
for (i = 1; i <= 7; i++) {
    for (j = 1; j <= i; j++) {
        tag += "#";
    }
    tag += "\n"
}
console.log(tag);

/* Destructuring Array */
let dataPeserta = ["john", "laki-laki", "programmer", "30"]

let [nama, jenisKelamin, profesi, umur] = dataPeserta;
let output = `Nama saya ${nama}, saya ${jenisKelamin} berumur ${umur} bekerja sebagai seorang ${profesi}.`;

console.log(output)