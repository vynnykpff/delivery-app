import {ShopWrapper} from "./Shop.styled.jsx";
import ShopsList from "../../ui/shops/shopsList/ShopsList.jsx";
import {Title} from "../../ui/common/Common.Styled.jsx";

const Shop = () => {
	return (
		<>
			<ShopWrapper>
				<Title>Select Shop</Title>
				<ShopsList/>
			</ShopWrapper>
		</>
	);
};

export default Shop;