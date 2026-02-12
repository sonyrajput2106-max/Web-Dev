// async function getData(){

//     setTimeout(function(){
//         console.log("i am inside set timeout block");
//     },3000);
// }
//  let output = getData();

//fetch API

async function getData() {
    //get req -> async
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //parse json - async
    let data = response.json();
    console.log(response);
}

//scenario:
// prepare url / api endpoint -> sync
//await (jab tk data fetch nhi hota tab tk flow of execution aage nhi jayega //fetch data -> network call -> async
//process data -> sync