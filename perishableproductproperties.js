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

}