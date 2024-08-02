import { Customer } from "../customers/customer";
import { EnterpriseCustomer } from "../customers/enterprise-customer";
import { EnterpriseCar } from "../vehicles/enterprise-car";
import { VehicleProtocol } from "../vehicles/vehicle-protocol";

export class EnterpriseCreateVehicleCustomerFactory {

    createCustomer( customerName:string): Customer {
        return new EnterpriseCustomer (customerName)
    }

    createVehicle(vehicleName:string , customerName:string): VehicleProtocol {
        const customer = this.createCustomer(customerName)
        return new EnterpriseCar(vehicleName , customer)
    }

}