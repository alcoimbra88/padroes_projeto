const personPrototype = {
    firstName :'Alan',
    lastName:'Coimbra',
    age:30,

    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const anotherPerson = Object.create(personPrototype)

console.log(anotherPerson.fullName())

anotherPerson.firstName = 'Henrique' //Faz shadow no protoype - sobrepoe

console.log(anotherPerson.fullName())