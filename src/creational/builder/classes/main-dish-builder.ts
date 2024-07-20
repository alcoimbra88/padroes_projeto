import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol{
    
    private _meal: MealBox = new MealBox()
    
    reset(): this {
        this._meal = new MealBox()
        return this
    }

    makeMeal(): this {
        const rice = new Rice ('Arroz' , 5)
        const bean = new Beans ('Feijao' , 10)
        const meat = new Meat ('Carne' , 15)

        this._meal.add(rice,bean,meat)

        return this
    }
    makeBeberage(): this {
        const beverage = new Beverage ('Suco' , 5)

        this._meal.add(beverage)

        return this
    }
    makeDessert(): this {
        const dessert = new Dessert ('Pudim' , 7)

        this._meal.add(dessert)

        return this
    }

    getMeal(): MealBox{
        return this._meal
    }

    getPrice(): number{

        return this._meal.getPrice()
    }
}

