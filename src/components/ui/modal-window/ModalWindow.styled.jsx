import styled from "@emotion/styled";
import {baseTransition} from "../../../shared/constants/variables.js";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &.modal {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: .5s;
  }

  &.modal.active {
    opacity: 1;
    pointer-events: all;
  }
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &.modal__content {
    padding: 20px;
    border-radius: 20px;
    background-color: var(--background-color);
    transform: scale(0.5);
    width: 50vw;
    transition: .4s all;
  }

  &.modal__content.active {
    transform: scale(1);
	  
  }
`;

const MapInfoBlock = styled.div`
  text-align: center;
  font-size: 22px;
  letter-spacing: 1.5px;
`;

const MapImage = styled.img`
  width: 750px;
  height: 450px;
  border-radius: 30px;
  border: 2px solid #bbe903;
`;

const TitleWay = styled.h3`
	font-weight: 600;
`;

const OrderTitle = styled.h3`
	font-size: 25px;
`;

const DescriptionOfWay = styled.p`
	
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  transform: scale(1);
  transition: ${baseTransition};

  &:hover {
    transform: scale(1.1);
    transition: ${baseTransition};
  }
`;

export {CloseButton, ModalContent, ModalOverlay, MapInfoBlock, MapImage, TitleWay, OrderTitle, DescriptionOfWay};