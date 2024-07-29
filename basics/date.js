//dates
let myDate = new Date()
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
//let createDate = new Date("0115-2022")
let createDate = new Date("01-11-2024")
//console.log(createDate.toDateString());
let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(Math.floor(Date.now()/1000));
let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday: "long"

})