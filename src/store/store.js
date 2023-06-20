import {combineReducers, configureStore} from '@reduxjs/toolkit';
import themeReducer from './theme/theme.slice';
import shopsReducer from './shops/shops.slice.js';
import selectReducer from './select/select.slice.js';
import menuReducer from './menu/menu.slice.js';
import countReducer from './count-buys/countBuys.slice.js';
import productsReducer from './products/products.slice.js';
import statusReducer from './status-card/statusCard.slice.js';
import addressReducer from './address/address.slice.js';

const reducers = combineReducers({
	theme: themeReducer,
	shops: shopsReducer,
	select: selectReducer,
	menu: menuReducer,
	count: countReducer,
	products: productsReducer,
	statusCard: statusReducer,
	address: addressReducer,
});

export const store = configureStore({
	reducer: reducers,
});
