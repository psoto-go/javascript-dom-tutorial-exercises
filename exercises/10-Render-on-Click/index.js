let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var newdiv = document.createElement("div");
	newdiv.style.background = "yellow";
	newdiv.innerHTML = "Hello World";
	document.body.appendChild(newdiv);
});
