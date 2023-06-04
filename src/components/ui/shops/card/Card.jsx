import {CardButton, CardContent, CardImage, CardPrice, CardTitle, CardWrapper} from "./Card.styled.jsx";
import {TbShoppingCartPlus} from "react-icons/tb";
import NumberFormat from "../../../../utils/number-format.js";
import {useDispatch} from "react-redux";
import {setCount} from "../../../../store/count-buys/countBuys.slice.js";


const Card = ({image, name, price}) => {
	const dispatch = useDispatch();
	const handleBuysCount = () => {
		dispatch(setCount());
	}

	return (
		<CardWrapper>
			<CardImage src={image}/>
			<CardContent>
				<CardTitle>{name}</CardTitle>
				<CardPrice>{NumberFormat('ru-RU', {style: 'currency', currency: 'UAH'}, price)}</CardPrice>
			</CardContent>
			<CardButton onClick={handleBuysCount}><TbShoppingCartPlus/></CardButton>
		</CardWrapper>
	);
};

export default Card;