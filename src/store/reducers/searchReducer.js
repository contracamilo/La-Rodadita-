const initState = {
	initialDate: "",
	lastDate: "",
	loading: true,
	error: ""
};

//loading data error
const searchReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_DATE":
			return {
				...state,
				dates: action.payload,
				loading: false
			};
		case "GET_DATA_ERROR":
			return {
				...state,
				dates: action.payload,
				loading: false,
				error: "no hay informacion disponible"
			};
		default:
			return state;
	}
};

export default searchReducer;
