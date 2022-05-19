const fruits = ['apple', 'orange', 'pear'];

// .pop() - pasalina paskutini masyvo elementa ir ji grazina

// const lastElement = fruits.pop();
// console.log(lastElement);
// console.log(fruits);

//. shift() - pasalina pirmaji masyvo elementa ir ji grazina

// const firstElement = fruits.shift();
// console.log(firstElement);
// fruits.shift();

// .push() prideda nauja elementa i masyvo gala

// fruits.push('Pineapple');

// .unshift() prideda nauja elementa i masyvo pradzia
 // fruits.unshift('banana');

// const upperCasedFruits =[]
//  for (let i = 0; i < fruits.length; i++) {
//      const fruit = fruits[i];
//      console.log(fruit.toUpperCase());
//      const upperCased = fruit.toUpperCase();
//      upperCasedFruits.push(upperCased);
//  }
// // console.log(fruits);
// console.log(upperCasedFruits);

// function log(name) {
//     console.log(name)
// }

// function showAlert(callback) {
//     // alert('rokas');
//     callback('rokas');
// }

// log('rokas')
// showAlert(log)

// callback 
// .forEach()  - ciklas kuris praeina per visus masyvo elementus

 // const names = ['BoB', 'hElEn', 'jAck'];

// names.forEach(showNames);
// function showNames(name) {
//     console.log(name);
// }

// names.forEach((name, index) => {
//     console.log(index + name);
// })

// names.forEach( () => {} )

// .map() ciklas kuris praeina per visus masyvo elementus ir grazina nauja masyva

// const modifiedNames = names.map( (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// });
// console.log(names);
// console.log(modifiedNames);

// .filter() ciklas praeina per visus masyvo elementus ir grazina nauja masyva, jeigu reiksme yra pozityvi

const ages = [12, 15, 23, 27, 25, 30, 38];

const moreThanTwenty = ages.filter(age => {
    return age > 20;
});

const lessThanTwenty = ages.filter((age) => age < 20);

// console.log(lessThanTwenty);

const cars = ['Bmw', 'Lamborgini', 'Audi', 'Lada', 'Mersedes', 'Vw'];
// cars.forEach((index, value) => console.log(value +":" + index ));

//. find() suranda pirma elementa is masyvo, kuris atitinka kriteriju true ir ji grazina

// const foundCar = cars.find(car => car.charAt(0) ==='L');
// console.log(foundCar)

// .some() patikrina ar nors vienas elementas atitinka kriteriju ir grazina true arba false

// const hasShortName = cars.some((car) => car.lenght < 3);

//console.log(hasShortName);

const isEveryUpperCased = cars.every(car => car.charAt(0) === car.charAt(0).toUpperCase());


// console.log(isEveryUpperCased);

const city = ['kaunas', 'Vilnius', 'Klaipeda']
console.log(city.every(v => v.charAt(0) === v.charAt(0).toUpperCase()));


