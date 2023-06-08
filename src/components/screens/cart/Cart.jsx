import Form from "./form/FormElement.jsx";
import Products from "./products/Products.jsx";
import {CartWrapper} from "./Cart.styled.jsx";
import {useSelector} from "react-redux";

const Cart = () => {
	const {arrayProducts} = useSelector(state => state.products);

	return (
		<CartWrapper>
			{arrayProducts.length > 0 ?
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