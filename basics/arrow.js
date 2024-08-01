//arrow function----------------------------
//this function
const user ={
    userName:"sahil",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName},welcome to website`);
        console.log(this);
    }
}
//user.welcomeMessage()
//user.userName="sam"
//user.welcomeMessage()
//console.log(this);
function chai(){
    let username ="sahil"
    console.log(this);
}
//chai()
//const chai=function(){
  //  let username="sahil"
 //   console.log(this.username);
//}
//console.log(chai);
const addTwo=(num1,num2)=>{
    return num1+num2

}
//console.log(addTwo(2,6));
const addnum=(num1,num2)=>  (num1+ num2)

//console.log(addnum(3,5));
const addtwo =(num1,num2)=>({username:"sahil"})
console.log(addtwo(1,2));
