// Difine the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map( it will modify array)
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians name
var magician_names = ["Hurry poter", "Hamza", "Uaman"];
var great_magicians = make_great(magician_names);
//   console.log(great_magicians)
show_magicians(great_magicians);
