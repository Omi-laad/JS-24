//objects


//singleton

//object literals
// constructor method
// Object.create


const sym = Symbol("key1")

const JsUser ={ 
       name:"Omkar",
       age:20,
       [sym]:"key1",
       email:"kar@gmail.com",
       location:"Mumbai",
       isLoggedIn:false,
       lastLoginDays:["Monday","Tuesday" ]
}

// 2 ways to access

// console.log(JsUser.email)
// console.log(JsUser["email"])


//
// console.log(JsUser[sym])
// console.log(typeof JsUser[sym])


JsUser.email = "abc@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "abc.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("HEllo");
}

JsUser.greeting2 = function(){
    console.log(`HEllo,${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

