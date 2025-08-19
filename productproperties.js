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