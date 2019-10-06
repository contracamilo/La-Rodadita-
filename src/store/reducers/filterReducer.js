const INITIAL_STATE = {
	dates: [],
	dateField: false,
	actualDate: "",
	loading: false,
	error: ""
};

const filterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, loading: true };
		case "GET_DATE":
			return {
				...state,
				dates: action.payload,
				loading: false,
				dateField: false,
				error: ""
			};
		case "WHITOUT_DATES":
			return {
				...state,
				dateField: true
			};
		case "GET_DATES":
			return {
				...state,
				dates: action.payload,
				loading: false,
				dateField: true,
				error: ""
			};
		case "GET_DATE_ERROR":
			return {
				...state,
				error: action.payload,
				cargando: false
			};
		default:
			return state;
	}
};
