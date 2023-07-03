import styled from "@emotion/styled";
import {linkFontSize, subTitleFontSize} from "../../../../../../shared/constants/constants.js";

export const CardBlock = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 20px;
`;

export const CardTitle = styled.h4`
  font-size: ${subTitleFontSize};
  letter-spacing: 1.5px;
	margin: 0 0 10px 0;
`;

export const CardPrice = styled.p`
  font-size: ${linkFontSize};
  margin: 0;
`;