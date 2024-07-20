import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";


const mainDishBuilder = new MainDishBuilder

mainDishBuilder.reset().makeBeberage().makeDessert().makeMeal()

console.log(mainDishBuilder.getMeal())
console.log(mainDishBuilder.getPrice())

const meal2 = mainDishBuilder.reset().makeBeberage().makeDessert()

console.log(meal2.getMeal())
console.log(meal2.getPrice())

const veganMeal =  new VeganDishBuilder
veganMeal.reset().makeBeberage().makeMeal().makeDessert()

console.log(veganMeal.getMeal())
console.log(veganMeal.getPrice())
