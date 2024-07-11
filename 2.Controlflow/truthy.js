// const userEmail =[]

// if (userEmail){
//     console.log("got user email");
// }

// else{

//     console.log("dont have user email");
// }


//falsy values

// false ,0,-0, BigInt 0n, " " null , undefined ,NaN

//truthy values(any thing written inside string is truthy value)
//"0",'false', " " , [ ],{},function(){}


// if (userEmail.length === 0) {
//     console.log("array empty");
// }



//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);




// Ternery Operator



const iceTeaPrices = 100
iceTeaPrices >= 120 ? console.log("astheic") : console.log("more then 80 ");