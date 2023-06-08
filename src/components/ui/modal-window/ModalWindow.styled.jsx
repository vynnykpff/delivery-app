import styled from "@emotion/styled";

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
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
`;

export {CloseButton, ModalContent, ModalOverlay};