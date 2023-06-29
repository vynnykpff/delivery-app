import {ProductsWrapper} from "./Products.styled.jsx";
import {useSelector} from "react-redux";
import CartItem from "./cart-item/CartItem.jsx";
import {v4 as uuidv4} from 'uuid';
import EmptyCart from "./empty-cart/EmptyCart.jsx";
import {memo, useEffect, useState} from "react";

const Products = memo(function Products() {
	const {arrayProducts} = useSelector(state => state.products);
	const [cardProducts, setCardProducts] = useState(null);

	// useEffect(() => {
	// 	if (arrayProducts?.length) {
	// 		window.localStorage.setItem('CartProducts', JSON.stringify(arrayProducts));
	// 	}
	// 	setCardProducts(JSON.parse(window.localStorage.getItem('CartProducts')));
	// }, [arrayProducts])

	return (
		<ProductsWrapper>
			{
				arrayProducts.length
					? arrayProducts.map(product => <CartItem key={uuidv4()} {...product} />)
					: <EmptyCart/>
			}
		</ProductsWrapper>
	);
});

export default Products;