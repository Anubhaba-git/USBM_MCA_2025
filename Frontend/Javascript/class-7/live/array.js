// Arrays

// let newArray = [];
// console.log(newArray);
// console.log(typeof newArray);

// Ex:
// let name = "Samir";
// let age = "50";

// let userArray = ["Samir",50,"anubhaba",22]
// console.log(userArray);

// let newNumber = new Array(1, 2, 3, 4, 5);
// console.log(newNumber);

// //Array methods:

// // Length:
// let name = ["Anubhaba","Dibyananda","Bikash",0,1,2,3]
// console.log(name.length);
// console.log(name);

// // Acessing:
let cities = ["Bhubaneswar","Cuttuck","Balesore","Jajpur","Bhadrak"]
// console.log(cities[0]);//Bhubaneswar
// console.log(cities[4]);//Bhadrak

// // Add an element in an array:
// //push(): Using push method we can add a new element in last position of  an array.
// console.log(cities);
// let addCity = "Kendrapada";
// cities.push(addCity);
// console.log(cities);

//pop(): Using push method we can remove last element of an array a new element in an array.
// console.log(cities);
// cities.pop();
// console.log(cities);

//shift():
// console.log(cities);
// cities.shift();
// console.log(cities);

//unshift():
// console.log(cities);
// cities.unshift("Kendujhar");
// console.log(cities);

// TASK:
// diff between push(),pop(),shift(),unshift() with defination and example.

//Date- Oct 29 :

// Array Methods:
// Concatenation(Merge):
// Ex:
// let fruits = ["apple","orange","strawery"]
// fruits = fruits.concat(["mango","dragon-fruit"]);
// console.log(fruits);

// ex:
// let array = [1,2,3,4,5,6]
// let newArray = array.slice(2,4);
// console.log(newArray);

const months = ['jan','march','apr','jun']
months.splice(2,0,'dec');
console.log(months)

// const day = ['mon','wed','thu','fri']
// day.splice(3,0,'gobinda');
// console.log(day);

const arr = [1,2,3,4]
arr.forEach((val) =>{
    console.log( val*2);
})

