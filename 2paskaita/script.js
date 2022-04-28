
// !!! Patikrinti rašybos klaidas
// 1. Patikrinti ar failas yra įkeltas į atitinkamą folderį
// 2. Patikrinti ar esu tinkamam folderyje - komanda ls (:C/Users/Rokas/JS-VIGI26/2_paskaita)
// 3. Patikrinti ar išsaugojau failą(-us) - baltas taškas prie failo pavadinimo
// 4. Patikrinti ar įrašiau console.log()
// 5. Patikrinti ar tinkamai paleidau failą "node script.js"
// 6. Patikrinti terminalo išmetamą žinutę

// "cd 1_paskaita" - eina į folderį
// "cd .." - grįžta atgal per vieną folderį
// "ls" - išveda visus folderio failus

// 1 uzd atsakymas C

// const money = 100.5;

// const price = 105.5;

// const currency = "$";



// if (money > price) {

// const change = money - price;

// console.log("Tu nusipirkai daiktą. Tavo grąža: " + currency + change); // A

// } else if (money === price) {

// console.log("Tu nusipirkai daiktą. Tau nebeliko pinigų :)"); // B

// } else {

// const startLabel = "Tau neužteko pinigų daiktui nusipirkti. Tau trūksta: ";

// const missingMoney = price - money;

// console.log(startLabel + currency + missingMoney); // C

// }

// kendal received a silver medal 

// const runner = "Kendyll";

// const position = 2;

// let medal = "pat on the back";



// if (position === 1) {

// medal = "gold";

// } else if (position === 2) {

// medal = "silver";

// } else if (position === 3) {

// medal = "bronze";

// }



// console.log(runner + " received a " + medal + " medal.");

const number = 2;



// if (number % 2 == 0) {

// // even - lyginis

// console.log(number + " skaicius yra lyginis");

// } else {

// // odd - nelyginis

// console.log(number + " skaicius yra nelyginis");

// }

let peopleCount = 4;

if (peopleCount < 1) {
    console.log("ne grupe");
}
if (peopleCount == 1) {
    console.log("solo");
}
if (peopleCount == 2) {
    console.log("duetas");
}
if (peopleCount == 3) {
    console.log("trio");
}
if (peopleCount == 4) {
    console.log("kvartetas");
}
if (peopleCount > 4) {
    console.log("didele grupe");
}
