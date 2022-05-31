class Cat {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    isFat() {
        if(this.weight >= 5) {
            return `${this.name} yra storas kaciukas`;
        } else {
            return `${this.name} yra plonas kaciukas`;
        }
    }
}

const cat = new Cat("Kleopatras", 7);
// console.log(cat.isFat());

const randomArray = [1, 5, 'a', 'g', 'z', 6];

const removeNumbersFromArray = (array) => array.filter((x) => isNaN(x));
const removeLettersFromArray = (array) => array.filter((x) => !isNaN(x));
const removedNumbers = removeNumbersFromArray(randomArray);
const removedLetters = removeLettersFromArray(randomArray);
// console.log(removedLetters);




// let test ="Petras 123 Slekys";
// // split ides i masyva ("abc") = ["a", "b", "c"]
// // map(char) => "a" + "a"
// // join("") => ["a", "a"] => "aa"
// const newTest = test.split("").map((char) => isNaN(char) ? char+char:char).join("");

// console.log(newTest);

const testString = "Rokas !@#$%^ Tomas 123"
const newTestString = testString.split("").map((char) => !isNaN(char) ? char + char : char).join("");
// console.log(newTestString); 
// ats: "Rokas !!@@##$$%%^^ Tomas 112233"



const checkPostCode = (postCode) => {
    const letters = removeLettersFromArray(postCode.split(""));
    const numbers = removeNumbersFromArray(postCode.split(""));
    
    if(postCode.includes(" ")) {
        return false;
    }
    else if (letters.length === 5) {
    return true;
    } else if (letters.length === 2 && numbers.length === 3) {
    return true;
    } else {
    return false;
    }
    };
    
    const code = "1234 "; // true
    
    // console.log(checkPostCode(code));

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        compareAge() {
            if(this.age >= 18) {
                return `${this.name} is old enough to drink`
            } else {
                return `${this.name} is not old enough to drink`
            };
        };
    };

    const person = new Person ('Petras', 23)
    // console.log(person.compareAge())


    const isValidPostCode = postCode => /^[0-9]{5}|[0-9]{3}[A-Za-z]{2}$/.test(postCode);
console.log(isValidPostCode('abc123'));
console.log(isValidPostCode('12345'));
console.log(isValidPostCode('123ab'));
