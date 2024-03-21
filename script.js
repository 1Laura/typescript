function print (name, age, profession, gender) {

	document.write (`
Name ${name} <br>
Age: ${age}<br>
Profession: ${profession} <br>
Gender: ${gender}
`)

	console.log (`
			Name ${name}
			Age: ${age}
		  Profession: ${profession} 
		  Gender: ${gender}	
		`
	)
	// document.write("Name: " + name);
	//
	// document.write("Age: " + age);
	//
	// document.write("Profession: " + profession);
	//
	// document.write("Gender: " + gender);
}

print ("Tom", 30, "Programmer", "male");