document.getElementById("add-btn").addEventListener("click", () => {
	const inputField = document.getElementById("input-field");
	const inputValue = inputField.value;
	// console.log(inputValue);
	localStorage.setItem("name", inputValue);
});
document.getElementById("remove-btn").addEventListener("click", () => {
	localStorage.removeItem("name");
});
document.getElementById("clear-all").addEventListener("click", () => {
	localStorage.clear();
});
