import NumberFormat from "../../../../utils/number-format.js";
import {
	HistoryCardBlock, HistoryCardCount,
	HistoryCardImage,
	HistoryCardInfo,
	HistoryCardPrice,
	HistoryCardTitle
} from "./HistoryCard.styled.jsx";

const HistoryCard = ({name, image, price, count}) => {
	return (
		<HistoryCardBlock>
			<HistoryCardImage src={image}/>
			<HistoryCardInfo>
				<HistoryCardTitle>{name}</HistoryCardTitle>
				<HistoryCardCount>Count: {count}</HistoryCardCount>
				<HistoryCardPrice>{NumberFormat('ru-RU', {
					style: 'currency',
					currency: 'UAH'
				}, price * count)}
				</HistoryCardPrice>
			</HistoryCardInfo>
		</HistoryCardBlock>
	);
};

export default HistoryCard;