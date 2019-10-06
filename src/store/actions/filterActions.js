export const actualDate = () => dispatch => {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	const yyyy = today.getFullYear();
	const actualDate = `${mm}-${dd}-${yyyy}`;

	return dispatch({
		type: "GET_DATE",
		actualDate: actualDate,
		dateField: false
	});
};

export const dateFieldChange = () => dispatch => {
	return dispatch({
		type: "WHITOUT_DATES",
		dateField: true
	});
};

export const selectedDates = (firstDate, lastDate) => dispatch => {
	console.log(firstDate, lastDate);
	return dispatch({
		type: "GET_DATES",
		actualDate: "",
		dates: [firstDate, lastDate],
		dateField: true
	});
};
