// One line komentaras

/* 
Sveiki čia yra
Multi line komentaras
*/

// Sukuriam kintamuosius
let myName;
let age;
let mySurname
let result
let average
let percent

// console.log(myName) // undefined - kai kintamasis yra sukurtas, bet neturi priskirtos reiksmes


// Priskiriam kintamiejam reikšmes
myName = "Liudmila"; // string - zodis tarp kabuciu
mySurname ="Liuliu"
fullName = myName + " " + mySurname; // sudetis - tarp tokiu paciu tipu
age = 19; // number - skaicius (gali buti sveikas, arba su desimtosiomis)
result = age + age + age - 9; // 19+19+19 - 9=38
result = result + result; // 38+38 = 96
average = (8+8+9+7+9+10)/6; // 51/6 = 8.5
// is viso surinkta 60 eu, as atnesiau 20 eu
percent = 100*20/60;

// console.log(myName)

// console.log("9"+ "9"); //99
// console.log(9+9); //18
// console.log("760" + 40); // 76040
// console.log(greetings);
//sukuriam kintamuosius su const

const myDogName="Kleika"
const myDogAge=15;
const myDoubleDogName = myDogName + myDogName;
const greetings = "Sveikas" + " " + myDogName + " ";

// 1. naudoti let tik tada kai reiksme yra kintanti, kitais atvejais naudoti const
// 2. sukurus kintamaji visada priskiriam pradine reiksme
// 3. Visada naudojame tryguba lygybe
// visos neigiamos reiksmes yra undifined, null - neigiama reiksme, "" - neigiama reiksme, false


// string, numbers, boolean (bool)

const yes=true;
const no = false;
let isAdult = true;

// console.log("Rokas"=="Rokas"); // rokas=Rokas = false
// console.log(10!=10) //10 nelygu 10 = false
// console.log(5 !=4) //5 nelygu 4 = true
// console.log("5"==5) // true nes dviguba lygibe ne tikrina reiksmiu
// console.log("5"===5) // false nes tryguba lygibe saugesne, nes patikrina ar reiksmes vienodo tipo

console.log("4"!=4);
console.log("4"!==4);