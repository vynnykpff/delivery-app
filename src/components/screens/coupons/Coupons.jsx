import {useDispatch, useSelector} from "react-redux";
import CouponCard from "./coupon-card/CouponCard.jsx";
import {useEffect, useState} from "react";
import EmptyCart from "../cart/products/empty-cart/EmptyCart.jsx";
import {setCoupon} from "../../../store/coupons/coupons.slice.js";

const Coupons = () => {
	const {totalOrdersCount, arrayCoupons} = useSelector(
		(state) => state.coupons
	);
	const [totalCoupons, setTotalCoupons] = useState([]);
	const dispatch = useDispatch();

	const prevCoupons = JSON.parse(window.localStorage.getItem("Coupons")) || [];

	useEffect(() => {
		let coupons = [];

		if (prevCoupons.length && arrayCoupons.length) {
			coupons = arrayCoupons.filter(
				(coupon) =>
					!prevCoupons.find((prevCoupon) => prevCoupon.id === coupon.id)
			);
			setTotalCoupons([...prevCoupons, ...coupons]);
		} else if (prevCoupons.length && !arrayCoupons.length) {
			setTotalCoupons(prevCoupons);
		} else {
			setTotalCoupons(arrayCoupons);
		}
	}, [arrayCoupons]);

	return (
		<>
			{totalCoupons.length ? (
				totalCoupons.map((coupon) => (
					<div
						style={{
							background: "#ccc",
							width: 450,
							padding: 20,
							borderRadius: 20,
							margin: 40,
						}}
						key={coupon.id}
					>
						<p>Number: {coupon.id}</p>
						<p>Discount: {coupon.discount}%</p>
					</div>
				))
			) : (
				<EmptyCart/>
			)}
		</>
	);
};

export default Coupons;
