
let name = 'Tom';
console.log (`Hello ${name}!`);
console.log ('Hello '+ name);

function print(name, age, profession, gender){
	document.write("Name: " + name);
	document.write('<br>');
	document.write("Age: " + age);
	document.write('<br>');
	document.write("Profession: " + profession);
	document.write('<br>');
	document.write("Gender: " + gender);
}

print("Tom", 30, "Programmer", "male");