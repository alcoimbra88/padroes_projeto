import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter.";
import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/email-validator-protocol";

function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void{

    if(emailValidator.isEmail(email)){
        console.log('Email é válido - CLASSE')
    }else {
        console.log('Email não é válido')
    }

}

function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void{

    if(emailValidator(email)){
        console.log('Email é válido - FUNCAO')
    }else {
        console.log('Email não é válido')
    }

}


validaEmailClass(new EmailValidatorClassAdapter(), 'al_coimbra@hotmail.com');
validaEmailFn(emailValidatorFnAdapter,'al_coimbra@hotmail.com')