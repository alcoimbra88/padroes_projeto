
// ==== COMPONENT ====
export abstract class ProductComponent {

    abstract getPrice(): number;

    add(product: ProductComponent): void {}
    remove(product: ProductComponent): void {}

}


// ==== LEAF =====
export class ProductLeaf extends ProductComponent{

    constructor(public name:string, public price:number){
        super();
    }

    getPrice(): number {
        return this.price
    }
    
}


// ==== COMPOSITE =====
export class ProductComposed extends ProductComponent{

    private children: ProductComponent[] = []

    getPrice(): number {
        return this.children.reduce( (sum, child) => sum + child.getPrice(), 0)
    }

    add(...products: ProductComponent[]): void {
        products.forEach(product => this.children.push(product)) 
    }

    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product)
        productIndex > -1 ? this.children.splice(productIndex,1) : null
    }

}

// ==== CLIENT CODE ====

const camiseta = new ProductLeaf('camiseta', 30)
const calca = new ProductLeaf('calca',50)
const loja = new ProductComposed()
loja.add(calca,camiseta)

const tenis = new ProductLeaf('tenis',300)
const cinto = new ProductLeaf('cinto', 100)
const subLoja = new ProductComposed()
subLoja.add(tenis,cinto)


loja.add(subLoja)

console.log(loja)
console.log(loja.getPrice())

