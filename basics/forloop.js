//first loop : for loop

//for (let index = 0; index < =array.length; index++) {
  //  const element = array[index];
    
//}
//for(let i=0; i<= 10;i++){
  //  if(i==5){
        //.log("5 is best number");
    //}
    //console.log(i);
//}
/*for (let i = 1; i <=10; i++) {
    console.log(`outer loop value${i}`);
    for (let j = 1; j <=10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
        console.log(i+ '*' +j +' = ' + i*j);
    }
   
}
let myArray= ["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
console.log(myArray.length);
*/
//break and continue
for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log("5 is detected");
        continue//skip the value 
        break//break the loop
    }
    console.log(`value of i is ${i}`);
    
}