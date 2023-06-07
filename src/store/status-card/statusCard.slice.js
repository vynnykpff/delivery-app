import { createSlice } from "@reduxjs/toolkit";

const statusCardSlice = createSlice({
	name: 'status',
	initialState: {
		statusCards: {},
	},
	reducers: {
		toggleCardStatus: (state, action) => {
			const { cardId, status } = action.payload;
			if (state.statusCards[cardId] && state.statusCards[cardId].status === status) {
				delete state.statusCards[cardId];
			} else {
				state.statusCards[cardId] = { status };
			}
		},
	},
});

export const { toggleCardStatus } = statusCardSlice.actions;

export default statusCardSlice.reducer;
