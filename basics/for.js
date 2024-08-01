const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
const prog=["js","python","java","cpp","rb"]
    for (const key in prog) {
        console.log(`${key} language of ${prog[key]}`);

       
    }
    const map =new Map()
    map.set('IN',"IND ")
    map.set('USA',"United States of america")
    map.set('fr',"france")
    for (const key in map) {
        console.log(key);
    }

