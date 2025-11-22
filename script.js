class Smoothie {
    constructor(base, fruits, addOns) {
        this.base = base;
        this.fruits = fruits;
        this.addOns = addOns;
    }

    // Prices for ingredients
    static prices = {
        base: {
            milk: 2,
            yogurt: 3,
            "almond-milk": 4
        },
        fruits: {
            banana: 1,
            strawberry: 1.5,
            blueberry: 2
        },
        addOns: {
            protein: 2,
            "flax-seed": 1.5
        }
    };

    // Method to calculate total cost
    getTotalCost() {
        let totalCost = 0;

        // Add base price
        totalCost += Smoothie.prices.base[this.base];

        // Add fruit prices
        this.fruits.forEach(fruit => {
            totalCost += Smoothie.prices.fruits[fruit];
        });

        // Add add-on prices
        this.addOns.forEach(addOn => {
            totalCost += Smoothie.prices.addOns[addOn];
        });

        return totalCost;
    }

    // Method to get description
    getDescription() {
        let description = `Your smoothie consists of a ${this.base} base with ${this.fruits.join(", ")} and add-ons of ${this.addOns.join(", ")}.`;
        return description;
    }
}

function updateSmoothieImage(fruits) {
    let imageUrl = "images/default-smoothie.jpg";  // Default image

    if (fruits.includes('banana') && fruits.includes('strawberry')) {
        imageUrl = "images/banana-strawberry-smoothie.jpg";  // Image for banana & strawberry
    } else if (fruits.includes('blueberry')) {
        imageUrl = "images/blueberry-smoothie.jpg";  // Image for blueberry smoothie
    }

    // Update the image on the page
    document.getElementById("smoothieImageDisplay").src = imageUrl;
    document.getElementById("smoothieImage").style.display = "block";
}

function createSmoothie() {
    // Get the selected base
    let base = document.getElementById("base").value;

    // Get selected fruits
    let fruits = [];
    document.querySelectorAll('input[name="fruit"]:checked').forEach((checkbox) => {
        fruits.push(checkbox.value);
    });

    // Get selected add-ons
    let addOns = [];
    document.querySelectorAll('input[name="add-ons"]:checked').forEach((checkbox) => {
        addOns.push(checkbox.value);
    });

    // Create a smoothie object
    let smoothie = new Smoothie(base, fruits, addOns);

    // Get the smoothie description and total cost
    let description = smoothie.getDescription();
    let totalCost = smoothie.getTotalCost().toFixed(2);

    // Display the smoothie description and total cost
    document.getElementById("smoothieDescription").innerHTML = `
        <p>${description}</p>
        <p><strong>Total Cost: $${totalCost}</strong></p>
    `;
    document.getElementById("smoothieDescription").style.display = "block";

    // Update smoothie image based on selected ingredients
    updateSmoothieImage(fruits);
}
