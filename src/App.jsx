// Import from libraries
import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
// UI elements
import Layout from "./components/ui/layout/Layout.jsx";
// Constants
import {home, all, shop, shoppingCart} from "./shared/constants/routes.js";
// Screens with lazy loading
const ShopPage = lazy(() => import('./components/screens/shop/Shop.jsx'));
const ShoppingCartPage = lazy(() => import('./components/screens/shopping-card/ShoppingCart.jsx'));
const NotFoundPage = lazy(() => import('./components/screens/not-found/NotFound.jsx'));

function App() {
	return <>
		<Routes>
			<Route path={home} element={<Layout/>}>
				<Route path={shop} element={<ShopPage/>}/>
				<Route path={shoppingCart} element={<ShoppingCartPage/>}/>
				<Route path={all} element={<NotFoundPage/>}/>
			</Route>
		</Routes>
	</>;
}

export default App;
