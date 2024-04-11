// creating a Array
var UserName = ["Mahad", "ali", "zain", "Usman", "Admin"];
// using ForEach Loop on Array
UserName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hellow ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hellow ${oneUser}, thank you for logging in again");
    }
});
