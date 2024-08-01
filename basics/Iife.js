//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
}
)();

//global scope k pollution htane k liye
((name)=>{
    console.log(`DB is connected${name}`);
})('sahil') 