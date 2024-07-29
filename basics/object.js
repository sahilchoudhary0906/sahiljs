// singleton :  constructor se bnega tbi singleton hoga
//Object.create
const mySym= Symbol("key1")
const jsUser={
    name:"sahil",
    [mySym]:"mykey1",//carefully
    age:21,
    location:"chandigarh",
    email:"chdsahil237@gmail.com",
    isLoggedIn:false
}
//console.log(jsUser.email);
//console.log(jsUser["name"]);
//console.log( typeof jsUser[mySym]);

//Object.freeze(jsUser)

//console.log(jsUser.email);
//console.log(jsUser);
jsUser.greeting = function (){
    console.log("hello js user");
}
jsUser.greetingTwo = function (){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());