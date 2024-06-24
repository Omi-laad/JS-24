
///////////////  Singleton 

//const tinderUser = new Object ()

const tinderUser = {}

tinderUser.id ="123ac"
tinderUser.name ="Omkar"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser ={
    email:"abc@gmail.com",
    fullname : {
        userfullname:{
            firstName:"Omkar",
            lastName:"Laad"
        }
    }
}

// console.log(regularUser.fullname)

// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstName)
// console.log(regularUser.fullname.userfullname.lastName)



const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}


// const obj3 = {obj1,obj2}

// const obj3 = Object.assign(obj1,obj2)

// const obj3 = Object.assign({},obj1,obj2)
//better practice  {} its a target where the obj1,obj2 data gets in.....


const obj3 = {...obj1,...obj2} // using spread operator


// console.log(obj3);


const users=[
    {
        id:1,
        email:"omkar@gmail.com",

    },{},{},{}
]



// console.log(users[0].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLogged'))



const course = {
    coursename:"JS",
    courseprize:"300",
    courseteacher:"hitesh"
}

// course.courseprize


// a better way to access


const {courseteacher} = course

const {courseteacher:instructor} = course


// console.log(courseteacher)

// console.log(instructor)





