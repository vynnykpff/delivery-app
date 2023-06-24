import {useDispatch, useSelector} from "react-redux";
import CouponCard from "./coupon-card/CouponCard.jsx";

const Coupons = () => {
	const {totalOrdersCount, arrayCoupons} = useSelector(state => state.coupons);
	const dispatch = useDispatch();

	return (
		<>
			{arrayCoupons.map(coupon => <div style={{background: '#ccc', width: 450, padding: 20, borderRadius: 20, margin: 40}} key={coupon.id}><p>Number: {coupon.id}</p><p>Discount: {coupon.discount}%</p></div>)}
			{/*<h1 style={{color: '#fff'}}>Coupons</h1>*/}
			{/*{ordersCount === 2 && <div style={{color: '#fff'}}>New coupon</div>}*/}
			{/*<h2 style={{color: '#fff'}}>{totalOrdersCount}</h2>*/}
			{/*<CouponCard/>*/}
		</>
	);
};

export default Coupons;