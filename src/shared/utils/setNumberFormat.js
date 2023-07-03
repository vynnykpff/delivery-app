const SetNumberFormat = (region, params, number) => {
	return new Intl.NumberFormat(region, params).format(number)
}

export default SetNumberFormat;