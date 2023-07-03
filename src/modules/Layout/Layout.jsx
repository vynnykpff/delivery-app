import {Suspense} from 'react';
import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Loader from "../../shared/ui/Loader/Loader.jsx";
import Footer from "../Footer/Footer.jsx";
import {Container} from "../../shared/styles/GlobalStyles.jsx";

const Layout = () => {
	return (
		<>
			<Header/>
			<Container>
				<Suspense fallback={<Loader/>}>
					<Outlet/>
				</Suspense>
			</Container>
			<Footer/>
		</>
	);
};

export default Layout;