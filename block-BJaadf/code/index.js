let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Add a new element ('Papaya') into fruits array at end

fruits.push("Papaya");

// Remove the last element from fruits array

fruits.pop();

// Log the current length of fruits array

console.log(fruits.length);

// Remove the first element from fruits and log the value of fruits

console.log((delete fruits[0], fruits)); // Trying comma operator

// Log the element on index 0 and 1

console.log(fruits[0], fruits[1]);

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index

console.log((fruits.shift(), fruits));

// Add a new element to the start ('Guava') and shift the index of all other to one higher value

console.log((fruits.unshift("Guava"), fruits));

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value

console.log((fruits.unshift("Dragon Fruit"), fruits));

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

console.log(fruits[0] === "Dragon Fruit" && fruits[1] === "Guava");

// Update the value of index 1 to `Pears`

fruits[1] = `Pears`;

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)

console.log((fruits.splice(1, 0, "Kiwi", "Lemon"), fruits));

// Remove (slice) all the element from index 5

fruits.slice(5);

// Create another array named moreFruits with values ['Berries', 'Melons']

const moreFruits = ["Berries", "Melons"];

// Concat moreFruits into fruits array (re-assign so the value gets updated)

fruits = fruits.concat(moreFruits);

// Log the name of all fruit in console

fruits.forEach((item) => console.log(item));

// Convert each fruit name to lowercase and log it

fruits.forEach((item) => console.log(item.toLowerCase()));

// Convert all fruits name into lowercase and store in new array named lowercaseFruits

const lowercaseFruits = fruits.map((item) => item.toLowerCase());

// Convert all fruits name into uppercase and store in new array named uppercaseFruits

const uppercaseFruits = fruits.map((item) => item.toUpperCase());

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them

console.log(numbers.flat(1));

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.

console.log(numbersTwo.flat(1));

// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

console.log(numbersTwo.flat(2));

// Convert the numbersThree array to one level element.

console.log(numbersThree.flat(1));

// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

numbersThree = numbersThree.flat(Infinity);

console.log(numbersThree);

// Use forEach to log all the elements of numberThree array

numbersThree.forEach((item) => console.log(item));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map

const doubleNumbers = numbersThree.map((item) => item * 2);

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

const tripleNumbers = numbersThree.map((item) => item * 3);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

const halfNumbers = numbersThree.map((item) => item * 0.5);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

const oddNumbers = numbersThree.filter((item) => item % 2 !== 0);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

const evenNumbers = numbersThree.filter((item) => item % 2 === 0);

// Find the index of 10 in numbersThree array

numbersThree.indexOf(10);

// Reverse the values of numbersThree array

numbersThree.reverse();

// Reverse the values of numbersTwo array

numbersTwo.reverse();

// Join all fruits with '-', convert to uppercase and log it

console.log(fruits.join("-"));

// Join all fruits with '&', convert to lowercase and log it

console.log(fruits.join("&"));
