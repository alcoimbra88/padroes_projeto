import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprise-customer-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-customer-vehicle-factory";



const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory()
const individualFactory = new IndividualCreateVehicleCustomerFactory()


const car1 = enterpriseFactory.createVehicle('Fusca', 'Alan')
const car2 = individualFactory.createVehicle('Celta','Henrique')

car1.pickup()
car2.pickup()