let person =  {
    name: 'sam',
    age: 20,
    email: 'xyz@gmail.com',
    status: 'true',
    children: {
        name: 'john',
        age: 10
    },
    hobbies: {
        h1: 'music', 
        h2: 'games'
    },
    login: function(){
        console.log('Logged in')
    },
    
}
console.log(person.name)
console.log(person.children.name)
console.log(person.hobbies.h1)
console.log(person.login())

console.log(this)



let functions4 = function = () => {
     console.log(this)
}