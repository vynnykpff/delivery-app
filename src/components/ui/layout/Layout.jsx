import {Suspense} from 'react';
import {Container} from "./Layout.styled.jsx";
import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header/>
			<Container>
				<Suspense>
					<Outlet/>
				</Suspense>
			</Container>
			{/*<Footer/>*/}
		</>
	);
};

export default Layout;