import {createSlice} from "@reduxjs/toolkit";

// const createAndCheckError = (response, message) => {
// 	if (!response.status === 200) {
// 		throw new Error(message);
// 	}
// };

// export const requestShops = createAsyncThunk(
// 	'shops/requestShops',
// 	async function (_, {rejectWithValue}) {
// 		try {
// 			const response = await shopsApi.getRestaurants();
// 			createAndCheckError(response, "Can't get shops. Server error");
// 			return response;
// 		} catch (error) {
// 			return rejectWithValue(error.message);
// 		}
//
// 	}
// )

const selectSlice = createSlice({
	name: 'select',
	initialState: {
		selectValue: "burgers",
		status: null,
		error: null,
	},
	reducers: {
		setSelectValue: (state, action) => {
				state.selectValue = action.payload;
				state.status = true;
		}
	}
})

export const {setSelectValue} = selectSlice.actions

export default selectSlice.reducer;


