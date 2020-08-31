// Test using EXAMPLE functions given below each function.

/*
  Create a function named addTwo which accepts a number, adds 2 to the number and return the new value.
*/

function addTwo(num) {
	return num + 2;
}

/*
  Create a function named addThree which accepts a number, adds 3 to the number and return the new value.
*/

function addThree(num) {
	return num + 3;
}

/*
  Create a function named addFive which accepts a number, adds 5 to the number and return the new value.
*/

function addFive(num) {
	return num + 5;
}

/*
  Create a function named addTwoToArray which accepts:
    - An array of numbers
    - Returns a new array where 2 is added to each element
    - While doing so use the funciton addTwo
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addTwoToArray(arr) {
	const finalArr = [];

	for (let num of arr) {
		finalArr.push(addTwo(num));
	}

	return finalArr;
}

addTwoToArray(arr);

/*
  Create a function named addThreeToArray which accepts:
    - an array of numbers
    - aeturns a new array where 2 is added to each element
    - while doing so use the funciton addThree
*/

function addThreeToArray(arr) {
	const finalArr = [];

	for (let num of arr) {
		finalArr.push(addThree(num));
	}

	return finalArr;
}

addThreeToArray(arr);

/*
  Create a function named addFiveToArray which accepts:
    - an array of numbers
    - aeturns a new array where 2 is added to each element
    - while doing so use the funciton addThree
*/

function addFiveToArray(arr) {
	const finalArr = [];

	for (let num of arr) {
		finalArr.push(addFive(num));
	}

	return finalArr;
}

addFiveToArray(arr);

/*
In above function addTwoToArray, addThreeToArray, addFiveToArray we are repeating the code, let's fix this.

  Create a function named changeArray which accepts two arguments:
    - an array of numbers
    - a callback function
    - pass each element of array to the callback function
    - and store the value returned from callback function in a new array
    - return the new array

  EXAMPLE:
    changeArray([1, 2, 3, 4, 5, 6], addTwo); // [3, 4, 5, 6, 7, 8]
    changeArray([1, 2, 3, 4, 5, 6], addThree); // [4, 5, 6, 7, 8, 9]
    changeArray([1, 2, 3, 4, 5, 6], addFive); // [6, 7, 8, 9, 10, 11]
*/

function changeArray(arr, cb) {
	const finalArr = [];

	for (let num of arr) {
		finalArr.push(cb(num));
	}

	return finalArr;
}

changeArray([1, 2, 3, 4, 5, 6], addTwo); // [3, 4, 5, 6, 7, 8]
changeArray([1, 2, 3, 4, 5, 6], addThree); // [4, 5, 6, 7, 8, 9]
changeArray([1, 2, 3, 4, 5, 6], addFive); // [6, 7, 8, 9, 10, 11]

/*
  Create a function called sendMessage that accepts two arguments:
    - a string (message) and a function (callback).
    - it will return the result of the callback function called with the message as argument

  EXAMPLE:
    sendMessage("Hello", console.log);
    sendMessage("Hello Alert!", alert);
    sendMessage("Hello Prompt!", prompt);
*/

function sendMessage(str, cb) {
	return cb(str);
}

/*

 Create a function named `first` that accepts an argument a function (callback) and return the same function defination.

*/

function first(cb) {
	return first;
}

/*
 Create a function named `second`
  - Inside second create another function named `third` which accepts a number, adds 1 to it and returns it
  - Return the function defination (third) from the second function
  - Also write the required code to call the function
*/

function second() {
	function third(n) {
		return n++;
	}

	return third;
}

second();

/*
 Write a function named `callMe` which 
  - accept a function (callback function) as argument.
  - Store the value returned by calling the callback function in a variable named `final`
  - return final varibale from the function.
  - also write the required code to call the function.
*/

function callMe(cb) {
	let final = cb();
	return final;
}

callMe(first);

// Data Starts (Don't change this)
const people = [
	{ name: "John Doe", age: 16 },
	{ name: "Thomas Calls", age: 19 },
	{ name: "Liam Smith", age: 20 },
	{ name: "Jessy Pinkman", age: 18 },
];

