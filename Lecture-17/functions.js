function testing(){
    var abc = 20;
    let xyz = 'block scope';
    console.log(abc);
}
console.log(abc)
if(1){
    console.log(xyz)
    console.log(abc)
}
console.log('ouside the scope:',xyz)
testing();
console.log(abc);

// var name = 'cipher'
let year = 2024
function test(){
    console.log(name,year)
}
test()

let myfunc = function(){
    console.log('inside the function')
}
console.log(name)
let name = 'aryaman'

// arrow function
let myfunct2 = () => {
    console.log(this)
}
myfunct2()

let function3 = (name) => {
    consol.log(name)
}
function3(name);