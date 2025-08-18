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
}