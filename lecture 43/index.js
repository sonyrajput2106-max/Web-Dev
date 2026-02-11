// function greet(){
//     console.log("hello everyone");
// }

// greet();

// function printCounting(){
//     for(let i = 1;i<=100; i++){
//         console.log(i);
//     }

// }
// printCounting();

//with parameters
// function printNum(num){
//     console.log("printing number:" ,num)
// }

// printNum(5);

// function printAvg(num1,num2){
//     let avg=(num1+num2)/2;
//     console.log("average of numbers",avg);
// }
// printAvg(5,6);

//return function

// function getSum(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }
//  let sum =getSum(1,2,3);
//  console.log("printing sum:",sum);

// function getMyName(firstName, lastName){
//     let fullName = firstName +""+lastName;
// return fullName;
// //umreachable statements ,,,they will never be executed
// let a= 5;
// let b= 5;
// }
// let  fullName= getMyName("sona","rajput");
// console.log(fullName);

//another way of creating a function

// let getMultiplication = function (a,b){
//     return a*b;
// }
// let ans = getMultiplication(7,8);
// console.log("answer is:",ans);

//arrow function
let getExp = (x,y)=>{
    return x**y;
}
console.log(getExp);