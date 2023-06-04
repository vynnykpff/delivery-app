import {createSlice} from "@reduxjs/toolkit";

const countBuysSlice = createSlice({
	name: 'count',
	initialState: {
		count: 0,
		status: null,
		error: null,
	},
	reducers: {
		setCount: (state) => {
			state.count += 1;
			state.status = true;
		},
	}
})

export const {setCount} = countBuysSlice.actions

export default countBuysSlice.reducer;


