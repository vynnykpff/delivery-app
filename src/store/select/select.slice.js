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
		},
		resetSelectValue: (state) => {
			state.selectValue = "";
		},
		setInitialSelectValue: (state, action) => {
			state.selectValue = action.payload;
		}
	}
})

export const {setSelectValue, resetSelectValue, setInitialSelectValue} = selectSlice.actions

export default selectSlice.reducer;


