// === COMPONENT ===
export abstract class ValidationComponent {

    abstract validate(value: unknown): boolean;

}

// === LEAF ====
export class ValidateEmail extends ValidationComponent{
    validate(value: unknown): boolean {

         if (typeof value !== 'string') return false
         return /@/.test(value) 

    }
}

export class ValidateString extends ValidationComponent {

    validate(value: unknown): boolean {        
        return typeof value === 'string'
    }

}

export class ValidateNumber extends ValidationComponent{

    validate(value: unknown): boolean {

        if (typeof value !== 'string') return false
        return /\d+/.test(value) 

    }

}

// ===== COMPOSITE ====
export class ValidateComposite extends ValidationComponent {

    private children :ValidationComponent[] = []

    validate(value: unknown): boolean {

        for(const child of this.children){
            const validation = child.validate(value)
            if( !validation) return false
        }

        return true
    }

    add(...validations: ValidationComponent[]){
        validations.forEach( validate => this.children.push(validate)) 
    }
}

// === CLIENT CODE ===

const validateEmail = new ValidateEmail ()
const validateString = new ValidateString()
const validateNumber = new ValidateNumber()


const validations = new ValidateComposite()
validations.add(validateEmail, validateString, validateNumber)

console.log(validations.validate('alan1@hotmail.com'))
