import {CardsBlock, ShopsMenu} from "./Menu.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {requestMenu} from "../../../../store/menu/menu.slice.js";
import {v4 as uuidv4} from 'uuid';
import {Option, Select} from "../../select/Select.styled.jsx";
import {resetSelectValue, setSelectValue} from "../../../../store/select/select.slice.js";
import Card from "../card/Card.jsx";
import ShopsList from "../shopsList/ShopsList.jsx";

const Menu = ({shops}) => {
	const {arrayMenu: menu, status} = useSelector(state => state.menu);
	const {selectValue} = useSelector(state => state.select);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestMenu());
		// dispatch(setSelectValue(Object.keys(menu[0]?.shops)[0]));
	}, [dispatch])

	const handleChange = (event) => {
		dispatch(setSelectValue(event.target.value));
	};

	const setShop = useMemo(() => (shopItem) => {
		return Object.keys(menu[0][shopItem])
	}, [menu[0]]);

	const getCards = () => {
		if (status) {
			return menu[0][shops][selectValue];
		}
	};

	return (
		<ShopsMenu>
			<ShopsList/>
			{status &&
				<Select value={selectValue} onChange={handleChange}>
					{setShop(shops).map(item => <Option key={uuidv4()} value={item}>{item}</Option>)}
				</Select>
			}
			<CardsBlock>
				{(selectValue !== "" && status) &&
					getCards().map(card => <Card key={card.id} image={card.image} name={card.name} price={card.price}/>)
				}
			</CardsBlock>

		</ShopsMenu>
	);
};

export default Menu;