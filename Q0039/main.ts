// Creating a function with return a values in string
function city_country(city: string, country: string) : string{
    return `${city},${country}`;
}

// Calling a function and print the returned value
city_country("Karachi", "pakistan");

console.log(city_country("Karachi","pakistan"));
city_country("Tokyo","japan")
console.log(city_country("Tokyo","Japan"));
console.log(city_country("Barlin","Germany"));