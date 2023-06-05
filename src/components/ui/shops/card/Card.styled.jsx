import styled from "@emotion/styled";
import {baseBoxShadow, baseTransition} from "../../../../shared/constants/variables.js";
import {Link} from "react-router-dom";

const CardWrapper = styled.div`
	width: calc(100% / 4 - 30px);
	margin: 15px;
	background-color: #444;
	border-radius: 30px;
	position: relative;
	box-shadow: ${baseBoxShadow};
`;

const CardContent = styled.div`
	text-align: center;
  display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
`;

const CardImage = styled.img`
	width: 100%;
	border-top-left-radius: 30px;	
	border-top-right-radius: 30px;
	margin: 0;
	object-fit: contain;
`;

const CardTitle = styled.p`
	font-size: 22px;
	letter-spacing: 1.5px;
	margin: 0;
	margin-bottom: 10px;
`;

const CardPrice = styled.p`
	font-size: 18px;
	margin: 0;
`;

const CardButton = styled(Link)`
	font-size: 25px;
	background-color: #ccc;
	border-radius: 50%;
	padding: 7px;
	position: absolute;
  display: flex;
	align-items: center;
	right: -5px;
	bottom: -5px;
	box-shadow: ${baseBoxShadow};
  transition: ${baseTransition};
	text-decoration: none;
	color: #000;
	
	
	&:hover {
		color: #fff;
		background-color: #000 ;
		transition: ${baseTransition};
	}
	
`;

export {CardWrapper, CardButton, CardTitle, CardPrice, CardImage, CardContent};