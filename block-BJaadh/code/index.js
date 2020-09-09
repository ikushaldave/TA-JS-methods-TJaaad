// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

// - Find the index of `101` in numbers

numbers.indexOf(101);

// - Find the last index of `9` in numbers

numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"

strings.join(" ");

// - Add two new words in the strings array "called" and "sentance"

strings.splice(strings.length, 0, "called", "sentence");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

strings.join(" ");

// - Remove the first word in the array (strings)

strings.shift();

// - Find all the words that contain 'is' use string method 'includes'

strings.filter((e) => e.includes("is"));

// - Find all the words that contain 'is' use string method 'indexOf'

strings.filter((e) => e.indexOf("is") >= 0);

// - Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every((e) => e % 3 == 0);

//   Sort Array from smallest to largest

console.log([...numbers].sort((a, b) => a - b));

// - Remove the last word in strings

strings.pop();

// - Find largest number in numbers

numbers.reduce((a, c) => (a = a > c ? a : c));

// - Find longest string in strings

strings.reduce((a, c) => (a.length > c.length ? a : c));

// - Find all the even numbers

numbers.filter((e) => e % 2 === 0);

// - Find all the odd numbers

numbers.filter((e) => e % 2 !== 0);

// - Place a new word at the start of the array use (unshift)

strings.unshift("This");

// - Make a subset of numbers array [18,9,7,11]

numbers.slice(numbers.indexOf(18), numbers.indexOf(11) + 1);

// - Make a subset of strings array ['a','collection']

strings.slice(2, 4);

// - Replace 12 & 18 with 1221 and 1881

numbers.splice(numbers.indexOf(12), 1, 1221);
numbers.splice(numbers.indexOf(18), 1, 1881);

// - Replace words in strings array with the length of the word

strings.forEach((e, i) => strings.splice(i, 1, e.length));

// - Find the sum of the length of words using above question

strings.reduce((a, c) => (a += c));

// - Customers Array

var customers = [
	{ firstname: "Joe", lastname: "Blogs" },
	{ firstname: "John", lastname: "Smith" },
	{ firstname: "Dave", lastname: "Jones" },
	{ firstname: "Jack", lastname: "White" },
];

// - Find all customers whose firstname starts with 'J'

customers.filter((e) => e.firstname.startsWith("J"));

// - Create new array with only first name

customers.map((e) => e.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")

customers.map((e) => `${e.firstname} ${e.lastname}`);

// - Sort the array created above alphabetically

customers.map((e) => `${e.firstname} ${e.lastname}`).sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.

customers
	.map((e) => e.firstname)
	.filter(
		(e) =>
			e.includes("a") ||
			e.includes("e") ||
			e.includes("i") ||
			e.includes("o") ||
			e.includes("u")
	);
