const express = require('express');
const server = express();
const fs = require("fs");
const FruitBasket = require('./models/fruitBaskets');
const validator = require('validator');
const customValidator = require('./validation')

server.listen('3000', function () {
    console.log('Server started at port 3000');
})

try {
    let input = fs.readFileSync("input.json");
    if(!validator.isJSON(input.toString())) {
        fs.writeFileSync('output.json', JSON.stringify({ message: 'Invalid input json' }))
        return;
    }
    let inputBaskets = JSON.parse(input);
    let validate = customValidator.validateFruitBasketJSON(inputBaskets);
    if(!validate.success) {
        fs.writeFileSync('output.json', JSON.stringify({ message: validate.message }));
        return;
    } 
    let baskets = [];
    for (let i = 0; i < inputBaskets.length; i++) {
        const element = inputBaskets[i];
        baskets.push(new FruitBasket(element.id, element.max_weight, element.contents))
    }

    let output = [];
    for (let i = 0; i < baskets.length; i++) {
        const basket = baskets[i];
        let contents = basket.contents;
        let fruit_counts = new Map();
        let weight = 0;
        let fruit_counts_array = [];
        
        for (let j = 0; j < contents.length; j++) {
            const element = contents[j];
            let type = element.type;
            weight += Number(element.weight)
            if(fruit_counts.has(type)) {
                fruit_counts.set(type, Number(fruit_counts.get(type)) + 1)
            } else {
                fruit_counts.set(type,1)
            }
        }

        for (let [key, value] of fruit_counts) {
            fruit_counts_array.push({
                type: key,
                count: value
            })
        }

        output.push({
            id: basket.id,
            total_weight: weight,
            total_fruits: contents.length,
            fruit_counts: fruit_counts_array
        })

    }

    fs.writeFileSync('output.json', JSON.stringify(output, null, 4))

    
} catch (error) {
    console.log(error);
}
