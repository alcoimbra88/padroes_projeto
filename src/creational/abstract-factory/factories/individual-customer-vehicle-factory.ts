import { Customer } from "../customers/customer";
import { IndividualCustomer } from "../customers/individual-customer";
import { IndividualCar } from "../vehicles/individual-car";

export class IndividualCreateVehicleCustomerFactory {

    createCustomer(customerName: string): Customer{
        return new IndividualCustomer(customerName)
    }

    createVehicle(vehicleName: string, customerName: string , ){
        const customer = this.createCustomer(customerName)

        return new IndividualCar(vehicleName, customer)
    }

}