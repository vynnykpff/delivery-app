import {Option, Select} from './Select.styled';
import {useDispatch, useSelector} from "react-redux";
import {setSelectValue} from "../../../store/select/select.slice.js";
import {useParams} from "react-router-dom";

const SelectElem = () =>{

	const select = useSelector(state => state.select.selectValue)
	const menu = useSelector(state => state.menu.arrayMenu);
	const {mcdonalds} = useParams();
	console.log(mcdonalds);
	const dispatch = useDispatch();
	// console.log(menu[0]);
	const handleChange = (event) => {
		dispatch(setSelectValue(event.target.value));
	};

	return (
		<>
			<Select value={select} onChange={handleChange}>
				{mcdonalds === 'mcdonalds' && <Option value="characters">Burgers</Option>}
				<Option value="characters">Characters</Option>
				<Option value="locations">Locations</Option>
				<Option value="episodes">Episodes</Option>
			</Select>
		</>
	);
}
export default SelectElem;