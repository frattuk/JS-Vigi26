
// function Book(name, author, year) {
//     this.name = name;
//     this.authorName = author;
//     this.year = year;
//     this.getInfo = () => {
//     return `${this.name} parašė ${this.authorName} knygą`;
//     };
//     this.getYears = () => {
//     const today = new Date();
//     return today.getFullYear() - this.year;
//     };
//     }
    

    
//     const harryPotterBook = new Book("Harry Potter", "J.K. Rowling", 1997);
//     const randomBook = new Book("Random Writer", "Very random", 2022);
//     console.log(harryPotterBook.getInfo());



    class Book {
        constructor(name, author, year) {
            name = name;
            authorName = author;
            year = year;
           }

            getInfo = () => {
                return `${this.name} parašė ${this.authorName} knygą`;
            };
            getYears = () => {
                const today = new Date();
                return today.getFullYear() - this.year;
            };
        
    }


    class Employee {
        constructor(position, wage, experience) {
            this.position = position;
            this.wage = wage;
            this.experience = experience

        }
        getBonus = () => {
            if (this.experience < 5) {
                return this.wage
            } else if(this.experience < 10) {
                return this.wage * 2;
            } else {
                return this.wage * 3;
            }
        }
    }

    const softwareDeveloper = new Employee('Front-end engineer', '4000', 2);

    const salesManager = new Employee('Sales manager', '6000', 7);

    //console.log(softwareDeveloper.getBonus());
    //console.log(salesManager.getBonus());
 
    function Car(brand, model, engine, price) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.basePrice = price;
        this.getPrice = function() {
            let additionalPrice = 0;
            if(this,engine === 'electro') {
                additionalPrice = 10000;
            } else if(this.engine === 'disel') {
                additionalPrice = 5000;
            }
            return this.basePrice + additionalPrice;
        }
        
    }
    const myCar = new Car('BMW', 'X3', 'electro', 40000);
    const yourCar = new Car ('VW', 'Arteon', 'disel');

    console.log(myCar.getPrice())