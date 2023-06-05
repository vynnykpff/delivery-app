import image from '../../../../../assets/images/cart/cart-is-empty.png';
import {EmptyCartImage} from "./EmptyCart.styled.jsx";

const EmptyCart = () => {
	return (
		<EmptyCartImage src={image}/>
	);
};

export default EmptyCart;