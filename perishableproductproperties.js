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