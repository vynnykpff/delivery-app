import {CartWrapper} from "./Cart.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setCoupon} from "../../redux/coupons/coupons.slice.js";
import Form from "./components/Form/Form.jsx";
import Products from "./components/Products/Products.jsx";

const Cart = () => {
	const {arrayProducts} = useSelector(state => state.products);
	const {arrayCoupons} = useSelector(state => state.coupons);
	const [cartProducts, setCardProducts] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		const prevCoupons = JSON.parse(window.localStorage.getItem('Coupons')) || [];
		const newCoupons = arrayCoupons.filter(coupon => prevCoupons.every(prevCoupon => prevCoupon.id !== coupon.id));

		if (newCoupons.length > 0) {
			const updatedCoupons = [...prevCoupons, ...newCoupons];
			window.localStorage.setItem('Coupons', JSON.stringify(updatedCoupons));
			dispatch(setCoupon(updatedCoupons));
		}
	}, [arrayCoupons]);

	return (
		<CartWrapper>
			{arrayProducts.length ?
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