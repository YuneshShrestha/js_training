// Variable declaration
let x=65;
var y="A";
// === memory location pani check garxa (compares the memory location of variable)
console.log(x==y);
// ** acts as power
console.log(6 ** 2);
// one array can store any data type
// Use this
// let x = ["y",2,4,"Hello"];
// Not this
// let y = new Array(1,2,4);
// console.log(x.length);
// push(array ma add from last) pop(array ba) shift(1st element lai remove garxa) unshift(1st ma add garxa)
// check for splice


// Object
let person={
    name:"yunesh",
    age:19,      
    family:{
        father: "anil"
    }
}
console.log(person.family.father);
// Function
function myfunc(a, b){
    console.log(a+b);
}
myfunc(4,5);
let myName = function myfunc2(a, b){
    let person={
        name:"yunesh",
        age:19,      
        family:{
            father: "anil"
        }
    }
    return person.name;
};
// let myName= myfunc2();
console.log(myName());
// const in array ra obj ma new value assign garna paidaina tara new value halna milxa

// let x = ["y",2,4,"Hello"];

// arrow function
let a = (name) => name;
console.log(a("Yunesh"));

let s = (w,k) => w + k;

console.log(s(2,3));

const m = {
    fname : "Yunesh",
    lname : "Shrestha",
    fullname : function name(){
        return this.fname + this.lname
    }
};
console.log(m.fullname());
// Array => Map (to perform any operation of the array in element)
let mapping = [2,3,4];
let result = mapping.map((e,index)=>{
   return index + " " + e**2;
});
console.log(result);

// Array => filter

let result2 = mapping.filter((e)=>e>2);
console.log(result2);