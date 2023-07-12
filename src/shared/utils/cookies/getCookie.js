export const getCookie = (cookieName) => {
	const cookieString = document.cookie;
	const cookies = cookieString.split(';');

	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();
		if (cookie.startsWith(cookieName + '=')) {
			return cookie.substring(cookieName.length + 1);
		}
	}

	return null;
}