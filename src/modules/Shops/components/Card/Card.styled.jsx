import styled from "@emotion/styled";
import {mainBoxShadow, mainTransition} from "../../../../shared/constants/constants.js";
import {Link} from "react-router-dom";

const CardWrapper = styled.div`
  width: calc(100% / 4 - 30px);
  margin: 15px;
  background-color: #444;
  border-radius: 30px;
  position: relative;
  box-shadow: ${mainBoxShadow};
`;

const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin: 0;
  object-fit: contain;
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
  box-shadow: ${mainBoxShadow};
  transition: ${mainTransition};
  text-decoration: none;
  color: #000;

  &.addProductToCart {
    background-color: #bbe903;

    &:hover {
      background-color: var(--accent-color);
      color: #000;
    }
  }

  &:hover {
    color: #fff;
    background-color: #000;
    transition: ${mainTransition};
  }

`;

export {CardWrapper, CardButton, CardImage};