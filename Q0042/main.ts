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

//   console.log(great_magicians)

//  Call show_magicians that show modified list of magicians
  show_magicians(great_magicians)
