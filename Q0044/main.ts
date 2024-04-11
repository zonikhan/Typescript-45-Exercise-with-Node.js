// Define a function with a rest parameter that accept items arugments representing our sandwich


function makeSandwich(...items: string[]){
console.log("\nMaking a sandwich with the following item:\n");

items.forEach(singleItem => console.log("-"+ singleItem));


console.log("\nNow Enjoy Sandwich");
}

// Calling  the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo","Egg");
makeSandwich("Bread","butter");
makeSandwich("Bread","Butter","Mayo","Egg","Cheese", "Chicken","Lettuce", "Temato");