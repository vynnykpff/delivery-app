import styled from "@emotion/styled";
import {mainBoxShadow} from "../../../../../../shared/constants/constants.js";

const ProductsBlock = styled.div`
	background: var(--shops-color);
	border-radius: 30px;
	width: 250px;
	box-shadow: ${mainBoxShadow};
	
	&.delete {
		font-size: 30px;
	}
`;

const ProductsImage = styled.img`
	width: 250px;
	height: 200px;
	border-radius: 30px;
  box-shadow: ${mainBoxShadow};
	background-color: #fafafa;
`;

const ProductsInfo = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 20px;
`;

const ProductsTitle = styled.h4`
	font-size: 22px;
	letter-spacing: 1.5px;
	padding: 0 10px;
	margin: 0;
	text-align: center;
	max-width: 70%;
	min-height: 50px;
  display: flex;
	align-items: center;
`;

const ProductsCount = styled.input`
	width: 40px;
	height: 22px;
	outline: none;
	border: none;
	border-radius: 15px;
	padding: 10px;
	margin: 20px 0;
	font-size: 18px;
	font-weight: 600;
`;

const CartItemPrice = styled.p`
  font-size: 22px;
  font-weight: 700;
	margin: 0;
`;

const CartDeleteButton = styled.button`
	font-size: 30px;
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	margin: 20px 0;
	color: var(--text-color);
`;

export {ProductsInfo, ProductsTitle, CartItemPrice, ProductsImage, ProductsBlock, ProductsCount, CartDeleteButton}



