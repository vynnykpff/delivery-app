export const SetStartValue = ({name}) => {
	switch (name) {
		case 'mcdonalds':
			return "burgers";
		case 'burgerKing':
			return "burgers";
		case 'kfc':
			return "wraps";
		case 'subway':
			return "sandwiches";
		case 'starbucks':
			return "drinks";
	}
}
