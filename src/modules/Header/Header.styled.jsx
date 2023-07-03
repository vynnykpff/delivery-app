import styled from "@emotion/styled";
import {mainBoxShadow, mainTransition} from "../../shared/constants/constants.js";

const HeaderWrapper = styled.header`
	background-color: var(--header-color);
	box-shadow: ${mainBoxShadow};
	transition: ${mainTransition};
`;

export {HeaderWrapper};


