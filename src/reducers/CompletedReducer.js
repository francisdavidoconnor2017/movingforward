export const CompletedReducer = (state = false, action) => {
	switch (action.type) {
		case 'UPDATE_COMPLETED':
			return action.payload;

		default:
			return state;
	}
};
