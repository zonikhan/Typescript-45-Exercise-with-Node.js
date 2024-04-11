
// Difine the function to show magicians name

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}
// function to make magicians great through .map( it will modify array)
function make_great(magicians: string[]){
return magicians.map(name =>`The Great ${name}`);



}
// Define an array of magicians names
let magician_names =["Hurry poter", "Hamza","Uaman"]

//  Call make_great function to modify  magicians names
  let great_magicians = make_great(magician_names);

// Making a copy of orignal array throught. slice() function

let copy_magician_names = magician_names.slice()

// Modify the copyied array to include "The Great" with thier names

  let copy_greate_magicians = make_great(copy_magician_names);

  // show both array original and Copied

  // original
  console.log("Orginal Array\n");
 show_magicians(magician_names);
  // copied
console.log("\nCopy Array\n")
  show_magicians(copy_greate_magicians);