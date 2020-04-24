var validator = require('validator');

module.exports = {

    validateFruitBasketJSON(baskets) {

        for (let i = 0; i < baskets.length; i++) {
            const basket = baskets[i];
            let id = basket.id;
            let max_weight = basket.max_weight;
            let contents = basket.contents;
            if (validator.isEmpty(id)) return { success: false, message: 'One or more fields are missing in baskets' };
            if (validator.isFloat(String(max_weight),{ min: 0 }) && Array.isArray(contents)) {
                for (let i = 0; i < contents.length; i++) {
                    const fruit = contents[i];
                    if (validator.isEmpty(fruit.type) || validator.isEmpty(fruit.color)) return { success: false, message: 'One or more fields are missing in contents' };
                    if (validator.isFloat(String(fruit.weight), {min: 0}) && validator.isAlpha(fruit.type) && validator.isAlpha(fruit.color)) continue;
                    else return { success: false, message: 'One or more data types doesn\'t match the required data type' };
                }
                return {success: true}
            }
            else {
                return { success: false, message: 'One or more data types doesn\'t match the required data type' };
            } 
        }
    }
}