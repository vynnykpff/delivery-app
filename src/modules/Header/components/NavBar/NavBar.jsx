import logo from '../../../../shared/images/logo.svg';
import {
	LogoImage,
	LogoTitle,
	MobileNav,
	Nav,
	NavAdditionalList,
	NavItem,
	NavItemAnchor,
	NavList,
	ProfileIcon
} from "./NavBar.styled.jsx";
import {about, contacts, delivery, home, profile, shop} from "../../../../shared/constants/routes.js";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {IoIosClose, IoIosMenu} from "react-icons/io";
import {v4 as uuidv4} from 'uuid';
import Search from "./components/Search/Search.jsx";

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const theme = useSelector(state => state.theme);

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
					<NavItem to={profile}>
						<ProfileIcon/>
					</NavItem>
				</NavAdditionalList>
				<MobileNav onClick={() => setNav(!nav)}>
					{nav ? <IoIosClose size={45}/> : <IoIosMenu size={35}/>}
				</MobileNav>
			</Nav>
	);
};

export default NavBar;