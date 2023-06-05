import {ShopItem, ShopItemLink, Shops} from "./ShopsList.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {requestShops} from "../../../../store/shops/shops.slice.js";
import {resetSelectValue, setInitialSelectValue} from "../../../../store/select/select.slice.js";

const ShopsList = () => {
	const {arrayShops: shops, status} = useSelector(state => state.shops);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestShops());
	}, [dispatch]);

	const handleClick = (shop) => {
		switch (shop.name) {
			case 'mcdonalds':
				dispatch(setInitialSelectValue("burgers"));
				break;
			case 'burgerKing':
				dispatch(setInitialSelectValue("burgers"));
				break;
			case 'kfc':
				dispatch(setInitialSelectValue("wraps"));
				break;
			case 'subway':
				dispatch(setInitialSelectValue("sandwiches"));
				break;
			case 'starbucks':
				dispatch(setInitialSelectValue("drinks"));
				break;
		}
	}

	return (
			<Shops>
				{
					shops.map(shop => <ShopItemLink to={`/shop/${shop.name}`} onClick={() => handleClick(shop)} key={shop.id}><ShopItem src={shop.image}/></ShopItemLink>)
				}
			</Shops>

	);
};

export default ShopsList;