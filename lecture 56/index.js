



// let firstPromise = new Promise ((resolve,reject) => {
//     console.log("babbar");
//     // resolve(1001);
//     reject(new Error("internal error "))
// });


//asynchronous code
// function sayMyName(){
//     console.log("my name is sona");
// }

// setTimeout(sayMyName,1000);

let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("promise fulfilled");
    }
    else {
        reject("promise rejected");
    }
});

promise1.then((message) => {
    console.log("the ka message is" + message);
}).catch((error) => {
    console.log("error:" + error);
})

//Promise chaining
// promise1.then((message)=>{
//     console.log("first message:"+message);
//     return"Promise fulfilled second message";
// }).then((message)=>{
//     console.log("second message:"+message);
//     return"Promise fulfilled third message";
// }).then((message)=>{
//     console.log("third message:"+ message);
// }).catch((error)=>{
//     console.error(error);
// }).finally((message)=>{
//     console.log("i am final block");
// })


let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "first");
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "second");
})
let promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "third");
})

Promise.all([promise4, promise3, promise2]).then((values) => {
    console.log(values);
})
    .catch((error) => {
        console.log("error:" + error);
    })