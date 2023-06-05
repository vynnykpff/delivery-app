import Form from "./form/Form.jsx";
import Products from "./products/Products.jsx";
import {CartWrapper} from "./Cart.styled.jsx";

const Cart = () => {
	return (
		<CartWrapper>
			<Form/>
			<Products/>
		</CartWrapper>
	);
};

export default Cart;