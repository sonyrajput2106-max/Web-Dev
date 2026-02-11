console.log("sona");

// compile time error
// syntax error
// console.log(1;

// runtime error
// console.log(x);

try{
    console.log("try block starts here");
    console.log(x);
    console.log("try block ends here");

//a

//b

//c
}
catch(e){
    //define krte h,error k sath aap kya krna chate h
    //retry logic
    console.log("i am inside catch block");
    console.log("your error is here",e);
}

finally{
    console.log("i will run everytime");
}

//lets create a custom error
try{
    console.log(x);
}
catch(err){
    throw new Error("bhai pehle declare kro");
    
}
