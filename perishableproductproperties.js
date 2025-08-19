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