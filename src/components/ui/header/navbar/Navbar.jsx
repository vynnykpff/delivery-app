import logo from '../../../../assets/images/logo.png';
import {Container} from "../../layout/Layout.styled.jsx";
import {LogoImage, Nav, NavAdditionalList, NavItem, NavItemTheme, NavList} from "./Navbar.styled.jsx";
import {home, shop, shoppingCart} from "../../../../shared/constants/routes.js";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {BiMoon, BiPhoneCall, BiSun} from "react-icons/bi";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {set} from "../../../../store/theme/theme.slice.js";


const Navbar = () => {
	const theme = useSelector(state => state.theme);
	const dispatch = useDispatch();

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	const handleChange = () => {
		dispatch(set(theme === 'dark' ? 'light' : 'dark'))
	};

	return (
		<Container>
			<Nav>
				<NavItem to={home}>
					<LogoImage src={logo} alt="logo"/>
				</NavItem>
				<NavList>
					<NavItem to={shop}>Shop</NavItem>
					<NavItem to="/history">History</NavItem>
					<NavItem to="/coupons">Coupons</NavItem>
				</NavList>
				<NavAdditionalList>
					<NavItem to={shoppingCart}><HiOutlineShoppingCart/></NavItem>
					<NavItem to="/contacts"><BiPhoneCall/></NavItem>
					<NavItemTheme onClick={() => {
						handleChange()}}>
						{theme === 'light' ? <BiMoon style={{color: "#242424"}}/> : <BiSun style={{color: "#fff"}}/>}
					</NavItemTheme>
				</NavAdditionalList>
			</Nav>
		</Container>
	);
};

export default Navbar;