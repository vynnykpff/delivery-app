import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API} from "../../api/index.js";

const createAndCheckError = (response, message) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};

export const requestMenu = createAsyncThunk(
	'menu/requestMenu',
	async function (_, {rejectWithValue}) {
		try {
			const response = await API.shops.getMenu();
			createAndCheckError(response, "Can't get menu. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

// export const requestMenuItems = createAsyncThunk(
// 	'menu/requestMenuItems',
// 	async function (_, {rejectWithValue}) {
// 		try {
// 			const response = await menuApi.getMenuItems();
// 			createAndCheckError(response, "Can't get menu items. Server error");
// 			return response;
// 		} catch (error) {
// 			return rejectWithValue(error.message);
// 		}
// 	}
// );

const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		arrayMenu: [],
		status: null,
		error: null,
	},
	extraReducers: {
		[requestMenu.pending]: state => {
			state.status = false;
			state.error = null;
		},
		[requestMenu.fulfilled]: (state, action) => {
			state.status = true;
			state.arrayMenu = action.payload;
		},
		[requestMenu.rejected]: state => {
			state.error = 'rejected';
		},
	}
})

export default menuSlice.reducer;


