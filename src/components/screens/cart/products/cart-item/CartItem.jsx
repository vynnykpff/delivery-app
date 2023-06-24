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
import {useDispatch, useSelector} from "react-redux";
import {removeProduct, setProductCount} from "../../../../../store/products/products.slice.js";
import {CgCloseO} from "react-icons/cg";
import {setCount} from "../../../../../store/count-buys/countBuys.slice.js";
import {toggleCardStatusInShop} from "../../../../../store/status-card/statusCard.slice.js";
import {useEffect, useState} from "react";

const CartItem = ({image, name, price, count, id}) => {
	const dispatch = useDispatch();
	const {arrayProducts} = useSelector(state => state.products);
	const [cartProducts, setCardProducts] = useState([]);

	useEffect(() => {
		setCardProducts(JSON.parse(window.localStorage.getItem('CartProducts')));
	}, [arrayProducts])

	const handleChange = (e) => {
		dispatch(setProductCount({id, count: e.target.value}));
	}

	console.log(cartProducts);

	const handleClick = (id) => {
		dispatch(removeProduct(id));
		dispatch(toggleCardStatusInShop({ cardId: id, status: false }));
		dispatch(setCount());
		const removeHistoryProduct = cartProducts.filter(product => product.id !== id);
		window.localStorage.setItem('CartProducts', JSON.stringify(removeHistoryProduct));
	}

	return (
		<ProductsBlock>
			<ProductsImage
				src={image}/>
			<ProductsInfo>
				<ProductsTitle>{name}</ProductsTitle>
				<ProductsCount onChange={handleChange} defaultValue={count} type="number" min="1"/>
				<CartItemPrice>{NumberFormat('ru-RU', {style: 'currency', currency: 'UAH'}, price * count)}</CartItemPrice>
				<CartDeleteButton onClick={() => handleClick(id)}>
					<CgCloseO/>
				</CartDeleteButton>
			</ProductsInfo>
		</ProductsBlock>
	);
};

export default CartItem;
