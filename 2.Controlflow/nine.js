const myNums =  [ 1,2,3 ]


// const myTotal = myNums.reduce(function(acc,currval){
//    console.log(`acc value ${acc}and curr val is ${currval}`)
//     return acc +currval
// },0)


// console.log(myTotal);

const myTotal = myNums.reduce( (acc,curr) => acc+curr ,0)
console.log(myTotal);



const shoppingCart =[
    {
        itemName:"js",
        price:299
    },
    {
        itemName:"c",
        price:399
    },{
        itemName:"python",
        price:2999
    },{
        itemName:"c++",
        price:2299
    },
]

const my1Total = shoppingCart.reduce((acc,item) => acc + item.price,0 )
console.log(my1Total);