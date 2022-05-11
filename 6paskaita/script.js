 //const myName = "Liudmila";
// const namelength = myName.length;
// const firstChar = myName[0];
// const lastChar = myName[myName.length - 1]

// // console.log(myName.length);
// // console.log(myName[1]);
// console.log(firstChar);
// console.log(lastChar);

// for (let i=0; i<myName.length; i++) {
//     const char = myName[i];
//     console.log(char)


// }

// const firstChar = myName.charAt(0);

//const chars = ['a','b','c']
// const fruits = ['apple','banana','pear'];
// console.log(fruits.length);
// console.log(fruits[1]);

// for(let i=0; i< fruits.length; i++ ) {
//     const fruit = fruits[i]
//     console.log(fruit);
// }

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

// for (let i = 0; i < students.length; i++) {
// const student = students[i];
// if (student.length > 5) {
// console.log(`Vardas ${student} turi daugiau nei 5 raides`);
// } else if (student.length < 5) {
// console.log(`Vardas ${student} turi maziau nei 5 raides`);
// } else {
// console.log(`Vardas ${student} turi lygiai 5 raides`);

// }

// }

// const basket = [7, 10, 0.5, 23, 41];
//  let total =0;

//  for(let i=0; i<basket.length; i++) {
//      const number = basket[i];
//      total += number;
//  }
//  console.log(total);

// 1. void  funkcija
// 2. return funkcija

// function squere (number) {
//     return number * number;
// }

// const squereNumber = squere(10);
// console.log(squereNumber);

// function logger(value) {
//     console.log(value);
// }
// logger [10];



// function printAllArreyItems(arrey) {
//     for(let i=0; i<arrey.lenght; i++) {
//         const item = arrey[i]
//         console.log(item)
//     }
// }

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

// printAllArreyItems(students)



// function repeatString(string, count) {

//     let finalString = "";
    
//     for (let i = 0; i < count; i++) {
    
//     finalString += string;
    
//     }
//     return finalString;
    
//     }
    
//     const repeatedString = repeatString("Rokas", 2);
    
//     console.log(repeatedString);

//     function addition(a, b) {
//         return a +b;
//     }

//     function substraction (a, b) {
//         return a-b;
//     }

//     console.log(substraction(10, 4))

// const nameButton = document.getElementById("name");
// nameButton.addEventListener("click", clickButtonListener);

// function clickButtonListener() {
// alert("Rokas");
// }

// const backgroundButton = document.getElementById("background");
// backgroundButton.addEventListener("click", onClickBackgroundButton);

// function onClickBackgroundButton() {
// document.body.style.backgroundColor = "blue";
// }

// const loginButton = document.getElementById("login");
// loginButton.addEventListener("click", loginHandler);

// function loginHandler() {
// const h1Node = document.querySelector("h1");
// h1Node.textContent = "Hello, Rokas!";
// loginButton.textContent = "Log out";
// }

function alertName(name) {
    alert(name);
  }
  alertName('John');