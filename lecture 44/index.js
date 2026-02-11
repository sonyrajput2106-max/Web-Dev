let obj = {
    name:"Sona",
    age:20,
    weight:50,
greet: function(){
    console.log("hello sona")
}
};
//for in

// for(let key in obj){
//     console.log(key,"",obj[key])
// }


// console.log(obj);
// obj.greet();

// console.log(typeof (obj));
// let obj2=obj;//another object or reference  is created in stack memory nd is pointing to the same data of obj 1 in the heap memory which is called shallow copy

//array= collection of itmes
// let arr = [1,2,3,4,5];
// let array = [1,"sona",20];
// console.log(arr);
//array constructor
// let brr = new Array('sona', 1, true);
// //built in methods
// brr.push('rajput');//insert at end
// brr.pop();//remove last item
// brr.shift();//removes first or leftmost element
// brr.unshift('sona rajput');//adds value to leftmost side
// brr.slice(2,3);//new part from array ...excludes last index
// brr.splice(1,2,'mona')//can change content of array including insert, replace or change

// console.log(typeof(brr));
// console.log(brr[0]);

// let arr = [10,20,30];

// arr.map(number){
//     console.log(number+1);
// }

// let arr = [10,20,30,11,21,44,51];

//  let evenArray = arr.filter( (number) =>{
//     if (number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// arr.sort();//for sorting data in ascending order
// console.log(arr);
// console.log(arr.indexOf(11));
// let lng = arr.length();
// console.log("length:",lng);


//for each 
// let arr = [10,20,30];

// arr.forEach( (value,index)=>{
//     console.log("number:",value,"index:", index);
// })

//for of loop

// let arr =[10,20,30];

// for(let value of arr){
//     console.log (value);
// }


//arrays with functions

let arr= [10,20,30,40,50];
function getSum(arr){
let len = arr.length;
let sum = 0;
for(let index=0;index<len;index++){
    sum = sum+arr[index];
}
return sum;
}
let totalSum = getSum(arr);
console.log(totalSum);