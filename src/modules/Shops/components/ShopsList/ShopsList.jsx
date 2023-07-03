import {ShopItem, ShopItemLink, Shops} from "./ShopsList.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {requestShops} from "../../../../redux/shops/shops.slice.js";
import {SetStartValue} from "../../../../shared/utils/setStartValue.js";
import {setSelectValue} from "../../../../redux/select/select.slice.js";

const ShopsList = () => {
	const {arrayShops: shops} = useSelector(state => state.shops);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestShops());
	}, [dispatch]);

	const handleClick = (shop) => {
		dispatch(setSelectValue(SetStartValue(shop)));
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