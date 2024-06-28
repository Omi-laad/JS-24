const user ={
    username :"Omkar",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="hitesh"
//  user.welcomeMessage()

//  console.log(this);


// function one (){
// let username ="omkar"
//     console.log(this.username);
// }


// one()



const chai = () => {
    let username ="Omkar"
    console.log(this)
}
 

//chai()



//  const addtwo = (num1 ,num2 ) => {
//     return num1 + num2 

//  }

//  console.log(addtwo(4,5))



const addtwo = (num1 ,num2 ) =>  (num1 + num2 )

 console.log(addtwo(4,5))
