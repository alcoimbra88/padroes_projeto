function Person (firstName, lastName,age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
}


const personPrototype = {
    firstName :'Alan',
    lastName:'Coimbra',
    age:30,

    fullName(){
        return `${this.firstName} ${this.lastName} tem ${this.age} anos`
    }
};

Person.prototype = Object.create(personPrototype) // Atribui um prototype
Person.prototype.constructor = Person // Retorna o construtor da classe, pois ao manipular o proto da classe se perder o construtor

//Equivalente a Herança
function SubPerson(firstName,lastName,age){
    Person.call(this, firstName,lastName,age);
    this.fromSubClass = "teste"
}

SubPerson.prototype = Object.create(Person.prototype)
SubPerson.prototype.constructor = SubPerson

const person1 = new Person('Alan','Coimbra',30)

console.log(person1)
console.log(person1.fullName())


console.log ('====================================')

const person2 = new SubPerson('Henrique', 'Coimbra', 5)

console.log(person2)
console.log(person2.fullName())