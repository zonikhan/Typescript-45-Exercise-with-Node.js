//Changing Guest List:you just heard that one off your guest can't make the dinner, so you need toswend out a new set of inivitation.
//you'll have to think of someone else to invite.
var guestList = ["Humza", "Usman", "aisha", "Hina",];
var dontCome = guestList[0];
console.log(dontCome, "Nai Ahh skta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would u like to Dinner with me?")); });
