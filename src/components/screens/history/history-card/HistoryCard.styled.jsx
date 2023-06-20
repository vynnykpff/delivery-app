import styled from "@emotion/styled";

const HistoryCardBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  border-radius: 30px;
  width: 350px;
`;

const HistoryCardImage = styled.img`
  height: 150px;
  border-radius: 20px;
  background-color: #f5f6f7;
`;

const HistoryCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 15px;
  padding: 0 50px;
	font-weight: 700;
	letter-spacing: 1.5px;
`;

const HistoryCardTitle = styled.div`

`;

const HistoryCardPrice = styled.div`

`;

const HistoryCardCount = styled.div`

`;

export {HistoryCardBlock, HistoryCardImage, HistoryCardInfo, HistoryCardTitle, HistoryCardPrice, HistoryCardCount};