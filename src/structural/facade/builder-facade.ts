import { MainDishBuilder } from "../../creational/builder/classes/main-dish-builder"
import { VeganDishBuilder } from "../../creational/builder/classes/vegan-dish-builder"

export class BuilderFacade {

    // Essa é fachada para a pasta src/creational/builder/index.ts

    private mainDishBuilder = new MainDishBuilder()
    private veganDishBuilder = new VeganDishBuilder()


    makeMeal1(): void {
        this.mainDishBuilder.makeMeal()
        console.log(this.mainDishBuilder.getMeal())
        console.log(this.mainDishBuilder.getPrice())
    }

    makeMeal2(): void {
        this.mainDishBuilder.reset()
        const meal2 = this.mainDishBuilder.makeBeberage().makeDessert()
        console.log(meal2.getMeal())
        console.log(meal2.getPrice())
    }

    makeMeal3(): void {
        const veganMeal = this.veganDishBuilder.reset().makeBeberage().makeMeal().makeDessert()

        console.log(this.veganDishBuilder.getMeal())
        console.log(this.veganDishBuilder.getPrice())

    }

}