// primityvus duomenu tipai ir ju apibrezimai. 
// boolean, number ir string objektai
/* 
Primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
*/

const name = 'Rokas';
const age = 7;
const isHot = true;
const notFound = undefined;
const noValue = null;

const isHotString = Boolean(isHot).toString();

console.log(isHot + isHot); // = 2
console.log(isHotString+ isHotString); // = truetrue

const count  = '15';

// const countNumber = Number(count);

//console.log(count +count)
//console.log(countNumber+countNumber)

// integer - sveikasis skaicius
// console.log(Number.isInteger(5))

// paverciam i string toString
// console.log(Number(5.752).toString)

const myNumber = 5.752;

// console.log(myNumber.toFixed(1));

const sentence = 'my name is rokas and i am very happy';
// suranda stringe kita stringa. case-sensitive - didziosios, mazosios raides
// sentence.includes('happy');
// console.log(sentence.includes('happy'));

// console.log(sentence.slice(0, 8)); // iskirps nuo 0 iki 8

// console.log(sentence.trim()) // iskerpa tarpus prieky ir gale

const upperCased = sentence.toUpperCase(); // padaro visas raides didziasias
const lowerCased = sentence.toLowerCase(); //padaro visas raides mazosiomis

// patikrina ar stringai vienodi
function areSameStrings(firstString, secondString) {
    return firstString.toUpperCase() === secondString.toUpperCase();

}

// console.log('Rokas','rokas'); 


const dog = 'Rikis';
const result = dog.repeat(5) // pakartoja kiek reikia
// console.log(result)

const splitted = sentence.split(''); // sudeda visus zodzius i atskirai i masyva
// console.log(splitted); 

const milkPrice = 1.95;
console.log(milkPrice.toFixed(2));





