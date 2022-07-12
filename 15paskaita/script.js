// splice metodas padeda istrinti arba iterpti masyvo elementa i pasirinkta vieta
// .splice()

// const sentence = ['I', 'study', 'JavaScript', 'right', 'now'];
// sentece.splice (2, 2); // istrina nuo pirmo diemens skliausteliuose tiek kiek yra 2 demuo ir grazina

// sentece.splice(2, 1, 'TypesScript'); // pakeicia masyvo elementa kitu
// sentece.splice(1, 4, 'studied', 'TypeScript', 'before'); // pakeicia masyvo elementus
// console.log(sentece);

// const sliced = sentence.slice(-3);
// console.log(sliced);

//  const numbers = [7, 8, 1, 0.50, 8, 6, 10, 20, 30, 40];

// const total = numbers.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
// }, 0)

// // 7+ 8; 15+1 ; 16 + 0.5  ir tt
// console.log(total);

// const sorted = numbers.sort((a, b) => a-b); // surikiuoja didejimo tvarka
// const sortedDescendingOrder = numbers.sort((a, b) => b-a);
// console.log(sortedDescendingOrder)
// console.log(sorted)

// const arrayStyles = ['Jazz', 'Blues'];
// arrayStyles.push('Rock-n-Roll');
// arrayStyles.splice(1, 1, 'classic');
// const firstElement = arrayStyles.shift();

// console.log(firstElement);

// console.log(arrayStyles)

// arrayStyles.unshift('rap', 'reggae');
// console.log(arrayStyles);

// let arr = [11, -2, 34, 45];

// function getMaxSubSum(array) {
//   const sum = array.reduce((total, num) => (num > 0 ? total + num : total), 0);
//   return sum
// }
// const sum = getMaxSubSum(arr);
// console.log(sum)

const friends = ["Kleika", "Andrej", "Lerka", "Nafania"];
friends.sort((a, b) => (b > a ? 1 : -1));

//console.log(friends)

const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];

numbers.sort((a, b) => b - a);

//console.log(numbers[0]);

const favNums = [5, 7, 66, 18, 16];
// console.log(favNums.reduce((a, v) => a+v))

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
// console.log(cars.reduce((a, v) => v.length === 3 ? a+1 : a, 0));

const numb = [5, 10, 20, 11, 12, 1, 0, 14, 25];
console.log(numb.reduce((a, v) => (a > v ? a : v)));
