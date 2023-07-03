import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: {
		arrayProducts: [],
		ordersCount: 0,
		totalOrdersCount: 0,
	},
	reducers: {
		setProduct: (state, action) => {
			return {
				...state,
				arrayProducts: [...state.arrayProducts, action.payload,],
			};
		},
		setProductCount: (state, action) => {
			return {
				...state,
				arrayProducts: state.arrayProducts.map((product) =>
					product.id === action.payload.id
						? {...product, count: action.payload.count}
						: product
				),
			};
		},
		removeProduct: (state, action) => {
			return {
				...state,
				arrayProducts: state.arrayProducts.filter(
					(product) => product.id !== action.payload
				),
			};
		},
		removeAllProducts: (state, action) => {
			state.arrayProducts = [];
		}

	},
});

export const {setProduct, setProductCount, removeProduct, removeAllProducts} =
	productsSlice.actions;

export default productsSlice.reducer;
