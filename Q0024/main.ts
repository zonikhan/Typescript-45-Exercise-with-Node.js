// Define Variablees

let apple = "apple";
let UppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "banana","orange"];

// Test for equailty and  inequality with string

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\Is apple is not equal to apple?");
console.log(apple != "apple");

// Test using Lowercase Funtion

console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(UppercaseApple.toLocaleLowerCase() ==  "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase to lowercase?");
console.log(UppercaseApple.toLowerCase() != "apple");

// Numerical tests
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
 console.log("\nIs ten is greater than zero"); 
 console.log(ten > 0);

// less than or equal to
console.log("\nIs twenty is less than 10")
console.log(twenty < 10);
// Greater than or equal to
console.log("\nIs than is greather than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(twenty <= 10);
// Test using "and "or" opearter
console.log("n\ twenty is not equal to 10 and twemty is greater than 10");
console.log(twenty != 10 && twenty > 10)
//
console.log("\n twenty Is not and twenty is greater than 10");
console.log( twenty != 10 && twenty > 30);
//Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 ==20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20 ");
console.log(20 > 50 || 20 != 20);

// Test wheather an item is include in array
console.log("Is orange inclde  in my fruites in my array");
console.log(fruits.includes("orange"));
// Not incldes
console.log("\nIs orange not inclde in my fruite array");
console.log(!fruits.includes("orange"));