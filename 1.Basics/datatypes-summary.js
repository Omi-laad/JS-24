//Summary for datatypes

//primitive 
// 7 types : String ,Number , Boolean , null , undefined , Symbol , BigInt



const score = 100

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id =Symbol('123')
const anotherid = Symbol('123')


//console.log(id === anotherid);


//Reference (Non primitive):

// Arrays,Objects ,Functions

const heros =["Batman","Superman","Flash"]




let myObj ={
    name:"omkar",
    age:20,
}



const myfunction= function(){


}

//console.log(typeof myfunction);


//*************************MEMORIES***********************//


//STACK (Primitive) , HEAP(Non-Primitive)

let myname = "Omkar";

let othername = myname
othername = "Laad"


console.log(myname);
console.log(othername);



let user ={

    email:"abc@gmai.com", 
    upi:"userupi1"
}


let user2= user

user2.email = "aosmsgmail.com"

console.log(user.email)
console.log(user2.email)