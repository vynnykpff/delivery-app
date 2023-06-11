import {ProductsWrapper} from "./Products.styled.jsx";
import {useSelector} from "react-redux";
import CartItem from "./cart-item/CartItem.jsx";
import {v4 as uuidv4} from 'uuid';
import EmptyCart from "./empty-cart/EmptyCart.jsx";
import {memo} from "react";

const Products = memo(function Products() {
	const {arrayProducts} = useSelector(state => state.products);

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