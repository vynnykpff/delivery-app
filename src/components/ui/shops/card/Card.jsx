import {CardButton, CardContent, CardImage, CardPrice, CardTitle, CardWrapper} from "./Card.styled.jsx";
import {TbShoppingCartPlus} from "react-icons/tb";
import NumberFormat from "../../../../utils/number-format.js";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../../../store/count-buys/countBuys.slice.js";
import {removeProduct, setProduct} from "../../../../store/products/products.slice.js";
import {BsCartCheck} from "react-icons/bs";
import {toggleCardStatus} from "../../../../store/status-card/statusCard.slice.js";

const Card = ({ image, name, price, id, shops }) => {
	const { arrayMenu: menu } = useSelector((store) => store.menu);
	const { arrayProducts } = useSelector((state) => state.products);
	const { selectValue } = useSelector((store) => store.select);
	const statusCards = useSelector((store) => store.statusCard.statusCards);
	const dispatch = useDispatch();
	const clickCard = menu[0][shops][selectValue].filter((card) => card.id === id)[0];

	const addCardToCart = (id) => {
		const clickCard = menu[0][shops][selectValue].filter((card) => card.id === id)[0];
		dispatch(setProduct({ ...clickCard, count: 1 }));
	};

	const toggleStatusCard = (id, name) => {``
		if (statusCards[id] && statusCards[id].status) {
			dispatch(removeProduct(id));
			dispatch(setCount());
			dispatch(toggleCardStatus({ cardId: id, status: false }));
		} else {
			dispatch(setCount('plus'));
			dispatch(toggleCardStatus({ cardId: id, status: true }));
		}
	};

	const handleBuysCount = () => {
		addCardToCart(id);
		toggleStatusCard(id, name);
	};

	return (
		<CardWrapper>
			<CardImage src={image} />
			<CardContent>
				<CardTitle>{name}</CardTitle>
				<CardPrice>{NumberFormat('ru-RU', { style: 'currency', currency: 'UAH' }, price)}</CardPrice>
			</CardContent>
			<CardButton className={statusCards[id] && statusCards[id].status ? 'addProductToCart' : 'removeProductFromCart'} onClick={handleBuysCount}>
				{statusCards[id] && statusCards[id].status ? <BsCartCheck /> : <TbShoppingCartPlus />}
			</CardButton>
		</CardWrapper>
	);
};

export default Card;
