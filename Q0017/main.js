// creating a Guest List Arry 
var guestlist = ["sonu", "ahsan", "Usman", "Hamza"];
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
// Inform that only two guest  can be invited for dinner
console.log("Unfortunately,the new dinner table wont arrive on time,so I can only invite twoGuests to dinner with me");
// using while-loop to remove guests from the array until only two name remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("sorry,the ".concat(removedGuest, "I can inite you tod dinner"));
}
// sending q inivitation to the last two guest on the list
console.log("Invitations to the last 2 Guest");
guestlist.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ", you are still inviteted to dinner")); });
// removing last two guest from the list
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
