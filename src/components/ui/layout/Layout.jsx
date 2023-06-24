import {Suspense} from 'react';
import {Container} from "./Layout.styled.jsx";
import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";
import Preloader from "../preloader/Preloader.jsx";

const Layout = () => {
	return (
		<>
			<Header/>
			<Container>
				<Suspense fallback={<Preloader/>}>
					<Outlet/>
				</Suspense>
			</Container>
			{/*<Footer/>*/}
		</>
	);
};

export default Layout;