import {CardButton, CardImage, CardWrapper,} from './Card.styled.jsx';
import {TbShoppingCartPlus} from 'react-icons/tb';
import {useDispatch, useSelector} from 'react-redux';
import {setCount} from '../../../../redux/count-buys/countBuys.slice.js';
import {removeProduct, setProduct,} from '../../../../redux/products/products.slice.js';
import {BsCartCheck} from 'react-icons/bs';
import {toggleCardStatus} from '../../../../redux/status-card/statusCard.slice.js';
import {useEffect} from 'react';
import CardContent from "./components/CardContent/CardContent.jsx";

const Card = ({image, name, price, id, shops}) => {
	const {arrayProducts} = useSelector(store => store.products)
	const {arrayMenu: menu} = useSelector(store => store.menu);
	const {selectValue} = useSelector(store => store.select);
	const statusCards = useSelector(store => store.statusCard.statusCards);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!arrayProducts.length && statusCards[id]?.status === true) {
			dispatch(toggleCardStatus({cardId: id, status: false}));
		}
	}, [arrayProducts]);

	const addCardToCart = id => {
		const clickCard = menu[0][shops][selectValue].filter(card => card.id === id)[0];
		dispatch(setProduct({...clickCard, count: 1}));
	};

	const toggleStatusCard = id => {
		if (statusCards[id] && statusCards[id].status) {
			dispatch(removeProduct(id));
			dispatch(setCount());
			dispatch(toggleCardStatus({cardId: id, status: false}));
		} else {
			dispatch(setCount('plus'));
			dispatch(toggleCardStatus({cardId: id, status: true}));
		}
	};

	const handleBuysCount = () => {
		addCardToCart(id);
		toggleStatusCard(id);
	};

	return (
		<CardWrapper>
			<CardImage src={image}/>
			<CardContent name={name} price={price}/>
			<CardButton
				className={statusCards[id] && statusCards[id].status ? 'addProductToCart' : 'removeProductFromCart'}
				onClick={handleBuysCount}>
				{statusCards[id] && statusCards[id].status ? <BsCartCheck/> : <TbShoppingCartPlus/>}
			</CardButton>
		</CardWrapper>
	);
};

export default Card;
