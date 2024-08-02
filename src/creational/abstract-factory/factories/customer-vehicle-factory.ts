import { Customer } from "../customers/customer";
import { VehicleProtocol } from "../vehicles/vehicle-protocol";


export interface CreateVehicleCustomer {

    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName:string ,customerName: string): VehicleProtocol;

}