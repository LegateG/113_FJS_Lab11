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
}