import styled from "@emotion/styled";
import {baseBoxShadow} from "../../../../shared/constants/variables.js";
import {NavLink} from "react-router-dom";

const ShopsWrapper = styled.div`
	text-align: center;
`;

const Shops = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 50px;
  background: var(--shops-color);
	border-radius: 20px;
	padding: 20px 40px;
	box-shadow: ${baseBoxShadow};
	border: 2px solid var(--link-color);
`;

const ShopItem = styled.img`
	width: 60px;
	border-radius: 50%;
	box-shadow: ${baseBoxShadow};
`;

const ShopItemLink = styled(NavLink)`
`

export {Shops, ShopsWrapper, ShopItem, ShopItemLink};