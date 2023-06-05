import {CardButton, CardContent, CardImage, CardPrice, CardTitle, CardWrapper} from "./Card.styled.jsx";
import {TbShoppingCartPlus} from "react-icons/tb";
import NumberFormat from "../../../../utils/number-format.js";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../../../store/count-buys/countBuys.slice.js";
import {setProduct, setProductCount} from "../../../../store/products/products.slice.js";


const Card = ({image, name, price, id, shops}) => {

	const {arrayMenu: menu, status} = useSelector(store => store.menu);
	const {arrayProducts} = useSelector(state => state.products);
	const {selectValue} = useSelector(store => store.select);
	const dispatch = useDispatch();

	const addCardToCart = (id) => {
		const clickCard = menu[0][shops][selectValue].filter(card => card.id === id)[0];
		if (arrayProducts[0]?.count === undefined) {
			dispatch(setProduct({...clickCard, count: 1}));
		} else {
			if (arrayProducts[0]) {
				if (arrayProducts[0]?.name === clickCard.name) {
					dispatch(setProductCount({id, count: arrayProducts[0].count + 1,}))
				} else {
					dispatch(setProduct({...clickCard, count: 1}));
				}
			}
		}
	}

	const handleBuysCount = () => {
		dispatch(setCount('plus'));
		addCardToCart(id)
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