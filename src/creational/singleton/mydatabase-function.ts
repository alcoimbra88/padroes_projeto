// Outra forma de fazer o singleton, exportando uma função auto invocavel
//Importa no modulo a e b e utiliza da mesma forma

import { User } from "./user";
  
    export const MyDatabaseFunction = (function() {

        const users: User[] = []

        return     {
            add(user:User) : void {
                users.push(user);
            },
        
            remove(index: number): void {
                users.splice(index,1)
            },
        
            show(): void{
                for (const user of users){
                    console.log(user)
                }
            }
        }
    })()
    
    
    
    
    
    


    




