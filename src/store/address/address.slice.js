import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addressApi} from '../services/api.js';

const createAndCheckError = (response, message) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};

export const requestAddress = createAsyncThunk(
	'address/requestAddress',
	async function (_, {rejectWithValue}) {
		try {
			const response = await addressApi.getAddress();
			createAndCheckError(response, "Can't get address. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const requestGetWay = createAsyncThunk(
	'address/requestGetWay',
	async function (_, {getState, rejectWithValue}) {
		try {
			const { where, from } = getState().address;
			const response = await addressApi.getWay(where, from);
			createAndCheckError(response, "Can't get way. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const requestDescriptionWay = createAsyncThunk(
	'address/requestDescriptionWay',
	async function (_, {getState, rejectWithValue}) {
		try {
			const { where, from } = getState().address;
			const response = await addressApi.getDescriptionWay(where, from);
			createAndCheckError(response, "Can't get description of the way. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);




const addressSlice = createSlice({
	name: 'address',
	initialState: {
		arrayAddress: [],
		where: '',
		from: '',
		way: '',
		descriptionWay: [],
		status: null,
		error: null,
	},
	reducers: {
		setWay: (state, action) => {
			state.where = action.payload.where;
			state.from = action.payload.from;
		},
	},

	extraReducers: {
		[requestAddress.pending]: state => {
			state.status = false;
			state.error = null;
		},
		[requestAddress.fulfilled]: (state, action) => {
			state.arrayAddress = action.payload;
			state.status = true;
		},
		[requestAddress.rejected]: state => {
			state.error = 'rejected';
		},

		[requestGetWay.pending]: state => {
			state.status = false;
			state.error = null;
		},
		[requestGetWay.fulfilled]: (state, action) => {
			state.way = action.payload;
			state.status = true;
		},
		[requestGetWay.rejected]: state => {
			state.error = 'rejected';
		},

		[requestDescriptionWay.pending]: state => {
			state.status = false;
			state.error = null;
		},
		[requestDescriptionWay.fulfilled]: (state, action) => {
			state.descriptionWay = action.payload;
			state.status = true;
		},
		[requestDescriptionWay.rejected]: state => {
			state.error = 'rejected';
		},
	}
})

export const {setWay} = addressSlice.actions;

export default addressSlice.reducer;


