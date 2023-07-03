import SetNumberFormat from "../../../../../../shared/utils/setNumberFormat.js";
import {CardBlock, CardPrice, CardTitle} from "./CardContent.styled.jsx";

const CardContent = ({price, name}) => {
	return (
		<CardBlock>
			<CardTitle>{name}</CardTitle>
			<CardPrice>
				{SetNumberFormat('ru-RU', {style: 'currency', currency: 'UAH'}, price)}
			</CardPrice>
		</CardBlock>
	);
};

export default CardContent;