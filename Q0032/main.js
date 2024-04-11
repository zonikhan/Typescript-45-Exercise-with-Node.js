// Array of Current user
var current_users = ["Usman", "Ali", "areeba", "zain", "osama"];
// Array of new user
var new_users = ["Hamza", "Aisha", "ali", "Mahad", "", " areeba"];
// loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // making a condition for username alreadybexist and save in our_condition varibale
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) { }
    console.log("sory ".concat(new_one_user, " is already taken"));
    // prient different message using if- else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, "is available"));
    }
});
