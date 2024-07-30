//... rest and spred oprator
/*function calculateCartPrice(...num1){
    return num1;

 }
 //console.log(calculateCartPrice(200,400,600,88,76,654));
 const user={
    userName:"sahil",
    price:199

 }
 function handleObject(anyobject) {
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
 }
    */
 
 const myArray=[200,400,500,300]
 function neverHandle(sahilObject){
    return sahilObject[3]
 }
 //console.log(neverHandle([200,400,500,1000]));
//-----functions from start
function sahilFun(){
    console.log("hey");
    console.log("hello");
    console.log("namastey");
    console.log("sat shri akal ji");
}
//sahilFun()
function addTwoNumber(num1,num2){
   // let result = num1+num2
    //return result
    return num1+num2
}
const result = addTwoNumber(2,89)
//console.log( "result",result);
function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter the username");

    }
    return `${username} just loggged in`
}
//console.log(loginUserMessage("sahil"));

const goneArray=[300,500,44,55,44]
function letsHandleArray(myarray){
    return myarray[4]
}
//console.log(letsHandleArray(goneArray))
//console.log(letsHandleArray([13,23,33,44,55,55]));
function calculateCartall(...num1){
    return num1;
}
console.log(calculateCartall(200,222,212))