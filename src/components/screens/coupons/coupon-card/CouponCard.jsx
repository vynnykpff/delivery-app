import {CardContent, CardTitle, CardWrapper} from "../../../ui/shops/card/Card.styled.jsx";
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";

const CouponCard = () => {
	const [isChecked, setIsCheked] = useState(false);


	const handleClick = () => {
		setIsCheked(!isChecked);
	}


	return (
		<CardWrapper>
			<CardContent>
				<CardTitle>Coupon</CardTitle>
				<input type="checkbox" onClick={handleClick}/>
				<div>Coupon code: <input onClick={handleClick} type={isChecked ? "text" : "password"} defaultValue={uuidv4()} /></div>
			</CardContent>
		</CardWrapper>
	);
};

export default CouponCard;