const grades = [
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
];
// Data Ends

/*
  Create a function named isAdult which accepts:
    - an object
    - returns true or false based on the `age` property in the object is greater than 18 or not

  EXAMPLE:
    isAdult(people[0]); // false
    isAdult(people[1]); // true
    isAdult(people[2]); // true
*/

function isAdult(obj) {
	return obj.age > 18;
}

isAdult(people[0]); // false
isAdult(people[1]); // true
isAdult(people[2]); // true

/*
  Create a function named isMale which accepts:
    - an object
    - returns true or false based on the `sex` property in the object is `M` or not

  EXAMPLE:
    isMale(grade[0]); // true
    isMale(grade[1]); // false
    isMale(grade[2]); // true
*/

function isMale(obj) {
	return obj.sex == "M";
}

isMale(grades[0]); // true
isMale(grades[1]); // false
isMale(grades[2]); // true

/*
  Create a function named isFemale which accepts:
    - an object
    - returns true or false based on the `sex` property in the object is `F` or not

  EXAMPLE:
    isMale(grade[0]); // false
    isMale(grade[1]); // true
    isMale(grade[2]); // false
*/

function isFemale(obj) {
	return obj.sex == "F";
}

/*
  Create a function named isGradeA which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is greater than 12 or not

  EXAMPLE:
    isGradeA(grade[0]); // false
    isGradeA(grade[1]); // false
    isGradeA(grade[2]); // true
*/

function isGradeA(obj) {
	return obj.grade > 12;
}

/*
  Create a function named isGradeB which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is greater than 8 and less than or equal to 12 or not
  
  EXAMPLE:
    isGradeB(grade[0]); // true
    isGradeB(grade[1]); // true
    isGradeB(grade[2]); // false
*/

function isGradeB(obj) {
	return obj.grade > 8 && obj.grade <= 12;
}

/*
  Create a function named isGradeC which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is less than or equal to 8  or not

  EXAMPLE:
    isGradeC(grade[0]); // true
    isGradeC(grade[1]); // false
    isGradeC(grade[2]); // false
*/

function isGradeC(obj) {
	return obj.grade <= 8;
}

/*
  Create a function named filterAdult which accepts:
    - an array of objects
    - returns a new array with the value of age greater than 18 or not
    - while doing so use the funciton isAdult you created earlier
  
  EXAMPLE:
    filterAdult(people);

  Output: 
    [
      { name: 'Thomas Calls', age: 19 },
      { name: 'Liam Smith', age: 20 },
    ];
*/

function filterAdult(arr, cb) {
	const finalArr = [];
	for (let obj of arr) {
		if (cb(obj)) {
			finalArr.push(obj);
		}
	}
	return finalArr;
}

filterAdult(people, isAdult);

/*
  Create a function named filterMale which accepts:
    - an array of objects
    - returns a new array with the value of sex is `M` or not
    - while doing so use the funciton isMale you created earlier

  EXAMPLE:
    filterMale(grade);

  Output: 
    [
      { name: 'John', grade: 8, sex: 'M' },
      { name: 'Bob', grade: 16, sex: 'M' },
      { name: 'Johnny', grade: 2, sex: 'M' },
      { name: 'Ethan', grade: 4, sex: 'M' },
      { name: 'Donald', grade: 5, sex: 'M' },
    ];
*/

function filterMale(arr, cb) {
	const finalArr = [];
	for (let obj of arr) {
		if (cb(obj)) {
			finalArr.push(obj);
		}
	}
	return finalArr;
}

filterMale(grades, isMale);

