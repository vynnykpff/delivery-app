import {ShopItem, ShopItemLink, Shops} from "./ShopsList.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {requestShops} from "../../../../store/shops/shops.slice.js";

const ShopsList = () => {
	const {arrayShops: shops, status} = useSelector(state => state.shops);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestShops());
	}, [dispatch]);

	return (
			<Shops>
				{
					shops.map(shop => <ShopItemLink to={`/shop/${shop.name}`} key={shop.id}><ShopItem src={shop.image}/></ShopItemLink>)
				}
			</Shops>

	);
};

export default ShopsList;