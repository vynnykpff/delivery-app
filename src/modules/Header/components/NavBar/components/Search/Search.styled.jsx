import styled from "@emotion/styled";
import {FiSearch} from "react-icons/fi";
import {HiOutlineShoppingCart} from "react-icons/hi";

export const SearchBlock = styled.div`
  width: 250px;
  display: flex;
	align-items: center;
  border-radius: 30px;
  background: rgba(255, 249, 240, 0.10);
  box-shadow: 0px 12px 40px -16px rgba(0, 0, 0, 0.10);
	padding: 10px 30px;
	gap: 13px;
	font-size: 18px;
`;

export const SearchField = styled.input`
	outline: none;
	border: none;
	width: 100%;
	height: 100%;
	background-color: transparent;
	
	&::placeholder {
    color: var(--text-color);
    font-size: 18px;
	}
`;

export const SearchWrapper = styled.div`
  display: flex;
	align-items: center;
`;


export const SearchIcon = styled(FiSearch)`
	//font-size: 25px;
	width: 25px;
	height: 25px;
`;

export const CartIcon = styled(HiOutlineShoppingCart)`
  font-size: 22px;
`;

export const CountBuys = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: var(--count-color);
  left: 12px;
  top: -8px;
  border-radius: 50%;
  font-size: 12px;
  color: var(--count-buys-color) !important;
  font-weight: 700;
  padding: 2px;
  box-shadow: 0px 2px 18px 1px rgba(255, 51, 52, 0.72);
	
`;

