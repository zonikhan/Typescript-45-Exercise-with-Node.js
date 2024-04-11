 // making a arry of countries and print its oraginal order 
  
  
  let counteriesTovisit: string [] = ["china","Denmark","Barzil","Argentina"];

console.log("orangnal order:", counteriesTovisit);
//print the Array in Alphabetical order without modifying the the acual Array List
console.log("Alphabetical Order:",[...counteriesTovisit] .sort());

// Show  that the array is still in its orgianl order

console.log("Still in Orginal Order:", counteriesTovisit);

// print the Arrray in Revered Order without modifying the Actual Arrual Array List
console.log("Reverse order:", [...counteriesTovisit].reverse());

// Show  that the array is still in its orgianl order

console.log("Still in Orginal Order:", counteriesTovisit);

// We haveChangeed the Orginal Array Order Now

console.log("orginal Array Reversed:", counteriesTovisit.reverse());

// prient the Array to show it's  back to its orginal order
console.log("Back to Orgianl oder:", counteriesTovisit.reverse());


// prient Array to sow that its order has been chang in Alphabetical order now

console.log("Sorted in Alphabetical order:", counteriesTovisit.sort());


// We haveChangeed  again the Orginal Array Order Now in reverse order again

console.log("orginal Array Reversed Again:", counteriesTovisit.reverse());