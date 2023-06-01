import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {fontSizeLink} from "../../layout/Layout.styled.jsx";


const Nav = styled.nav`
  display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100px;
`

const LogoImage = styled.img`
  width: 50px;
`;

const NavList = styled.div`
  display: flex;
	align-items: center;
	column-gap: 60px;
`;

const NavAdditionalList = styled.div`
  display: flex;
	column-gap: 25px;
`;

const NavItem = styled(NavLink)`
  display: flex;
  color: var(--link-color);
  text-decoration: none;
	font-size: ${fontSizeLink};
	
	&.active {
		color: var(--accent-color);
	}
`;

const NavItemTheme = styled.span`
  color: #fff;
	font-size: ${fontSizeLink};
	cursor: pointer;
`;


export {Nav, LogoImage, NavList, NavAdditionalList, NavItem, NavItemTheme};