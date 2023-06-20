export const getDate = () => {
	const currentDate = new Date();
	const day = currentDate.getDate().toString().padStart(2, '0');
	const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
	const year = currentDate.getFullYear().toString();
	return `${day}.${month}.${year}`;
}

export const getTime = () => {
	const currentTime = new Date();

	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	return hours + ":" + minutes + ":" + seconds;
}

