
/**
 * This function calculates the total price of the array
 * @param {Array} array cartProducts: Array of objects with price element
 * @returns {number} Total price of the array 
 */
export const totalPrice = (array) => {
    let varTotalPrice = 0;
    array.forEach(element => {
        varTotalPrice+= element.price;
    });
    return varTotalPrice;
}