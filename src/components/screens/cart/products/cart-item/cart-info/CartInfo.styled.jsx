import styled from "@emotion/styled";

const CartInfoOrderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
`;

const CartInfoPrice = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

const CartInfoSend = styled.button`
  outline: none;
  border: none;
  border-radius: 30px;
  padding: 5px;
  width: 120px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.5px;
  height: 40px;
  cursor: pointer;
`;

export {CartInfoPrice, CartInfoOrderBlock, CartInfoSend};


