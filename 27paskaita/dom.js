// Kartojimas getElementById, querySelector ir kt

// document.getElementById("id"); // vienaskaita
// document.getElementsByClassName("class"); // daugiskaita, grazina masyva
// document.getElementsByName("name"); // daugiskaita, grazina masyva
// document.getElementsByTagName("div"); // daugiskaita, grazina masyva

// document.getElementById("pirmas"); //p

// document.getElementsByClassName("item"); // [p, p]
// // items[0];
// // items[items.length - 1];
// document.getElementsByName("mano-input"); //[]
// document.getElementsByTagName("p");

// document.querySelector("div"); //vienaskaita grazina pagal elementa{}
// document.querySelector("class"); //vienaskaita grazina pagal elementa{}
// document.querySelector("id"); //vienaskaita grazina pagal elementa{}
// document.querySelector(".card div"); //vienaskaita grazina pagal elementa{}
// document.querySelectorAll(); //daugiskaita []

// const help = document.getElementById("help");
// help.textContent = "Rokas geras zmogus";
// help.style.background = "red";

// const myName = document.querySelector("h2");
// myName.textContent = "Liudmila";
// myName.style.color = "green";

// const body = document.querySelector("body");
// body.style.backgroundColor = "#4267B2";

// const hello = document.getElementById("hello");
// hello.textContent = "Labadiena, geros dienos!";
// hello.style.textAlign = "center";

// greetingEl.style.display = "flex";
// greetingEl.style.justifyContent = "center";
// greetingEl.style.alignItems = "center";
// greetingEl.style.height = "80vh";

// const div = document.createElement("div");
// div.textContent = "Mano naujas divas";
// document.body.append(div); istumia i gala kaip vaikinis elementas

// document.body.prepend(div); // istumia i prieki

// const container = document.createComment("div");
// // const p = document.createElement("p");

// document.querySelector("div").append(container);

// const blackSquare = document.createElement("div");

// blackSquare.style.backgroundColor = "black";
// blackSquare.style.width = "100px";
// blackSquare.style.height = "100px";
// document.body.prepend(blackSquare);

// const yellowSquare = document.createElement("div");
// yellowSquare.style.backgroundColor = "yellow";
// yellowSquare.style.width = "50px";
// yellowSquare.style.height = "50px";
// document.body.append(yellowSquare);

// const redSquare = document.createElement("div");
// redSquare.style.backgroundColor = "red";
// redSquare.style.width = "150px";
// redSquare.style.height = "150px";
// document.body.append(redSquare);

// const fruits = ["banana", "apple", "pear"];

// const list = document.createElement("ul");

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   const addLi = document.createElement("li");
//   addLi.textContent = fruit;
//   list.append(addLi);
// }

// document.body.append(list);

// document.querySelector("h1").addEventListener("click", (event) => {
//   event.target.style.textAlign = "center";
//   event.target.style.color = "red";
//   event.target.style.fontSize = "30px";
// });

// document.getElementById("name").addEventListener("input", (event) => {
//   const name = event.target.value;
//   document.body.style.backgroundColor = name.length < 3 ? "red" : "green";
// });

// kartojimas pratesimas

// const myButton = document.getElementById("my-button");

// let count = 0;

// myButton.addEventListener("click", (event) => {
//   count++;
//   const countEl = document.getElementById("count");
//   countEl.textContent = count;

//   console.log(`Button pressed: ${count} times`);
//   const resultEl = document.getElementById("result");

//   if (count === 5) {
//     resultEl.textContent = "You just hit button five times";
//   } else {
//     resultEl.textContent = "";
//   }
// });

// function handleClick(event) {
//   count++;
//   const countEl = document.getElementById("count");
//   countEl.textContent = count;

//   console.log(`Button pressed: ${count} times`);
//   const resultEl = document.getElementById("result");

//   if (count === 5) {
//     resultEl.textContent = "You just hit button five times";
//   } else {
//     resultEl.textContent = "";
//   }
// }

// myButton.addEventListener("click", handleClick);

