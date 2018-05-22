const initialState = {
	locations: []
};

export default (state = initialState, action) => {
	switch (action.type) {
        case 'ADD_LOCATION':
            return {
                ...state,
                locations: [...state.locations, action.payload]
            }
        case 'CLEAR_LOCATIONS':
            return initialState
		default:
			return state;
	}
}