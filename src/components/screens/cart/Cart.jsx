import FormElement from "./form/FormElement.jsx";
import Products from "./products/Products.jsx";
import {CartWrapper} from "./Cart.styled.jsx";
import TestForm from "./form/TestForm.jsx";

const Cart = () => {
	return (
		<CartWrapper>
			<TestForm/>
			<Products/>
		</CartWrapper>
	);
};

export default Cart;