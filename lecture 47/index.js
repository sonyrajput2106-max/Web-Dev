
class human{
    // properties
    age;//public
    #weight = 30;//private
    height =5;


 constructor(newAge,newHeight){
    this.age = newAge;
    this.height=newHeight;
 }

    // behaviour

    walking(){
        console.log("i am walking", this.#weight);
    }

    running(){
        console.log("i am running");
    }
    get fetchWeight(){
        return this.#weight;
    }
    set modifyWeight(val){
        this.#weight = val;
    }
}

let obj = new human(50,67);
console.log(obj.height)  ;
obj.walking();


// default parameters
function sayName(fullName = "sona"){
    console.log("my name is:",fullName);
}

sayName();


function getAge(){
    return 190;
}

function utility(name = "sona", age = getAge()){
    console.log(name , " ",age);
}

utility();w