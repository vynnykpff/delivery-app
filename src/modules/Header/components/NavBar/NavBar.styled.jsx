import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {linkFontSize, mainTransition} from "../../../../shared/constants/constants.js";
import {tablet} from "../../../../shared/constants/deviceSizes.js";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  //@media (max-width: 768px) {
  //  display: flex;
  //  flex-direction: column;
  //  justify-content: center;
  //  align-items: center;
  //  row-gap: 50px;
  //  position: fixed;
  //  left: -100%;
  //  right: 0;
  //  top: 0;
  //  bottom: 0;
  //  width: 100%;
  //  height: 100vh;
  //  background: var(--background-color);
  //  z-index: 10;
  //  transition: left 0.5s;
  //
  //  &.active {
  //    left: 0;
  //  }
`

export const MobileNav = styled.div`
  display: block;
  z-index: 10;
  @media (min-width: ${tablet}) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  width: 32px;
	height: 32px;
	margin-right: 5px;
`;

export const LogoTitle = styled.span`
  color: #000;
  font-size: 32px;
  font-family: Poppins;
  font-weight: 600;
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 60px;
`;

export const NavAdditionalList = styled.div`
  display: flex;
  column-gap: 25px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  color: var(--link-color);
  text-decoration: none;
  font-size: ${linkFontSize};
  transition: ${mainTransition};
	letter-spacing: 1.2px;

  &.active {
    text-decoration: none;
    transition: ${mainTransition};
    color: var(--accent-color);
  }
	
	&.shoppingCart {
		position: relative;
	}
`;

export const CountBuys = styled.span`
  display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 15px;
	height: 15px;
	background-color: var(--text-color);
	right: -8px;
	top: -8px;
	border-radius: 50%;
	font-size: 14px;
	color: var(--count-buys-color);
	font-weight: 700;
	padding: 2px;
`;

export const NavItemAnchor = styled.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: -5px;
    left: 0;
    border-radius: 10px;
    background-color: var(--text-color);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scale(1);
    transform-origin: bottom left;
  }
`

export const NavItemTheme = styled.span`
  font-size: ${linkFontSize};
  cursor: pointer;
`;
