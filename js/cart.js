// document.getElementById("btn-add-product").addEventListener("click", () => {
// 	const productNameInput = document.getElementById("product-name-field");
// 	const productQuantityInput = document.getElementById(
// 		"product-quantity-field"
// 	);
// });
const getInputValue = (id) => {
	const inputField = document.getElementById(id);
	const inputValue = inputField.value;
	inputField.value = "";
	return inputValue;
};
const addProduct = () => {
	const product = getInputValue("product-name-field");
	const quantity = getInputValue("product-quantity-field");
	addToProductDisplay(product, quantity);
	// LocalStorage Set Simple Way
	// localStorage.setItem(product, quantity);
	saveShoppinCardItemLocalStorage(product, quantity);
};
const getShoppingCardLocalStorage = () => {
	let saveCart = localStorage.getItem("cart");
	let cart = {};
	if (cart) {
		cart = JSON.parse(saveCart);
	}
	console.log(cart);
	return cart;
};
const saveShoppinCardItemLocalStorage = (product, quantity) => {
	const cart = getShoppingCardLocalStorage();
	// Add product to object as property
	cart[product] = quantity;
	console.log(cart);
	const cartStringified = JSON.stringify(cart);
	// Save LS
	localStorage.setItem("cart", cartStringified);
};
const addToProductDisplay = (product, quantity) => {
	const productContainer = document.getElementById("product-container");
	const li = document.createElement("li");
	li.innerText = `${product} : ${quantity}`;
	productContainer.appendChild(li);
};
const showDisplayStored = () => {
	const cart = getShoppingCardLocalStorage();
	for (product in cart) {
		const quantity = cart[product];
		console.log(product, quantity);
		addToProductDisplay(product, quantity);
	}
};
showDisplayStored();
