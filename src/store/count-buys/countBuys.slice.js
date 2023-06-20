import { createSlice } from '@reduxjs/toolkit';

const countBuysSlice = createSlice({
	name: 'count',
	initialState: {
		count: 0,
	},
	reducers: {
		setCount: (state, action) => {
			if (action.payload === 'plus') {
				state.count += 1;
			} else {
				state.count -= 1;
			}
		},
	},
});

export const { setCount } = countBuysSlice.actions;

export default countBuysSlice.reducer;
