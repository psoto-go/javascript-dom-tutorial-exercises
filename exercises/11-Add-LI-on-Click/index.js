let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var parentul = document.querySelector("#myList");
	var newli = document.createElement("li");
	newli.innerHTML = "Fourth element";
	parentul.appendChild(newli);
});
