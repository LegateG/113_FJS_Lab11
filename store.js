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