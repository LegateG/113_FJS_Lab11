// For testing, I'll combine the classes into this one file.

// --- ProductProperties Class ---
/**
 * Represents a basic product with common properties.
 */
class ProductProperties {
    // The constructor initializes an object instance of a class.
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    /**
     * Calculates the total value of this product in stock.
     * @returns {number} The total value (price * quantity).
     */
    getTotalValue() {
        return this.price * this.quantity;
    }
        /**
     * Returns a string representation of the product.
     * @returns {string} A formatted string with product details.
     */
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
    /**
     * A static method to apply a discount to an array of products.
     * @param {Array<ProductProperties>} products - An array of Product objects.
     * @param {number} discount - The discount percentage (e.g., 0.1 for 10%).
     */
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

// --- PerishableProductProperties Class ---
/**
 * Represents a product that can expire.
 */
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        // 'super()' calls the constructor of the parent class.
        super(name, price, quantity);

        // Initialize the new property.
        this.expirationDate = expirationDate;
    }
    /**
     * Overrides the parent's toString method to include the expiration date
     * and an expired status message if applicable.
     * @returns {string} A formatted string with perishable product details.
     */
    toString() {
        // Get the base string from the parent class.
        const baseString = super.toString();
        // Check if the product is expired using our new method.
        const expiredTag = this.isExpired() ? " (EXPIRED)" : "";
        // Append the expiration date and the expired tag (if any).
        return `${baseString}, Expiration Date: ${this.expirationDate}${expiredTag}`;
    }
        /**
     * Checks if the product is expired based on the current date.
     * @returns {boolean} True if the product is expired, false otherwise.
     */
    isExpired() {
        // Get the current date and time.
        const today = new Date();
        // Create a Date object from the expirationDate string.
        const expiryDate = new Date(this.expirationDate);
        // Set the time of today to 00:00:00 to compare dates only.
        today.setHours(0, 0, 0, 0);
        // Return true if the expiration date is before today.
        return expiryDate < today;
    }
}

// --- Store Class ---
/**
 * Manages the inventory of products for a store.
 */
class Store {
    constructor() {
        // Initializes the inventory as an empty array.
        this.inventory = [];
    }
    /**
     * Adds a product to the store's inventory.
     * @param {ProductProperties} product - The product instance to add.
     */
    addProduct(product) {
        this.inventory.push(product);
    }
    /**
     * Calculates the total value of all products in the inventory.
     * @returns {number} The total value of the inventory.
     */
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
    /**
     * Finds a product in the inventory by its name.
     * @param {string} name - The name of the product to find.
     * @returns {ProductProperties|null} The found product object, or null if not found.
     */
    findProductByName(name) {
        return this.inventory.find(product => product.name === name) ?? null;
    }
}
// 1. Create product instances
const apple = new ProductProperties("Apple", 0.50, 150);
const laptop = new ProductProperties("Laptop", 1200, 10);
const soap = new ProductProperties("Soap", 2.00, 50);
const milk = new PerishableProductProperties("Milk", 1.50, 40, "2025-09-15");
const cheese = new PerishableProductProperties("Cheese", 5.00, 30, "2025-11-20");
const oldYogurt = new PerishableProductProperties("Yogurt", 1.00, 20, "2024-03-15");
// 2. Create a store and add the products
const myStore = new Store();
myStore.addProduct(apple);
myStore.addProduct(laptop);
myStore.addProduct(soap);
myStore.addProduct(milk);
myStore.addProduct(cheese);
myStore.addProduct(oldYogurt);

console.log("\n--- Inventory Loaded ---");
myStore.inventory.forEach(p => console.log(p.toString()));
// 3. Print the total inventory value before the discount
const initialValue = myStore.getInventoryValue();
console.log(`\nTotal Inventory Value (Before Discount): $${initialValue.toFixed(2)}`);

// 4. Apply a 15% discount
console.log("\n--- Applying a 15% discount to all products... ---");
ProductProperties.applyDiscount(myStore.inventory, 0.15);

// 5. Print the total inventory value after the discount
const discountedValue = myStore.getInventoryValue();
console.log(`Total Inventory Value (After Discount): $${discountedValue.toFixed(2)}`);
// 6. Find a specific product and print its details
console.log("\n--- Searching for 'Laptop'... ---");
const foundProduct = myStore.findProductByName("Laptop");

if (foundProduct) {
    console.log("Product Found!");
    console.log(foundProduct.toString());
} else {
    console.log("Product not found.");
}

console.log("\n--- System Test Complete ---");
// --- PART 5: Testing Script ---
console.log("--- Initializing Inventory Management System ---");