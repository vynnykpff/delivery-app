import styled from "@emotion/styled";

const ShopsMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
	width: calc(100% + 30px);
	margin: -15px;
	margin-top: 25px;
  justify-content: center;
`;

export {ShopsMenu, CardsBlock};