
// const key = 4;

// switch (key) {
//     case 1:
//         console.log("Pirmadienis");
//         break;
//     case 2:
//         console.log("Antradienis");
//         break;
//     case 3:
//         console.log("treciad");
//         break;
//     case 4:
//         console.log("ketvirtad");
//         break;
//     case 5:
//         console.log("penktad");
//         break;
//     case 6:
//     case 7:
//         console.log("savaitgalis")
//         break;
//     default:
//         console.log("blogai irasyta savaites diena");
//         break;
// }

const car = "bmw";

switch (car) {
    case "vw":
    case "audi":
    case "bentley":
    case "bugatti":
        console.log("VW group");
        break;
    case "bmw":
    case "mini":
    case "rolls":
        console.log("BMW Group")
        break;


    default:
        break;
}

userInput= "Obuolys";

switch (userInput) {
    case "Kriause":
    case "Slyva":
    case "Obuolys":
    case "Braske":
    case "Granatas":
        console.log("vaisius")
        break;
    case "Agurkas":
    case "Bulve":
    case "Pomidoras":
    case "Rope":
    case "morka":
        console.log("Darzove")
        break

    default:
        break;
}




// if (number === 1) {

//     console.log("Pirmadienis");
    
//     } else if (number === 2) {
    
//     console.log("Antadienis");
    
//     } else if (number === 3) {
    
//     console.log("Treciadienis");
    
//     } else if (number === 4) {
    
//     console.log("Ketvirtadienis");
    
//     } else if (number === 5) {
    
//     console.log("Penktadienis");
    
//     } else if (number === 6 || number === 7) {
    
//     console.log("Savaitgalis");
    
//     } else {
    
//     console.log("Blogai irasyta savaites diena");
    
//     }

// const age =18;
// const legalAge = 18;
// const drinkingAge = 20;
// const celsiusDegrees =24;

// let result = "pilnametis";
// if (age < legalAge) {
//     result = "nepilnamets"
// }
// //                      if salyga      patenkina         else
// const resultTernary = age < legalAge ? "nepilnametis" : "pilnametis";
// const drink  = age >= drinkingAge ? "beer" : "milk";
// const weather = celsiusDegrees <= 0 ? "Cold" : celsiusDegrees <= 25 ? "warm" : "hot";
// console.log(drink);
// console.log (weather);
// console.log(resultTernary);





// naudoti template string tik tada kai dedame kintamuosius i vidu.

const myName = "Liudmila";

const nameLength = myName < 5 ? "short name" : "long name";
console.log(nameLength);


const surname = "Liu";

// console.log(myName + " " + surname);
// console.log(`${myName} ${surname}`);

const fullNameOld = myName + " " + surname;
const fullNameNew = `${myName} ${surname}`;

 const clientAge = 21;
 const legalAge = 20;

 const drive = clientAge > legalAge ? "Can drive" : "Cant drive";
console.log(drive);

const phone = "iPhone";
const isIphoneUser = phone ==="iPhone";