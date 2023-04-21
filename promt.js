console.log("Hi");

function showAlert() {
	let num = Math.random() * 10;
	console.log(num);
	if (num < 5) {
		alert("Hi");
	}
}

const askSomething = () => {
	const disition = confirm("Are you sure you want");
	console.log(disition);
	if (disition === true) {
		alert("Ok Than Goo.");
	} else {
		console.log("That's good");
	}
};
// const askSomething = () => {
// 	const disition = confirm("Are you sure you want");
// 	console.log(disition);
// };
const useName = () => {
	const name = prompt("What is your name?");
	console.log(name);
	if (!!name) {
		console.log("Welcome to the  ", name);
	}
};
