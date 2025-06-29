const object = require('./TestData.json')
console.log(object.cName)//synechron
console.log(object.totalEmp) //23000
console.log(object.credentials.ename);
console.log(object.credentials.password);
// for(let i=0;i<object.Branches.length;i++){
//     console.log(object.Branches[i].location)
//     console.log(object.Branches[i].area)
// }
object.Branches.forEach( x =>{
    console.log(x.location)
    console.log(x.area)
})