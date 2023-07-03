// Import from libraries
import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
// UI elements
import Layout from "./modules/Layout/Layout.jsx";
// Routes
import {all, coupons, history, home, selectShop, shop, shoppingCart} from "./shared/constants/routes.js";
// Pages
const ShopPage = lazy(() => import('./pages/ShopsPage/ShopPage.jsx'));
const SelectShop = lazy(() => import('./modules/Shops/Shops.jsx'));

const CartPage = lazy(() => import('./pages/CartPage/CartPage.jsx'));
const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage.jsx'));
const CouponsPage = lazy(() => import('./pages/CouponsPage/CouponsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));

const App = () => {
	return (
		<Routes>
			<Route path={home} element={<Layout/>}>

				<Route path={history} element={<HistoryPage/>}/>
				<Route path={coupons} element={<CouponsPage/>}/>

				<Route path={shop} element={<ShopPage/>}/>
				<Route path={selectShop} element={<SelectShop/>}/>

				<Route path={shoppingCart} element={<CartPage/>}/>
				<Route path={all} element={<NotFoundPage/>}/>
			</Route>
		</Routes>
	)
}

export default App;
