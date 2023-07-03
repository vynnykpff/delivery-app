import {createSlice} from "@reduxjs/toolkit";

const couponsSlice = createSlice({
	name: "products",
	initialState: {
		arrayCoupons: [],
		ordersCount: 0,
		totalOrdersCount: 0,
		currentShop: "",
	},
	reducers: {
		updateOrdersCount: (state, action) => {
			if (action.payload) {
				state.ordersCount += 1;
				state.totalOrdersCount += 1;
			} else {
				state.ordersCount = 0;
			}
		},
		setCoupon: (state, action) => {
			state.arrayCoupons.push(action.payload);
		},
		removeCoupon: (state, action) => {
			return {
				...state,
				arrayCoupons: state.arrayCoupons.filter(coupon => coupon.id !== action.payload),
			}
		},
	},
});

export const {updateOrdersCount, removeCoupon, setCoupon} = couponsSlice.actions;
export default couponsSlice.reducer;


