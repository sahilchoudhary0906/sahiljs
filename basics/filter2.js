const myNums=[1,2,3]
//const newNums =myNums.map((num)=> num +10)
//console.log(newNums);
//const newNums=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
//console.log(newNums);

//myTotal=myNums.reduce(function (acc,currval){
  //  console.log(`acc vLUE:${acc} and curvall:${currval}`);
    //return  acc + currval
//},0)
//console.log(myTotal);
const myTotal=myNums.reduce((acc,curvall)=>(acc+curvall),0)
console.log(myTotal);
const shoppingCart=[{
    itemName:"shoes",
    price:12999
},
{
    itemName:"pen",
    price:29919
},
{
    itemName:"cap",
    price:2399
},
{
    itemName:"bill",
    price:29998
}]
const pricetopay=shoppingCart.reduce((acc , item)=>acc+item.price,0)
console.log(pricetopay);