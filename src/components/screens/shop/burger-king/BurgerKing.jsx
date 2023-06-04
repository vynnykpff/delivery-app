import ShopsList from "../../../ui/shops/shopsList/ShopsList.jsx";
import {Wrapper} from "../../../ui/common/Common.Styled.jsx";
import Menu from "../../../ui/shops/menu/Menu.jsx";

const BurgerKing = () => {
	return (
		<Wrapper>
			<h2>Burger King</h2>
			<Menu shops="burgerKing"/>
		</Wrapper>
	);
};

export default BurgerKing;