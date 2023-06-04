import logo from '../../../../assets/images/logo.png';
import {Container} from "../../layout/Layout.styled.jsx";
import {
	LogoImage,
	MobileNav,
	Nav,
	NavAdditionalList,
	NavItem,
	NavItemAnchor,
	NavItemTheme,
	NavList
} from "./Navbar.styled.jsx";
import {home, mcdonalds, shop, shoppingCart} from "../../../../shared/constants/routes.js";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {BiMoon, BiPhoneCall, BiSun} from "react-icons/bi";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {set} from "../../../../store/theme/theme.slice.js";
import {IoIosClose, IoIosMenu} from "react-icons/io";


const Navbar = () => {
	const [nav, setNav] = useState(false);
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
						<NavItem to={shop}><NavItemAnchor>Shop</NavItemAnchor></NavItem>
						<NavItem to="/history"><NavItemAnchor>History</NavItemAnchor></NavItem>
						<NavItem to="/coupons"><NavItemAnchor>Coupons</NavItemAnchor></NavItem>
					</NavList>
					<NavAdditionalList>
						<NavItem to={shoppingCart}><HiOutlineShoppingCart/></NavItem>
						<NavItem to="/contacts"><BiPhoneCall/></NavItem>
						<NavItemTheme onClick={() => {
							handleChange()
						}}>
							{theme === 'light' ? <BiMoon style={{color: "#242424"}}/> : <BiSun style={{color: "#fff"}}/>}
						</NavItemTheme>
					</NavAdditionalList>
				<MobileNav onClick={() => setNav(!nav)}>
					{nav ? (
						<IoIosClose size={45}/>
					) : (
						<IoIosMenu size={35}/>
					)}
				</MobileNav>
			</Nav>
		</Container>
	);
};

export default Navbar;