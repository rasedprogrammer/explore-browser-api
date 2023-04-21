const getCookiesName = (name) => {
	const cookiesString = document.cookie;
	const cookieParts = cookiesString.split("; ");
	const cookie = cookieParts.find((c) => c.includes(name));
	if (cookie) {
		const cookieValue = cookie.split("=")[1];
		return cookieValue;
	}
};
getCookiesName("_ga");
