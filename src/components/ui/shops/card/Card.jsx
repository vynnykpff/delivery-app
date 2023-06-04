import {CardButton, CardContent, CardImage, CardTitle, CardWrapper} from "./Card.styled.jsx";
import {TbShoppingCartPlus} from "react-icons/tb";

const Card = ({image, name}) => {
	return (
		<CardWrapper>
			<CardContent>
				<CardImage src={image}/>
				<CardTitle>{name}</CardTitle>
				<CardButton><TbShoppingCartPlus/></CardButton>
			</CardContent>
		</CardWrapper>
	);
};

export default Card;