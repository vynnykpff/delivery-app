import logo from '../../../../shared/images/logo.svg';
import {
	CountBuys,
	LogoImage, LogoTitle,
	MobileNav,
	Nav,
	NavAdditionalList,
	NavItem,
	NavItemAnchor,
	NavItemTheme,
	NavList
} from "./NavBar.styled.jsx";
import {coupons, history, home, shop, shoppingCart} from "../../../../shared/constants/routes.js";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {BiMoon, BiSun} from "react-icons/bi";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {set} from "../../../../redux/theme/theme.slice.js";
import {IoIosClose, IoIosMenu} from "react-icons/io";
import {Container} from "../../../../shared/styles/GlobalStyles.jsx";
import {v4 as uuidv4} from 'uuid';

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const theme = useSelector(state => state.theme);
	const {count} = useSelector(state => state.count);
	const dispatch = useDispatch();

	const data = [
		{route: shop, name: 'Shops'},
		{route: history, name: 'History'},
		{route: coupons, name: 'Coupons'},
	]

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
					<div>
						<LogoImage src={logo} alt="logo"/>
						<LogoTitle>Foo</LogoTitle>
					</div>
				</NavItem>
				<NavList>
					{data.map(item =>
						<NavItem key={uuidv4()} to={item.route}><NavItemAnchor>{item.name}</NavItemAnchor></NavItem>)}
				</NavList>
				<NavAdditionalList>
					<NavItem className="shoppingCart" to={shoppingCart}>
						<CountBuys>{count}</CountBuys>
						<HiOutlineShoppingCart/>
					</NavItem>
					<NavItemTheme onClick={() => handleChange()}>
						{theme === 'light' ? <BiMoon style={{color: "var(--text-color)"}}/> :
							<BiSun style={{color: "var(--text-color)"}}/>}
					</NavItemTheme>
				</NavAdditionalList>
				<MobileNav onClick={() => setNav(!nav)}>
					{nav ? <IoIosClose size={45}/> : <IoIosMenu size={35}/>}
				</MobileNav>
			</Nav>
		</Container>
	);
};

export default NavBar;