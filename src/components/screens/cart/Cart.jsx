import Form from "./form/Form.jsx";
import Products from "./products/Products.jsx";
import {CartWrapper} from "./Cart.styled.jsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Cart = () => {
	const {arrayProducts} = useSelector(state => state.products);
	const [cartProducts, setCardProducts] = useState([]);

	useEffect(() => {
		setCardProducts(JSON.parse(window.localStorage.getItem('CartProducts')));
	}, [arrayProducts])

	return (
		<CartWrapper>
			{cartProducts?.length > 0 ?
				<>
					<Form/>
					<Products/>
				</>
				: <Products/>
			}
		</CartWrapper>
	);
};

export default Cart;