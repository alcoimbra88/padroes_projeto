import { Customer } from "../customers/customer";
import { VehicleProtocol } from "./vehicle-protocol";

export class IndividualCar implements VehicleProtocol{
    constructor(public name:string , public readonly customer:Customer){}

    pickup(): void {
        
        console.log(`${this.name} esta buscando ${this.customer.name}`)
    }
}