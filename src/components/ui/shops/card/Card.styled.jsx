import styled from "@emotion/styled";
import {baseBoxShadow, baseTransition} from "../../../../shared/constants/variables.js";
import {Link} from "react-router-dom";

const CardWrapper = styled.div`
	width: 300px;
	background-color: #444;
	border-radius: 30px;
	position: relative;
	box-shadow: ${baseBoxShadow};
`;

const CardContent = styled.div`
	text-align: center;
`;

const CardImage = styled.img`
	width: 100%;
	height: 180px;
	border-top-left-radius: 30px;	
	border-top-right-radius: 30px;
`;

const CardTitle = styled.p`
	//width: 50%;
	//margin: 0 auto;
	//text-align: center;
	//padding: 20px 0;
	//font-size: 25px;
	//font-weight: 600;
  //display: flex;
	//justify-content: center;
	//align-items: center;
	font-size: 22px;
	letter-spacing: 1.5px;
`;

const CardPrice = styled.p`
	font-size: 18px;
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