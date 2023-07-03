import {createSlice} from '@reduxjs/toolkit';

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
		resetCount: (state) => {
			state.count = 0;
		}
	},
});

export const {setCount, resetCount} = countBuysSlice.actions;

export default countBuysSlice.reducer;
