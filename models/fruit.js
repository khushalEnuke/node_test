const validator = require('../validation');

class Fruit {

    constructor(type, color, weight) {

        // let validate = validator.validateFruit(type, color, weight);
        // if(!validate.success) return validate.message;
        this.type = type;
        this.color = color;
        this.weight = weight;
    }
}

module.exports = Fruit