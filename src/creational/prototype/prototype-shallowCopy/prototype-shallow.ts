export interface Prototype {
    clone(): Prototype
}


export class Person implements Prototype {
    public addresses: Address[] = []

    constructor(public name: string, public age: number){

    }

    clone() :this {
        const newObj = Object.create(this)
        return newObj
    }

    addAdress (address: Address){
        this.addresses.push(address)

    }
}

export class Address {
    constructor(public street: string, public number: number){}
}

const address1 = new Address('Endereco 1', 15)
const person1 = new Person('Alan',30)
const person2 = person1.clone()

person1.addAdress(address1)
console.log(person1.addresses)
console.log(person2)
console.log(person2.name)

person2.name = 'Henrique'
person2.age = 5

console.log(person2)
console.log(person2.name)
