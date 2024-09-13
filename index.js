/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

// ------------------ Complete the functions written below ------------------------------ //

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */

function logNames(items) {
  // Looks at the items within the array and console logs the name within that item.
  function names(obj) {
    console.log(obj.name);
  }
  //Loops the function names() for each item in the array.
  items.forEach(names);

  //Below is syntactic sugar for the above function within the main function.
  //items.forEach((obj)=> console.log(obj.name))
}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */

function getUppercaseNames(items) {
  // Looks at the objects within the array and returns the name within the item.
  function names(obj) {
    return obj.name;
  }
  //Creates a copy of the original array and returns each item within the new array with the original items name un uppercase letters.
  return items.map((obj) => obj.name.toUpperCase());
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */

function getItemById(items, id) {
  //Finds the first item with an id that matches the user input and returns the entire item.
  const item = items.find((obj) => id === obj.id);
  return item;
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name`
 */
function getItemPriceByName(items, name) {
  //Finds the first item within the array that has a name that matches the the user input.
  const item = items.find((item) => item.name === name);
  //Returns the price of the item if the item is found in the array, otherwise prints the statement "Can't find that item.".
  return item ? item.price : "Can't find that item.";
}

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  //Filters through the items for ones that have a category value matching the user input and then returns those items within an array.
  const item = items.filter((item) => item.category === category);
  return item;
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  //Counts the items within the array and returns the total number.
  let count = 0;
  for (const item of items) {
    count++;
  }
  return count;
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function calculateTotalPrice(items) {
  //Looks for the price key in each item and adds together all the values. It then returns the total price.
  let count = 0;
  for (const item of items) {
    count += item.price;
  }
  return count;
}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

/** @type {Item[]} */
const INVENTORY = [
  { id: 1, name: 'apple', price: 1.75, category: 'fruit', quantity: 100 },
  { id: 2, name: 'banana', price: 0.25, category: 'fruit', quantity: 137 },
  { id: 3, name: 'orange', price: 1.0, category: 'fruit', quantity: 10 },
  { id: 4, name: 'broccoli', price: 3.0, category: 'vegetable', quantity: 67 },
  { id: 6, name: 'milk', price: 5.75, category: 'dairy', quantity: 90 },
  { id: 7, name: 'cheddar', price: 4.0, category: 'dairy', quantity: 63 },
  { id: 8, name: 'sourdough', price: 5.5, category: 'grains', quantity: 81 },
];

console.log('Welcome! We carry the following items:');
logNames(INVENTORY);

console.log('Here are the names again in all uppercase:');
console.log(getUppercaseNames(INVENTORY));

console.log(`In total, we have ${countItems(INVENTORY)} items in stock.`);

const totalCost = calculateTotalPrice(INVENTORY);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt('Enter the ID of an item:', '1');
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(INVENTORY, +itemId));

const itemName = prompt('Enter the name of an item:', 'apple');
console.log(
  `The price of ${itemName} is ${getItemPriceByName(INVENTORY, itemName)}.`
);

const category = prompt('Enter a category you would like to see:', 'fruit');
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(INVENTORY, category));
