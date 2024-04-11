 
 // creating a Array
 let UserNames = ["Mahad", "ali","zain","Usman","Admin"];


 // using ForEach Loop on Array
  
 UserNames.forEach(oneUser =>{
if(oneUser === "Admin"){
    console.log(`Hellow ${oneUser},would you like to see a status report?`)
}else{
    console.log(`Hellow ${oneUser}, thank you for logging in again.`)
}
})