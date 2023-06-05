import {
	CartDeleteButton,
	CartItemPrice,
	ProductsBlock,
	ProductsCount,
	ProductsImage,
	ProductsInfo,
	ProductsTitle
} from "./CartItem.styled.jsx";
import NumberFormat from "../../../../../utils/number-format.js";
import {useDispatch} from "react-redux";
import {removeProduct, setProductCount} from "../../../../../store/products/products.slice.js";
import {CgCloseO} from "react-icons/cg";
import {setCount} from "../../../../../store/count-buys/countBuys.slice.js";

const CartItem = ({image, name, price, count, id}) => {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(setProductCount({id, count: e.target.value}));
	}

	const handleClick = (id) => {
		dispatch(removeProduct(id));
		dispatch(setCount());
	}

	return (
		<ProductsBlock>
			<ProductsImage
				src={image}/>
			<ProductsInfo>
				<ProductsTitle>{name}</ProductsTitle>
				<ProductsCount onChange={handleChange} defaultValue={count} type="number" min="0"/>
				<CartItemPrice>{NumberFormat('ru-RU', {style: 'currency', currency: 'UAH'}, price * count)}</CartItemPrice>
				<CartDeleteButton onClick={() => handleClick(id)}>
					<CgCloseO/>
				</CartDeleteButton>
			</ProductsInfo>
		</ProductsBlock>
	);
};

export default CartItem;
