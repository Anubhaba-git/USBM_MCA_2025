// //Mathematical operator:
// // let num1 = 5;
// // let num2 = 3;
// // let num3 = 4;

// // let sum = num1+num2+num3;

// let num3 = 29;
// let even = num3 % 2;
// console.log(odd);

// //Equality opoerator
// //'==' : value check
// //'===' : value and datatype check

// console.log(5 == 5); //true
// console.log(5 == 6); //false
// console.log(5 == "5"); //true
// console.log(5 !== "5"); //true
// console.log(5 != "5"); //false

// // Conditional statements
// // if (condition){
//     //true code will execute here
// // }

// // falsy value :
// // false , 0 ,-0 , "" , '' ,null,undefined,NaN 

// // if(-100){
// //     console.log("it is true"); // except this value false , 0 ,-0 , "" , '' ,null,undefined,NaN whatever u can put u get true.
// // }

// // Task1:
// let totalBill = 1500;
// let discountStartPrice = 500;
// if(totalBill >= discountStartPrice){
//     console.log(`Congrats!! You have some discount`);
// }else{
//     console.log(`Sorry!! You have no discount`);
// }

// // Task2:
// let age= 25;
// if(age >= 60){
//     console.log(`Adult & Senior citizen`);
// }else if(age >= 18){
//     console.log(`Adult`);
// }else{
//     console.log(`Minor`);
// }

// // Task3
// let gender = male;
// let Age = 30;

// if(gender = male){
//     if(Age >= 22){
//         console.log(`Now you are eligible for marriage!`);
//     }else{
//         console.log(`No !! You are not eligible for marriage!`);
//     }
// }else{
//     console.log(`Check your gender!!`);
// }

// //Logical Opereator
// // --> &   Logical operator (true || true)
// // --> ||  Logical operator (true || false)
// // --> !   Logical operator

// // Task-4: print all the vowels(a,e,i,o,u)
// let letter = 'a';
// if(letter === 'a'||letter === 'e'||letter === 'i'||letter === 'o'||letter === 'u'){
//     console.log(`Yes!! It's a vowel`);
// }else{
//     console.log(`No!! It's not a vowel`);
// }

// // SWITCH Statements
// switch(expression) {
//     case value1:
//       // Code to be executed if expression === value1
//       break;
    
//     case value2:
//       // Code to be executed if expression === value2
//       break;
    
//     // Add more cases as needed
    
//     default:
//       // Code to be executed if no case matches
//   }
  
// Ex:
let char = 'n';
switch (char){
    case 'a':
        console.log(`It's a vowel`);
        break;//to break the flow
    case 'e':
        console.log(`It's a vowel`);
        break;
    case 'i':
        console.log(`It's a vowel`);
        break;
    case 'o':
        console.log(`It's a vowel`);
        break;
    case 'u':
        console.log(`It's a vowel`);
    default:
        console.log(`It's not a vowel`);
}
