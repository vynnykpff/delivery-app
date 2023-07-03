import styled from "@emotion/styled";
import {Button} from "antd";
import {mainFontFamily} from "../../shared/constants/constants.js";

const HistoryBlock = styled.div`
  margin: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #868180;
  border-radius: 30px;
  border: 2px solid #bbe903;
  position: relative;
`;

const OrderDate = styled.div`
  font-size: 22px;
  padding: 30px 0;
  font-weight: 600;
  letter-spacing: 1.5px;
`;

const HistoryCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
  gap: 30px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 350px;
  padding: 0 20px;
`;

const OrderPrice = styled.p`
  font-size: 22px;
`;

const ClearButton = styled(Button)`
  font-family: ${mainFontFamily};
  letter-spacing: 1.5px;
  font-size: 18px;
  height: 45px;
  font-weight: 600;
	display: flex;
	margin: 0 auto;
`;


export {HistoryBlock, OrderDate, HistoryCardWrapper, OrderPrice, ClearButton};