//functions

// function addtTwoNo(number1,number2) {

//     console.log(number1 + number2);

// }


function addtTwoNo(number1,number2) {
    // let result =number1+ number2
    // return result
    // return number1 + number2


}


// addtTwoNo(5,7)

// addtTwoNo(5,"7")
// addtTwoNo(5,"a")
// addtTwoNo(5,null)

const result = addtTwoNo(5,7)

// console.log("result is ",result);



function loginUser (username= "User"){

    if(!username){
        console.log("Please enter a username")
        return
    }
  return `${username}  just Logged in`
    

}


// console.log(loginUser("Omkar"))

//console.log(loginUser(""))


// console.log(loginUser())



function shopingCartPrice(...num1){
    
  
    return num1

}

// console.log(shopingCartPrice(2,200,400,500))

const user={
    username:"omkar",
    price:200
}


function handleObject (anyobject){
    console.log(`USername is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username:"smae",
//     price:333
// })

