// Import from libraries
import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
// UI elements
import Layout from "./components/ui/layout/Layout.jsx";
// Constants
import {
	all,
	burgerKing,
	home,
	kfc,
	mcdonalds,
	shop,
	shoppingCart,
	starbucks,
	subway
} from "./shared/constants/routes.js";
// Screens with lazy loading
const ShopPage = lazy(() => import('./components/screens/shop/Shop.jsx'));
const CartPage = lazy(() => import('./components/screens/cart/Cart.jsx'));
// Shops
const McdonaldsPage = lazy(() => import('./components/screens/shop/mcdonalds/Mcdonalds.jsx'));
const KfcPage = lazy(() => import('./components/screens/shop/kfc/Kfc.jsx'));
const BurgerKingPage = lazy(() => import('./components/screens/shop/burger-king/BurgerKing.jsx'));
const SubwayPage = lazy(() => import('./components/screens/shop/subway/Subway.jsx'));
const StarbucksPage = lazy(() => import('./components/screens/shop/starbucks/Starbucks.jsx'));

const NotFoundPage = lazy(() => import('./components/screens/not-found/NotFound.jsx'));



function App() {
	return (
		<Routes>
			<Route path={home} element={<Layout/>}>
				<Route path={shop} element={<ShopPage/>} />
				<Route path={mcdonalds} element={<McdonaldsPage/>} />
				<Route path={kfc} element={<KfcPage/>} />
				<Route path={burgerKing} element={<BurgerKingPage/>} />
				<Route path={subway} element={<SubwayPage/>} />
				<Route path={starbucks} element={<StarbucksPage/>} />
				<Route path={shoppingCart} element={<CartPage/>}/>
				<Route path={all} element={<NotFoundPage/>}/>
			</Route>
		</Routes>
	)
}

export default App;
