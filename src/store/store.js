import {combineReducers, configureStore} from '@reduxjs/toolkit';
import themeReducer from './theme/theme.slice';
import shopsReducer from './shops/shops.slice.js';
import selectReducer from './select/select.slice.js';
import menuReducer from './menu/menu.slice.js';
import countReducer from './count-buys/countBuys.slice.js';
import productsReducer from './products/products.slice.js';

const reducers = combineReducers({
	theme: themeReducer,
	shops: shopsReducer,
	select: selectReducer,
	menu: menuReducer,
	count: countReducer,
	products: productsReducer,
});

export const store = configureStore({
	reducer: reducers,
});
