// high array loops-----
//for of loop
const arr=[1,2,3,4,5]
for (const num of arr){
    //console.log(num);

}
const greetings ="hello world"
for(const greet of greetings){
//    console.log(`each char is ${greet}`);
}
//maps
const map =new Map()
map.set('IN',"IND ")
map.set('USA',"United States of america")
map.set('fr',"france")
console.log(map);

for (const [key,value] of map) {
    console.log(key, value);
    
}
const myObject ={
    hame1:"nfs",
    game2:"spiderman"
}
/*for (const [key, value] of myObject) {
    console.log(key,"=",value);
    
}*/
