import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: var(--footer-color);
	color: var(--footer-color--text);
	height: 150px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
	padding-top: 10px;
`;

const RightsBlock = styled.div`
	background-color: var(--right-color);
	width: 100%;
  display: flex;
	justify-content: center;
	align-items: flex-end;
	font-size: 14px;
	padding: 8px 0;
`;

export {FooterWrapper, RightsBlock}