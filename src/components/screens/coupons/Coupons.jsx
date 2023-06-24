import {useDispatch, useSelector} from "react-redux";
import CouponCard from "./coupon-card/CouponCard.jsx";
import {setCoupon, updateOrdersCount} from "../../../store/coupons/coupons.slice.js";
import {v4 as uuidv4} from 'uuid';
import {getRandomValue} from "../../../utils/getRandomValue.js";

const Coupons = () => {
	const {ordersCount, totalOrdersCount, arrayCoupons} = useSelector(state => state.coupons);
	const dispatch = useDispatch();

	if (ordersCount === 2) {
		dispatch(setCoupon({id: uuidv4(), discount: getRandomValue(5, 20)}));
		dispatch(updateOrdersCount());
	}


	console.log(arrayCoupons);
	console.log(ordersCount);

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