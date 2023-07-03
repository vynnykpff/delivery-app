import {
	CartDeleteButton,
	CartItemPrice,
	ProductsBlock,
	ProductsCount,
	ProductsImage,
	ProductsInfo,
	ProductsTitle
} from "./ProductCard.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {CgCloseO} from "react-icons/cg";
import {useEffect, useState} from "react";
import SetNumberFormat from "../../../../../../shared/utils/setNumberFormat.js";
import {removeProduct, setProductCount} from "../../../../../../redux/products/products.slice.js";
import {setCount} from "../../../../../../redux/count-buys/countBuys.slice.js";
import {toggleCardStatus} from "../../../../../../redux/status-card/statusCard.slice.js";

const ProductCard = ({image, name, price, count, id}) => {
	const dispatch = useDispatch();
	const {arrayProducts} = useSelector(state => state.products);
	const [cartProducts, setCardProducts] = useState([]);

	// useEffect(() => {
	// 	setCardProducts(JSON.parse(window.localStorage.getItem('CartProducts')));
	// }, [arrayProducts])

	const handleChange = (e) => {
		dispatch(setProductCount({id, count: e.target.value}));
	}

	const handleClick = (id) => {
		dispatch(removeProduct(id));
		dispatch(toggleCardStatus({ cardId: id, status: false }));
		dispatch(setCount());
		// const removeHistoryProduct = cartProducts.filter(product => product.id !== id);
		// window.localStorage.setItem('CartProducts', JSON.stringify(removeHistoryProduct));
	}

	return (
		<ProductsBlock>
			<ProductsImage
				src={image}/>
			<ProductsInfo>
				<ProductsTitle>{name}</ProductsTitle>
				<ProductsCount onChange={handleChange} defaultValue={count} type="number" min="1"/>
				<CartItemPrice>{SetNumberFormat('ru-RU', {style: 'currency', currency: 'UAH'}, price * count)}</CartItemPrice>
				<CartDeleteButton onClick={() => handleClick(id)}>
					<CgCloseO/>
				</CartDeleteButton>
			</ProductsInfo>
		</ProductsBlock>
	);
};

export default ProductCard;
