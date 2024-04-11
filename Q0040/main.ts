// Difine the make _album function
function make_album(artist_name: string,album_title:string,tracks?: number){
let album:{artish: string,title: string,tracks?: number}={
    artish: artist_name,
    title: album_title,
};
if (tracks !== undefined){
    album.tracks = tracks;
}

  return album;      
}
// Calling three function and creating 3 variables with different vales
let album1 =make_album("Humza", "Album title 1");

let album2 =make_album("osman","Album title 2");
// Calling a make_Album function with  third parameter

let album3 =make_album("Ali","Album title 3",10);



// print values of our object creat my function
console.log(album1);

console.log(album2);

console .log(album3);