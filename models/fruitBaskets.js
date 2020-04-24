var Fruit = require('./fruit');

class FruitBasket {

    constructor(id, max_weight, contents) {
        this.id = id;
        this.max_weight = max_weight;
        this.contents = [];

        for (let i = 0; i < contents.length; i++) {
            const element = contents[i];
            let fruit = new Fruit(element.type, element.color, element.weight) 
            this.contents.push(fruit)
        }
    }
    
}

module.exports = FruitBasket;