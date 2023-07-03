import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: var(--footer-color);
	color: var(--footer-color--text);
	min-height: 150px;
	padding-top: 10px;
`;

export const RightsBlock = styled.div`
	background-color: var(--right-color);
	width: 100%;
  display: flex;
	justify-content: center;
	align-items: flex-end;
	font-size: 14px;
	padding: 8px 0;
`;

