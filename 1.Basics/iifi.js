//Immediately Invoked Function Expressions(IIFE)

(function connect(){
    console.log(`DB CONNECTED`);
})();


((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('omkar') 