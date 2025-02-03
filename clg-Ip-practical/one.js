// const materials = ['omkar','piyush','sahil']

// console.log(materials.map((materials) => materials.length));
// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }


//array


//Basics
const myArray = [1,2,3,4,5]

 //console.log(myArray);

const myHeros = ["BATMAN","FLASH"]

// console.log(myHeros[1]);


//methods 
 myArray.push(6)
myArray.push(7)

 //console.log(myArray)
 //myArray.pop()
 //console.log(myArray)


 myArray.unshift(9)
//  console.log(myArray)


myArray.shift(9)

// console.log(myArray);

// console.log(myArray.includes(3));

// console.log(myArray.indexOf(3));


//slice splice

//orignal array doesnot change in array
// console.log("A",myArray);

// const myn1 = myArray.slice(1,3)

// console.log(myn1);

// console.log("B",myArray)

// //Splice manipulates with data 
// const myn2 = myArray.splice(1,3)

// console.log(myn2);
// console.log("C",myArray)

const dc=["flash","batman","superman"]
const marvel=["ironman","hulk","thor"]

// marvel.push(dc)
// console.log(marvel)

// const allheros = marvel.concat(dc)
// console.log(allheros)

//Spread operator
// const allheros = [...marvel, ...dc]

// console.log(allheros)


const arry =[1,2,3,4,5,[6,7,8,9],10,[11,12,13,[14,15]] ]

const rearry = arry.flat(Infinity)


// console.log(rearry)



// console.log(Array.isArray("Omkar"));

// console.log(Array.from("Omkar"))

// console.log(Array.from({name:"Omkar"}))







let score1=100
let score2=200
let score3=300

// console.log(Array.of(score1,score2,score3))



function otp (length){
    let otp = '';
    for (let i = 0 ;i < length; i ++){
        otp += Math.floor(Math.random()*10);
    }
    return otp;
}


console.log(otp(4));
