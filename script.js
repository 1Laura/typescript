let person = new Set ();

person.add ('kate');
person.add ('john');
person.add ('paul');

console.log (person.size)
person.forEach (function (e) {
	console.log (e)
})


// person.clear()
// person.delete('john')
// console.log (person)

// console.log (numSet.has('john'))
// console.log (numSet.has('abc'))
// console.log (person)


// let numSet = new Set();
// numSet.add('john');
// numSet.add('john');
// numSet.add('paul');
// console.log (numSet.has('john'))
// console.log (numSet.has('abc'))
// console.log (numSet)


// let numberSet = [1,2,3,4,5,3,1,2,5,7,9,2,1];
// let numSet = new Set(numberSet);
// Set ignored duplicated values