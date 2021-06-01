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

const addToShoppingList = (newGroceries) => {
    const lastIndex = groceries.length - 1
    const lastItemId = groceries[lastIndex].id
    const newId = lastItemId + 1

    newGroceries.id = newId
    groceries.push(newGroceries)
}

const juice = {
    food: "juice",
    type: "apple",
    price: 3.05,
    dateCreated: "June 1st, 2021"
}

const cookies = {
    food: "cookies",
    type: "oreo",
    price: 5.05,
    dateCreated: "June 1st, 2021"
}

const oranges = {
    food: "oranges",
    type: "mandarin",
    price: 2.00,
    dateCreated: "June 1st, 2021"
}

const tortillas = {
    food: "tortillas",
    type: "original",
    price: 3.00,
    dateCreated: "June 1st, 2021"
}

const popsicles = {
    food: "popsicles",
    type: "blue raspberry",
    price: 1.00,
    dateCreated: "June 1st, 2021"
}

addToShoppingList(juice)
addToShoppingList(cookies)
addToShoppingList(oranges)
addToShoppingList(tortillas)
addToShoppingList(popsicles)

for (const grocery of groceries) {
    if (grocery.price >= 8) {
        console.log(grocery.price)
    }
}

console.log(groceries);