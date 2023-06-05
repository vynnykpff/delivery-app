import styled from "@emotion/styled";
import {baseBoxShadow} from "../../../../shared/constants/variables.js";

const FormBlock = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 30px;
`;

const FieldInput = styled.input`
  padding: 5px 15px;
  border-radius: 15px;
  outline: none;
  border: none;
  box-shadow: ${baseBoxShadow};
	height: 30px;
`;

const FieldTitle = styled.label`
	margin-bottom: -20px;
`;

export {FormBlock, FieldInput, FieldTitle};


