// creating a Guest List Arry 
var guestlist = ["Rabia", "ahsan", "Usman", "Hamza"];
//Making varibal for those guest who cant come
var donCome = guestlist[0];
//print the name of guest who cant come
console.log(donCome, "Nai Ahh sakte hai");
// Add or Remove values from Guest List Arry
guestlist.splice(0, 1, "Amir");
// Message prient for Bigger Table
console.log("Good New !we have Found a Bigger Table For Dinner.");
// Adding a new guest at starting index of array
guestlist.unshift("Ali");
// Adding a new guest at ending index of array
guestlist.push("zain");
// Making a varable for  storing  a middle index of our guest list array
var middleIndex = Math.floor(guestlist.length / 2);
// Adding a new guest to middil index of array
guestlist.splice(middleIndex, 0, "Osama");
// print Message of update  List
console.log("Update List of our Guests");
// seding a invitation message to our guests one by one  with  their names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
