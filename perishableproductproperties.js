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
     * Overrides the parent's toString method to include the expiration date.
     * @returns {string} A formatted string with perishable product details.
     */
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}