/*//if 
//const isUserloggedIn = true
//const temperature=67

//if(temperature<50){
  //  console.log("hello your code is right");

}
else{
    //console.log("tempertaure is high");
}
const score=200
if(score>100){
    const power="fly"
    //console.log(`user power${power}`);
}
const balance=700
//if(balance>500) console.log("test");

/*if (balance<500){
    console.log("less than");
}
else if(balance<750){
    console.log("it is less than 750");
}
else if(balance<900){
    console.log("it is lesser brother");
}
else{
    console.log("less than 1200");
}*/
const isUserloggedIn=true
const debitcard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(isUserloggedIn && debitcard){
    console.log("allow to buy ");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}