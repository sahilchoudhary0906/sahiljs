let myArray= [1,2,3,4,5,6]
//console.log(myArray)
// resizable
//console.log(myArray[4]);
const myHeros= ["sahil","gugi","bros"]
const myArr2 = new Array (1,2,3,4,5)
//console.log(myArr2.length);
// array methods
//myArr2.push(6,7)
//console.log(myArr2);
//myArr2.pop()
//console.log(myArr2); 
//myArr2.unshift(10)
//myArr2.shift()
//console.log(myArr2);
//console.log(myArr2.includes(19));
//console.log(myArr2.indexOf(4));
//const newArray = myArr2
//console.log(newArray);
//console.log(typeof  newArray);
//slice, splice
console.log("A",myArr2);
const nyn1 =myArr2.slice(1,3)
console.log(nyn1);
console.log("B",myArr2);
const nyn2 =myArr2.splice(1,3)
console.log("c",myArr2);
console.log(nyn2);
// splice manipulate the original array
// slice maynot manipulate the original array
//------second part--------------
const marvel_heros =["thor","iron man","spiderman","deadpool"]
//console.log(marvel_heros)
const theBoys=["noar","homelander","deep","starlight"]
//console.log(theBoys);
//marvel_heros.push(theBoys)
//console.log(marvel_heros[4]);
//const newHero=marvel_heros.concat(theBoys)
//console.log(newHero);
const newHero=[...marvel_heros,...theBoys]
//console.log(newHero[4]);
/*const anotherArray=[1,2,3,[4,5,6],5,[9,[5,7]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)
console.log(Array.isArray("sahil"))
console.log(Array.from("sahil"));
console.log(Array.from( {name:"sahil"}));//interesting*/
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
