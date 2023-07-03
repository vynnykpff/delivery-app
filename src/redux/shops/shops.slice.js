import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API} from "../../api/index.js";

const createAndCheckError = (response, message) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};

export const requestShops = createAsyncThunk(
	'shops/requestShops',
	async function (_, {rejectWithValue}) {
		try {
			const response = await API.shops.getShops();
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
		currentShop: "",
		status: null,
		error: null,
	},
	reducers: {
		setCurrentShop: (state, action) => {
			return {
				...state,
				currentShop: action.payload,
			}
		}
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

export const {setCurrentShop} = shopsSlice.actions;

export default shopsSlice.reducer;


