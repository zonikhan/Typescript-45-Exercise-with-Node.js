//Name Case:store a person name in a varibal, and then print that person name in lowercase,Uppercase,and titleecase.


let personName = "hamza Mirza";
console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));