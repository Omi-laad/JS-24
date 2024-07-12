// for of 
//array specific loops

//["" ,"",""]
//{"",""}

const arr = [1,2,3,4,5]

for (const num of arr ){

console.log(num);

}

const greetings = "hello world"

for (const grret of greetings) {
    console.log(`each char is ${grret}`);
}


//maps 

const map = new Map()

map.set('IN',"India")
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")


for (const [key,value] of map) {
    console.log(key,':=>',value);
}

