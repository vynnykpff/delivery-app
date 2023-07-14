import {CardsBlock, ShopsMenu} from "./Menu.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import {requestMenu} from "../../../../redux/menu/menu.slice.js";
import {v4 as uuidv4} from 'uuid';
import {Option, Select} from "../../../../shared/components/Select/Select.styled.jsx";
import {setSelectValue} from "../../../../redux/select/select.slice.js";
import Card from "../Card/Card.jsx";
import ShopsList from "../ShopsList/ShopsList.jsx";
import {useParams} from "react-router-dom";
import {SetStartValue} from "../../../../shared/utils/setStartValue.js";

const Menu = ({shops}) => {
	const {arrayMenu: menu, status} = useSelector(state => state.menu);
	const {selectValue} = useSelector(state => state.select);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(requestMenu());

		if (!selectValue) {
			dispatch(setSelectValue(SetStartValue(params)));
		}
	}, [dispatch]);


	const handleChange = (event) => {
		dispatch(setSelectValue(event.target.value));
	};

	const setShop = useMemo(() => (shopItem) => {
		return menu && menu[0] && menu[0][shopItem] ? Object.keys(menu[0][shopItem]) : [];
	}, [menu]);

	const getCards = () => {
		if (status && menu && menu[0] && menu[0][shops] && menu[0][shops][selectValue]) {
			return menu[0][shops][selectValue];
		}
		return [];
	};



	useEffect(() => {
		console.log(menu)
		menu.map(item => {
			const data = Object.values(item);
			const newData = data.map(item => Object.values(item));
			const newValue = newData.flat(2);
			// console.log(newValue);

		});

	}, [menu])


	return (
		<ShopsMenu>
			<ShopsList/>
			{status && menu && menu[0] && menu[0][shops] &&
				<Select value={selectValue} onChange={handleChange}>
					{setShop(shops).map(item => {
						return <Option key={uuidv4()} value={item}>{item}</Option>
					})}
				</Select>
			}
			<CardsBlock>
				{(selectValue !== "" && status && menu && menu[0] && menu[0][shops] && menu[0][shops][selectValue]) &&
					getCards().map(card => <Card key={card.id} image={card.image} name={card.name} price={card.price} id={card.id}
					                             shops={shops}/>)
				}
			</CardsBlock>
		</ShopsMenu>
	);
};

export default Menu;