// const button = document.getElementById("show");
// button.addEventListener("click", (event) => {
//   const myName = document.querySelector("p");
//   myName.textContent = "Liudmila";
//   myName.style.color = "violet";
// });

// const plusButton = document.getElementById("plus");

// let number = 0;

// plusButton.addEventListener("click", (event) => {
//   number += 500;
//   const numberEl = document.getElementById("number");
//   numberEl.textContent = number;
// });

// const minusButton = document.getElementById("minus");

// minusButton.addEventListener("click", (event) => {
//   number -= 500;
//   const numberElement = document.getElementById("number");
//   numberElement.textContent = number;
// });
// const resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", () => {
//   numberEl = 0;
//   document.getElementById("number").textContent = numberEl;
// });

// const registerForm = document.getElementById("register");

// registerForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const username = document.querySelector("input[name='username']");
//   const email = document.querySelector("input[name='email']");
//   const age = document.querySelector("input[name='age']");
//   const password = document.querySelector("input[name='password']");

//   const result = document.createElement("h2");
//   result.textContent = `${username.value}, ${email.value}, ${age.value}, ${password.value}`;
//   document.body.append(result);
// });

// const regForm = document.getElementById("register-form");
// regForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const username = document.querySelector("input[name='username']");
//   const surname = document.querySelector("input[name='surname']");
//   const age = document.querySelector("input[name='age']");

//   const result = document.createElement("h2");
//   if (age.value < 18) {
//     result.textContent = `${username.value} ${surname.value} yra nepilnametis`;
//   } else {
//     result.textContent = `${username.value} ${surname.value} yra pilnametis`;
//   }
//   document.body.append(result);
// });

// nauja paskaita, KARTOJIMAS masyvai, funkcijos, atvaizdavimai

// 'rokas' => ["r", "o", "k", "a", "s"]
// array.length
// first item - [0]
// last item - [array.length - 1]

// array.forEach(callback)
// callback -(item, index) => {})
// turi return

// const names = ["Rokas", "Tomas", "Giedrius", "Martyna"];

// function addNewStudent(studentName) {
//   names.push(studentName);
// }

// function removeStudent() {
//   names.pop();
// }
// console.log(names);
// addNewStudent("Antanas");
// console.log(names);
// removeStudent();
// console.log(names);

// array.push() stumia i gala\
// array.pop() ismeta is galo
// array.unshift() istumia i prieki
// array.shift() ismeta is priekio

// const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

// function removeColors(colorArray) {
//   colorArray.pop(); // red blue green white black yellow
//   colorArray.shift(); // blue green white black yellow
//   colorArray.shift(); // green white black yellow
//   colorArray.shift(); // white black yellow
//   colorArray.shift(); // black yellow
//   colorArray.shift(); // yellow
//   colorArray.unshift("green"); // green yellow
// }

// removeColors(colors);

// console.log(colors);

// function addColors(colorArray) {
//   colorArray.unshift("blue");
//   colorArray.unshift("red");
//   colorArray.pop();
//   colorArray.push("white");
//   colorArray.push("black");
//   colorArray.push("yellow");
//   colorArray.push("purple");
// }

// addColors(colors);
// console.log(colors);

// // apversti masyva

// function reverseArray(array) {
//   array.reverse();
// }
// reverseArray(colors);
// console.log(colors);

// // atspausdinti kiekviena spalva

// colors.forEach((color) => {
//   console.log(color);
// });

// // padvigubinti spalvas

// function doubleArrayItems(array) {
//   return array.map((item) => item + item);
// }
// const doubleItems = doubleArrayItems(colors);
// console.log(doubleItems);

// Roko uzduotys

const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

// function removeSomeColor(array) {
//   return array.splice(2, 2);
// }

// removeSomeColor(colors);
// console.log(colors);

// function orangeColor(array) {
//   return array.splice(4, 1, "orange");
// }
// orangeColor(colors);
// console.log(colors);

output = [];
colors.forEach(function (el) {
  if (/e/.test(el)) {
    output.push(el);
  }
});
console.log(output);
