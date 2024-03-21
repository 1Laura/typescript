const buttons = document.getElementsByTagName("button")

// var last i
for (let i = 0; i < buttons.length; i++) {
	const button = buttons[i];
	button.addEventListener("click", function () {
		alert("Button " + i + " pressed");
	})
}

