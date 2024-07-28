// console.log(name: 'audi')

class Person {
    constructor(name, email, count=0){
        this.name = name;
        this.email = email;
        this.count = count;
    }
    login(){
        console.log(this.name, 'has logged in')
    }
    logout(){
        console.log(this.name, 'has logged out')
    }
}

let person1 = new Person('aryaman', 'a@a.com')
let person2 = new Person('ashish', 'b@b.com')
let person3 = new Person()
person1.login();
person2.login();
console.log(person3.name)

let rollNumber = new Number(10);
console.log(rollNumber)

let name = new String('aryaman');
console.log(name)

