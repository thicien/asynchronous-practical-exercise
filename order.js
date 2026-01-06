function orderBurger() {
    return new Promise((resolve) => 
        setTimeout(() => resolve("The burger is ready"), 2000)
    );
}

function orderFood() {
    return new Promise((resolve) => 
        setTimeout(() => resolve("The food is ready"), 3000)
    );
}

function orderDrink() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("The drink is ready"), 1000)
    );
}

async function orderMeal() {
        const meal = await Promise.all([orderBurger(), orderFood(), orderDrink()])
    console.log("The meal is ready")
    
}
orderMeal();