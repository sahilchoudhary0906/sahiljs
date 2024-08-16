/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="sahil.css">

</head>
<body>
<h1>Color scheme switcher</h1>
<div class="hey">
    <div class="button" id="yellow"></div>
    <div class="button" id="pink"></div>
    <div class="button" id="blue"></div>
    <div class="button" id="red"></div>
</div>
<script src="project.js"></script>

</body>
</html>
-------------------
div{
    height: 100px;
    width: 100px;
    border: 2px solid black;
    margin: 10px;
}
.hey{
    height: 500px;
    width: 600px;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
#pink{
    background-color: pink;
}
#blue{
    background-color: blue;
}
#red{
    background-color: red;
}
#yellow{
    background-color: yellow;
}
    ----------------------------------
    // first promise program
const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({
                username:"sahil",
                age:21,
                IsloggedIn:true
               
            })
        }
        else{
            reject(console.log("error is found")
            )
        }
        
    }, 1000);

}).then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(console.log("issue is resolvedd"))

const myHeros=["man","onman","weman","laman"]
const heroPower={
    man:"energy",
    oman:"slingy",
    weeman:"health",
    laman:"noone"
}
Object.prototype.sahil=function(){
    console.log("sahil being sahil");
    
}
heroPower.sahil()
--------------------------*/


