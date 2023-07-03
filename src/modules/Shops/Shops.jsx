import Menu from "./components/Menu/Menu.jsx";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {setCurrentShop} from "../../redux/shops/shops.slice.js";
import {Wrapper} from "./Shops.styled.jsx";

const Shops = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const [shopId, setShopId] = useState(null);

	useEffect(() => {
		setShopId(Object.values(params)[0])
		dispatch(setCurrentShop(shopId));
	}, [params.name]);

	return (
		<Wrapper>
			<Menu shops={shopId}/>
		</Wrapper>
	);
};

export default Shops;