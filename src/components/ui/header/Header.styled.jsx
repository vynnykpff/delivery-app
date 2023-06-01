import styled from "@emotion/styled";
import {baseBoxShadow, baseTransition} from "../../../shared/constants/variables.js";

const HeaderWrapper = styled.header`
	background-color: var(--header-color);
	box-shadow: ${baseBoxShadow};
	transition: ${baseTransition};
`;

export {HeaderWrapper};


