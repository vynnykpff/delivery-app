import logo from '../../../../shared/images/logo.svg';
import {
	LogoImage,
	LogoTitle,
	MobileNav,
	Nav,
	NavAdditionalList,
	NavItem,
	NavItemAnchor,
	NavItemTheme,
	NavList, ProfileIcon
} from "./NavBar.styled.jsx";
import {
	about,
	contacts,
	coupons,
	delivery,
	history,
	home,
	shop,
	shoppingCart
} from "../../../../shared/constants/routes.js";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {BiMoon, BiPhoneCall, BiSun} from "react-icons/bi";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {set} from "../../../../redux/theme/theme.slice.js";
import {IoIosClose, IoIosMenu} from "react-icons/io";
import {Container} from "../../../../shared/styles/GlobalStyles.jsx";
import {v4 as uuidv4} from 'uuid';
import {CgProfile} from "react-icons/cg";
import {IoLanguage} from "react-icons/io5";
import {FiSearch} from "react-icons/fi";
import Search from "./components/Search/Search.jsx";

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const theme = useSelector(state => state.theme);
	const dispatch = useDispatch();

	// const data = [
	// 	{route: shop, name: 'Shops'},
	// 	{route: history, name: 'History'},
	// 	{route: coupons, name: 'Coupons'},
	// ]

	const data = [
		{route: shop, name: 'Shops'},
		{route: delivery, name: 'Delivery'},
		{route: about, name: 'About'},
		{route: contacts, name: 'Contacts'},
	]

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	const handleChange = () => {
		dispatch(set(theme === 'dark' ? 'light' : 'dark'))
	};

	return (
			<Nav>
				<NavItem to={home}>
						<LogoImage src={logo} alt="logo"/>
						<LogoTitle>Foo</LogoTitle>
				</NavItem>
				<NavList>
					{data.map(item =>
						<NavItem key={uuidv4()} to={item.route}><NavItemAnchor>{item.name}</NavItemAnchor></NavItem>)}
				</NavList>
				<NavAdditionalList>
					<Search/>

					{/*<div>*/}
					{/*	<FiSearch/>*/}
					{/*	<input type="text"/>*/}
					{/*	<NavItem className="shoppingCart" to={shoppingCart}>*/}
					{/*		<CountBuys>{count}</CountBuys>*/}
					{/*		<HiOutlineShoppingCart/>*/}
					{/*	</NavItem>*/}
					{/*</div>*/}

					<NavItem to={contacts}>
						<ProfileIcon/>
					</NavItem>
					{/*<NavItem to={shoppingCart}>*/}
					{/*	<IoLanguage/>*/}
					{/*</NavItem>*/}
					{/*<NavItemTheme onClick={() => handleChange()}>*/}
					{/*	{theme === 'light' ? <BiMoon style={{color: "var(--text-color)"}}/> :*/}
					{/*		<BiSun style={{color: "var(--text-color)"}}/>}*/}
					{/*</NavItemTheme>*/}
				</NavAdditionalList>
				<MobileNav onClick={() => setNav(!nav)}>
					{nav ? <IoIosClose size={45}/> : <IoIosMenu size={35}/>}
				</MobileNav>
			</Nav>
	);
};

export default NavBar;