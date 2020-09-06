// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
	let count = 0;
	got.houses.forEach((e) => {
		count += e.people.length;
	});
	return count;
}

function peopleByHouses() {
	const peopleByHousesObj = {};
	let count = 0;
	got.houses.forEach((e) => {
		e.people.forEach((ele) => count++);
		peopleByHousesObj[e.name] = count;
		count = 0;
	});
	return peopleByHousesObj;
}

function everyone() {
	return Object.values(peopleNameOfAllHouses()).flat();
}

function nameWithS() {
	return everyone().filter((e) => e.startsWith("S"));
}

function nameWithA() {
	return everyone().filter((e) => e.startsWith("A"));
}

function surnameWithS() {
	return everyone().filter((e) => e.split(" ")[1].startsWith("S"));
}

function surnameWithA() {
	return everyone().filter((e) => e.split(" ")[1].startsWith("A"));
}

function peopleNameOfAllHouses() {
	const peopleByHousesObj = {};
	got.houses.forEach((e) => {
		peopleByHousesObj[e.name] = [];
		e.people.forEach((ele) => peopleByHousesObj[e.name].push(ele.name));
	});
	return peopleByHousesObj;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), "with s");
// Output should be
//  ["Sansa Stark", "Stannis Baratheon"] "with s"

console.log(nameWithA());
// Output should be
// ["Arya Stark"]

console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
