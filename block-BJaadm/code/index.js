let persons = [
	{ name: "John", grade: 8, sex: "M" },
	{ name: "Sarah", grade: 12, sex: "F" },
	{ name: "Bob", grade: 16, sex: "M" },
	{ name: "Johnny", grade: 2, sex: "M" },
	{ name: "Ethan", grade: 4, sex: "M" },
	{ name: "Paula", grade: 18, sex: "F" },
	{ name: "Donald", grade: 5, sex: "M" },
	{ name: "Jennifer", grade: 13, sex: "F" },
	{ name: "Courtney", grade: 15, sex: "F" },
	{ name: "Jane", grade: 9, sex: "F" },
	{ name: "John", grade: 17, sex: "M" },
	{ name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of name key from persons array

const peopleName = persons.map((e) => e.name);

// Create an array peopleGrade and store the value of grade key from persons array

const peopleGrade = persons.map((e) => e.grade);

// Create an array peopleSex and store the value of sex key from persons array

const peopleSex = persons.map((e) => e.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(peopleName.filter((e) => e.startsWith("J") || e.startsWith("P")));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

console.log(peopleName.filter((e) => e.startsWith("A") || e.startsWith("C")));

// Log all the filtered male ('M') in persons array

console.log(peopleName.filter((e) => e.startsWith("J") || e.startsWith("P")));

// Log all the filtered female ('F') in persons array

console.log(persons.filter((e) => e.sex == "M"));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

console.log(
	persons
		.filter((e) => e.sex == "F")
		.filter((e) => e.name.startsWith("C") || e.name.startsWith("J"))
);

// Log all the even numbers from peopleGrade array

console.log(persons.filter((e) => e.grade % 2 == 0));

// Find the first name that starts with 'J' in persons array and log the object

console.log(persons.find((e) => e.name.startsWith("J")));

// Find the first name that starts with 'P' in persons array and log the object

console.log(persons.find((e) => e.name.startsWith("P")));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log(
	persons.find((e) => e.name.startsWith("J") && e.grade > 10 && e.sex == "F")
);

// Filter all the female from persons array and store in femalePersons array

const femalePersons = persons.filter((e) => e.sex == "F");

// Filter all the male from persons array and store in malePersons array

const malePersons = persons.filter((e) => e.sex == "M");

// Find the sum of all grades and store in gradeTotal

const gradeTotal = persons.reduce((a, c) => (a += c.grade), 0);

// Find the average grade

console.log(gradeTotal / persons.length);

// Find the average grade of male

console.log(
	malePersons.reduce((a, c) => (a += c.grade), 0) / malePersons.length
);

// Find the average grade of female

console.log(
	femalePersons.reduce((a, c) => (a += c.grade), 0) / femalePersons.length
);

// Find the highest grade

console.log(persons.reduce((a, c) => (c.grade >= a.grade ? c : a)).grade);

// Find the highest grade in male

console.log(malePersons.reduce((a, c) => (c.grade >= a.grade ? c : a)).grade);

// Find the highest grade in female

console.log(femalePersons.reduce((a, c) => (c.grade >= a.grade ? c : a)).grade);

// Find the highest grade for people whose name starts with 'J' or 'P'

console.log(
	persons
		.filter((e) => e.name.startsWith("J") || e.name.startsWith("P"))
		.reduce((a, c) => (c.grade >= a.grade ? c : a)).grade
);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

console.log(peopleGrade.sort((a, b) => a - b));

// Sort the peopleGrade in descending order

console.log(peopleGrade.sort((a, b) => b - a));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

console.log([...peopleGrade].sort((a, b) => b - a));

// Sort the array peopelName in ascending `ABCD..Za....z`

console.log(peopleName.sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

console.log([...peopleName].sort());
