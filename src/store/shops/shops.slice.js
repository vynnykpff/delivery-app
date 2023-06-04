import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {shopsApi} from "../services/api.js";

const createAndCheckError = (response, message) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};

export const requestShops = createAsyncThunk(
	'shops/requestShops',
	async function (_, {rejectWithValue}) {
		try {
			const response = await shopsApi.getRestaurants();
			createAndCheckError(response, "Can't get shops. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}

	}
)

const shopsSlice = createSlice({
	name: 'shops',
	initialState: {
		arrayShops: [],
		status: null,
		error: null,
	},
	extraReducers: {
		[requestShops.pending]: state => {
			state.status = false;
			state.error = null;
		},
		[requestShops.fulfilled]: (state, action) => {
			state.status = true;
			state.arrayShops = action.payload;
		},
		[requestShops.rejected]: state => {
			state.error = 'rejected';
		},
	}
})

export default shopsSlice.reducer;


