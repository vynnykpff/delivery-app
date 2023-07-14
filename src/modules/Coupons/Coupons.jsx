import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import NoData from "../../shared/components/NoData/NoData.jsx";
import {FaHistory} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {getCookie} from "../../shared/utils/cookies/getCookie.js";

const Coupons = ({collectionCoupons}) => {
	const {totalOrdersCount, arrayCoupons} = useSelector(
		(state) => state.coupons
	);

	const [totalCoupons, setTotalCoupons] = useState([]);
	const dispatch = useDispatch();

	const prevCoupons = JSON.parse(window.localStorage.getItem("Coupons")) || [];

	// useEffect(() => {
	// 	let coupons = [];
	//
	// 	if (prevCoupons.length && arrayCoupons.length) {
	// 		coupons = arrayCoupons.filter(
	// 			(coupon) =>
	// 				!prevCoupons.find((prevCoupon) => prevCoupon.id === coupon.id)
	// 		);
	// 		setTotalCoupons([...prevCoupons, ...coupons]);
	// 	} else if (prevCoupons.length && !arrayCoupons.length) {
	// 		setTotalCoupons(prevCoupons);
	// 	} else {
	// 		setTotalCoupons(arrayCoupons);
	// 	}
	// }, [arrayCoupons]);

	const isAuthValue = getCookie('isAuth');
	const navigate = useNavigate();

	return (
		<>
			{
				isAuthValue ?
					<div>
						{collectionCoupons.length ? (
							collectionCoupons.map(coupon => (
								<div
									style={{
										background: "#ccc",
										width: 450,
										padding: 20,
										borderRadius: 20,
										margin: 40,
									}}
									key={coupon.coupon.id}
								>
									<p>Number: {coupon.coupon.id}</p>
									<p>Discount: {coupon.coupon.discount}%</p>
								</div>
							))
						) : (
							<NoData icon={<FaHistory/>}/>
						)}
					</div>
					: navigate('/login')
			}
		</>
	);
};

export default Coupons;
