import { Customer } from "../customers/customer";

export interface VehicleProtocol {

    customer: Customer
    
    pickup (): void;

}
