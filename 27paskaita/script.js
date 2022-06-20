// const userName = 'Rokas';

// const goodbye = `Viso gero ${userName}, lauksime sugriztant`;
// // console.log(goodbye)

// const salary = 5000;
//  // console.log(`$${salary}`);

// //  const price = 10;
//   //if (price > 10) {
//      //console.log('perku')
//  //} else {

//  //console.log('neperku')
//  //}

//  const price = 11;
//  const result = (price > 10) ? "Perku" : "Neperku";

//     //console.log(result);

//  const hours = 17

//  const resul = (hours>=0 && hours <=6) ? "naktis" : (hours>6 && hours<=12) ? "rytas" : (hours>12 && hours<=18) ? "diena" : (hours>18 && hours<=24) ? "vakaras" : "netinkamas skaicius";

//console.log (resul)

//  const myName = 'Liudmila';
//  const count = myName.length;
//  const firstChar = myName[0];
//  const lastChar = myName [myName.length -1]

//  for (let i=0; i < count; i++) {
//     const char = myName[i];
//     //console.log(char)\

//     console.log(`${i +1} raide yra ${char}`)

//  }

//  console.log(firstChar);
//  console.log(lastChar);
//  console.log(count);

//let result = ''

//  if  (hours>0 && hours<=6) {
//      //console.log('naktis'); // result = "naktis";
//  } else if (hours>6 && hours<=12) {
//      //console.log('rytas')
//  } else if (hours>12 && hours<=18) {
//      //console.log('diena')
//  } else if (hours>18 && hours<=24) {
//     //console.log('vakaras')
//  } else {
//      //console.log('netinkamas laikas')
//  }

// 2 uzduociu dalis

// turi return :

// function square(number) {
//   return number * number;
// }
// console.log(square(5));

// function cube(number) {
//   return number * number * number;
// }
// console.log(cube(6));

// function multiplied(num1, num2) {
//   return num1 * num2;
// }

// console.log(multiplied(4, 9));

// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(34, 56));

// function subtraction(num1, num2) {
//   return num1 - num2;
// }
// console.log(subtraction(27, 98));

// function divide(num1, num2) {
//   return num1 / num2;
// }
// console.log(divide(28, 7));

// function stringLength(string) {
//   return string.length;
// }
//console.log(stringLength("Rokas valgo ledus"));

// function compare(num1, num2) {
//   return num1 > num2 ? true : false;
// }
//console.log(compare(45, 34));

// function stringFirstLastChar(string) {
//   //chartAt
//   // slice(-1)
//   return string[0] + string[string.length - 1];
// }
//console.log(stringFirstLastChar("Rokas"));

// neturi return funkcijos, kurios kazka daro, bet negrazina (console.log grazina);

// pratimai is code academy 5 paskaita

// function humanName(name) {
//   return name;
// }
// console.log(humanName("Liudmila"));

// function randomNumber() {
//   return Math.floor(Math.random() * 6) + 1;
// }
// console.log(randomNumber());

// function fullName(name, surname) {
//   return name.length + surname.length;
// }
// console.log(fullName("Petras", "Slekys"));

// function returnCharNumber(index) {
//   const array = ["A", "B", "C", "D"];
//   return array[index];
// }

// console.log(returnCharNumber(1));

// function mathOperation(n1, n2, operator) {
//   if (operator === "sum") {
//     return n1 + n2;
//   } else if (operator === "multi") {
//     return n1 * n2;
//   } else if (operator === "div") {
//     return n1 / n2;
//   }
// }
// console.log(mathOperation(25, 10, "div"));

function generateRandomNumber() {
  return Math.floor(Math.random() * 11) + 1;
}

function squareNum(generateRandomNumber) {
  return generateRandomNumber * generateRandomNumber;
}

console.log(generateRandomNumber());

console.log(squareNum(generateRandomNumber()));

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 10 + 1);
// }

// function squareNumber(number) {
//   return Math.pow(number, 2);
// }
// console.log(generateRandomNumber);

// console.log(squareNumber(generateRandomNumber()));
