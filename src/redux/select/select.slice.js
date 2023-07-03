import {createSlice} from "@reduxjs/toolkit";

const selectSlice = createSlice({
	name: 'select',
	initialState: {
		selectValue: "",
		status: null,
		error: null,
	},
	reducers: {
		setSelectValue: (state, action) => {
			state.selectValue = action.payload;
		}
	}
})

export const {setSelectValue} = selectSlice.actions

export default selectSlice.reducer;


