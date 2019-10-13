export const actualDate = () => dispatch => {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	const yyyy = today.getFullYear();
	const actualDate = `${yyyy}-${mm}-${dd}`;

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

export const selectedDates = (firstDate, lastDate) => {
	const dates = { firstDate, lastDate };
	window.localStorage.setItem("first date", `${firstDate}`);
	window.localStorage.setItem("last date", `${lastDate}`);
	return dispatch => {
		try {
			return dispatch({
				type: "GET_DATE",
				payload: dates
			});
		} catch (error) {
			return dispatch({
				type: "ERROR",
				payload: "Hay un error con las fechas"
			});
		}
	};
};
