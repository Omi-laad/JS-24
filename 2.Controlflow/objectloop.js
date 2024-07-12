const myObj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myObj) {
    console.log(`${key} language for ${myObj[key]}`);
}


const program = ["js","rb","c","c++"]

for (const key in program) {
   console.log(program[key]);
}

const map = new Map()

map.set('IN',"India")
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);
}