
// global variable
var age = 25;
console.log(age);

// function scoped
function sayHello(){
    var name = "earth";
    console.log("hello", name);
}
sayHello();

// blockk scoped(not for let and const)
{
    var height = 5;
}
console.log(height);

// temporal dead zone(from 21-23)

console.log(marks);
console.log("sona")
let marks = 100;
console.log(marks);

