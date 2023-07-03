import SetNumberFormat from "../../../../shared/utils/setNumberFormat.js";
import {
	HistoryCardBlock, HistoryCardCount,
	HistoryCardImage,
	HistoryCardInfo,
	HistoryCardPrice,
	HistoryCardTitle
} from "./Card.styled.jsx";

const Card = ({name, image, price, count}) => {
	return (
		<HistoryCardBlock>
			<HistoryCardImage src={image}/>
			<HistoryCardInfo>
				<HistoryCardTitle>{name}</HistoryCardTitle>
				<HistoryCardCount>Count: {count}</HistoryCardCount>
				<HistoryCardPrice>{SetNumberFormat('ru-RU', {
					style: 'currency',
					currency: 'UAH'
				}, price * count)}
				</HistoryCardPrice>
			</HistoryCardInfo>
		</HistoryCardBlock>
	);
};

export default Card;