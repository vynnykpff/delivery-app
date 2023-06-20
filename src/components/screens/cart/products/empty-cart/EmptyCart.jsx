import image from '../../../../../assets/images/cart/cart-is-empty.png';
import {EmptyCartImage} from "./EmptyCart.styled.jsx";

const EmptyCart = () => {
	return (
		<div style={{margin: '0 auto'}}>
			<EmptyCartImage src={image}/>
		</div>
	);
};

export default EmptyCart;