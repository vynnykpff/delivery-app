import NumberFormat from "../../../../../../utils/number-format.js";
import {useSelector} from "react-redux";
import {CartInfoOrderBlock, CartInfoPrice, CartInfoSend} from "./CartInfo.styled.jsx";

const CartInfo = () => {
	const {arrayProducts} = useSelector(state => state.products);
	const totalCount = arrayProducts.reduce((acc, {price, count}) => acc + price * count, 0);

	return (
		<CartInfoOrderBlock>
			<CartInfoPrice>{NumberFormat('ru-RU', {style: 'currency', currency: 'UAH'}, totalCount)}</CartInfoPrice>
			<CartInfoSend>Submit</CartInfoSend>
		</CartInfoOrderBlock>
	);
};

export default CartInfo;