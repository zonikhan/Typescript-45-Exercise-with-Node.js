// Array of Current user
let current_users = ["Usman","Ali","areeba","zain","osama"]

// Array of new user
let new_users = ["Hamza","Aisha","ali","Mahad",""," areeba"]

// loop through new_users to check for usernames avaibility

new_users.forEach(new_one_user => {
// making a condition for username alreadybexist and save in our_condition varibale

    let our_condition = current_users.some(current_one_user=> current_one_user.toLowerCase() === new_one_user.toLowerCase()) 
    if (our_condition){}
        console.log(`sory ${new_one_user} is already taken`) 
        // prient different message using if- else statement
        if(our_condition){
            console.log(`sorry ${new_one_user } is already taken!`)
        }else{
          console.log(`This Username ${new_one_user}is available`)    
        }
    });