/*
  Create a function named filterFemale which accepts:
    - an array of objects
    - returns a new array with the value of sex is `F` or not
    - while doing so use the funciton isFemale you created earlier

  EXAMPLE:
    filterFemale(grade);

  Output: 
    [
      { name: 'Sarah', grade: 12, sex: 'F' },
      { name: 'Paula', grade: 18, sex: 'F' },
      { name: 'Jennifer', grade: 13, sex: 'F' },
      { name: 'Courtney', grade: 15, sex: 'F' },
      { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/

function filterFemale(arr, cb) {
	const finalArr = [];
	for (let obj of arr) {
		if (cb(obj)) {
			finalArr.push(obj);
		}
	}
	return finalArr;
}

filterFemale(grades, isFemale);

/*
  Create a function named filterGradeA which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater than 12 or not
    - while doing so use the funciton isGradeA you created earlier

  
  EXAMPLE:
    filterGradeA(grade);

  Output: 
    [
      { name: 'Sarah', grade: 12, sex: 'F' },
      { name: 'Paula', grade: 18, sex: 'F' },
      { name: 'Jennifer', grade: 13, sex: 'F' },
      { name: 'Courtney', grade: 15, sex: 'F' },
      { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/

function filterGradeA(arr, cb) {
	const finalArr = [];
	for (let obj of arr) {
		if (cb(obj)) {
			finalArr.push(obj);
		}
	}
	return finalArr;
}

filterGradeA(grades, isGradeA);

/*
  Create a function named filterGradeB which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater than 8 and less than or equal to 12 or not
    - while doing so use the funciton isGradeB you created earlier

  EXAMPLE:
    filterGradeB(grade);

  Output: 
    [
     { name: 'Sarah', grade: 12, sex: 'F' },
     { name: 'Johnny', grade: 2, sex: 'M' },
     { name: 'Ethan', grade: 4, sex: 'M' },
     { name: 'Donald', grade: 5, sex: 'M' },
     { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/

function filterGradeB(arr, cb) {
	const finalArr = [];
	for (let obj of arr) {
		if (cb(obj)) {
			finalArr.push(obj);
		}
	}
	return finalArr;
}

filterGradeB(grades, isGradeB);

/*
  Create a function named filterGradeC which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater less or equal to 8 or not
    - while doing so use the funciton isGradeC you created earlier

  EXAMPLE:
    filterGradeC(grade);

  Output: 
     [
      { name: 'John', grade: 8, sex: 'M' },
      { name: 'Johnny', grade: 2, sex: 'M' },
      { name: 'Ethan', grade: 4, sex: 'M' },
      { name: 'Donald', grade: 5, sex: 'M' },
    ]
*/

function filterGradeC(arr, cb) {
	const finalArr = [];
	for (let obj of arr) {
		if (cb(obj)) {
			finalArr.push(obj);
		}
	}
	return finalArr;
}

filterGradeC(grades, isGradeC);

/*
We are repeating lots of code in above functions like filterGradeC, filterGradeB, filterGradeA, filterAdult. We will fix
this by making a higher order function named filter. Now using one function filter we will be able to filter anything we want.
filter is a higher order function.

  Create a function named filter which accepts:
    - an array of objects
    - a callback function (which should return true or false)
    - call the callback function with each object of array
    - if callback function returns true add to new array otherwise don't
    - returns a new array

  EXAMPLE:
    filter(people, isAdult);
    filter(grade, isMale);
    filter(grade, isFemale);
    filter(grade, isGradeA);
    filter(grade, isGradeB);
    filter(grade, isGradeC);
*/

function filter(arr, cb) {
	const finalArr = [];
	for (let obj of arr) {
		if (cb(obj)) {
			finalArr.push(obj);
		}
	}
	return finalArr;
}

/*
  Create a function named multiplyBy which accepts:
    - a number (num)
    - and returns a function
    - returned function accepts another number (num2) and return num * num2

  EXAMPLE:
    let multiplyByFive = multiplyBy(5);
    multiplyByFive(10); // 50
    multiplyByFive(20); // 100
    multiplyByFive(5); // 25

    
    let multiplyByNine = multiplyBy(9);
    multiplyByFive(10); // 90
    multiplyByFive(20); // 180
    multiplyByFive(5); // 45
*/

function multiplyBy(num) {
	return function (num2) {
		return num * num2;
	};
}

let multiplyByFive = multiplyBy(5);
multiplyByFive(10); // 50
multiplyByFive(20); // 100
multiplyByFive(5); // 25

let multiplyByNine = multiplyBy(9);
multiplyByFive(10); // 90
multiplyByFive(20); // 180
multiplyByFive(5); // 45
