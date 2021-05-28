const groceries = [{
        id: 1,
        food: "cheese",
        type: "cheddar",
        price: 8.00
    },
    {
        id: 2,
        food: "milk",
        type: "2 percent",
        price: 10.00
    },
    {
        id: 3,
        food: "bread",
        type: "wheat",
        price: 5.00
    },
    {
        id: 4,
        food: "ice cream",
        type: "mint chocolate",
        price: 13.00
    },
    {
        id: 5,
        food: "water",
        type: "plain 20 pack",
        price: 18.00
    }
]

for (const grocery of groceries) {
    console.log(`Grocery Item ${grocery.id}
    ${grocery.type} ${grocery.food}
    amount item will cost: ${grocery.price} dollars
    -------------
    `)
}

console.log(groceries);