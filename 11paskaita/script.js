console.log("11 paskaita");

// tuscias objektas
const emptyObject = {};

const user = {
    name: 'rokas19',
    password: 'rokasrokas123', // uzsifruojamas -> sha256 -> njxdusuidkka@3689
    mail: 'rokas@gmail.com',
    age: 23,
    gender: 'male',
};

// console.log(user.name);
// console.log(user.password);
// console.log(user['name'])

const candle = {
    color: 'green',
    taste: 'apple',
    height: 8,
    radius: 8,
    turnLight: () => {
        console.log(`${candle.color} candle spreading tasteful ${candle.taste} smell`);
    },
    calculateLightTime: () => {
        const metric = candle.height * candle.radius;
        if(metric > 60) {
            return 180;
        } else if(metric >30) {
            return 90;
        } else {
            return 45;
        }
    }
}

const minutes = candle.calculateLightTime();


const cat ={
    name: 'Kleopatras',
    age: 15,
    color: 'black',
    weight: 7,
    eat: () => {console.log(`${cat.name} is eating...`) },
    sleep: () => {
        console.log('Cat is sleeping..')
    },
    description: () => {
        console.log(`${cat.name} is a ${cat.color} and ${cat.age} age`); 
    },
};

 // console.log(`${cat.name} is a ${cat.color} and ${cat.age} age`);

 const codeClass = {
     type: 'remote',
     subject: 'Front-end + Node.js',
     lecturer: {
         name: 'Rokas',
         surname: 'Andreikenas',
         age: 23,
         experience: 3,
     },
     students: ['Edvinas', 'Liudmila', 'Rima', 'Karolis'],
     

 }

 // console.log(codeClass.lecturer.name);
 const lecturerFullName = `${codeClass.lecturer.name} ${codeClass.lecturer.surname}`;

 // console.log(lecturerFullName);

 // console.log(codeClass.students);
 const studentsCount = codeClass.students.length;
 // console.log(studentsCount);


 const treeForm = document.getElementById('tree-form');
 treeForm.addEventListener('submit', handleSubmitTreeForm)
 
 function handleSubmitTreeForm(event) {
    event.preventDefault();

    const treeName = document.querySelector('input[name="tree-name"]');
    const treeAge = document.querySelector('input[name="tree-age"]');
    const name = treeName.value;
    const age = Number(treeAge.value);

    const tree = {
        name: name,
        age: age,
        isOld: age > 100 ? true : false,
    }; 
    console.log(tree);
    
 }

