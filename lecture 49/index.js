// console.log("sona");

let src = {
    age:12,
    wt:78,
    ht:150
};

let dest = {};

for(let key in src){
let newKey = key;
let newValue = src[key];

dest[newKey]= newValue;
}
console.log("src:",src);
  console.log("dest:",dest);

// let dest = Object.assign({},src);

// src.age = 45;

// console.log("src:",src);
// console.log("dest:",dest);

// let dest = {...src};


// src.age =67; 
// 

// console.log("src:",src);
// // console.log("dest:",dest);

// console.log(obj);

// obj.color= "white";
// console.log(obj); 