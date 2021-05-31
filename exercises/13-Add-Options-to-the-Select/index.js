window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	var padre = document.querySelector("#mySelect");
	for (var i in countries) {
		var hijo = document.createElement("option");
		hijo.innerText = countries[i];
		padre.appendChild(hijo);
	}
	padre.addEventListener("change", function() {
		alert(padre.value);
	});
};
