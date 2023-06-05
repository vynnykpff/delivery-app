import {createSlice} from "@reduxjs/toolkit";


const productsSlice = createSlice({
	name: 'products',
	initialState: {
		arrayProducts: [],
	},
	reducers: {
		setProduct: (state, action) => {
			state.arrayProducts.push(action.payload);
		},
		setProductCount: (state, action) => {
			return {
				arrayProducts: state.arrayProducts.map(product => product.id === action.payload.id ? {
					...product,
					count: action.payload.count
				} : product)
			}
		},
		removeProduct: (state, action) => {
			return {
				arrayProducts: state.arrayProducts.filter(product => product.id !== action.payload),
			}
		},
	}
})

export const {setProduct, setProductCount, removeProduct} = productsSlice.actions

export default productsSlice.reducer;


