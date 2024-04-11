// Creating a Array
let userNames = ["Mahad","Ali","Zeehan","Admin","Usman"]


userNames = []

if(userNames.length === 0){
    console.log("you Array Empty we neeed to find some user!")

}else{

     // using ForEach Loop on Array
  
     userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hellow ${oneUser},would you like to see a status report?`)
    }else{
        console.log(`Hellow ${oneUser}, thank you for logging in again.`)
    }
    })







    
}
