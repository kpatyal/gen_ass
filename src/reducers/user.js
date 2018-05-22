const initialState = {
	first_name: '',
	last_name: '',
	avatar: '',
	id: '',
	loading: false,
	noUser: false
};

export default (state = initialState, action) => {
	switch (action.type) {
        case 'GET_USER_PENDING':
            return {
                ...state,
                loading: true,
                noUser: false
            }
        case 'GET_USER_FULFILLED':
            return {
                ...state,
                first_name: action.payload.data.data.first_name,
                last_name: action.payload.data.data.last_name,
                id: action.payload.data.data.id,
                avatar: action.payload.data.data.avatar,
                loading: false,
                noUser: false
            }
        case 'GET_USER_REJECTED':
            return {
                ...state,
                loading: false,
                noUser: true
            }
		default:
			return state;
	}
}