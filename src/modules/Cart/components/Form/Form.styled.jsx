import styled from "@emotion/styled";
import {Button, Form, Input, Select} from "antd";
import { mainBoxShadow, mainFontFamily } from "../../../../shared/constants/constants.js";
import InputMask from "react-input-mask";

const FormBlock = styled(Form)`
  width: 350px;
  font-family: ${mainFontFamily};
`;

const FormItem = styled(Form.Item)`
  .ant-form-item-label > label {
    font-family: ${mainFontFamily};
    color: var(--text-color);
    font-weight: 600;
    letter-spacing: 1.2px;
    font-size: 18px;
  }
`;

const InputField = styled(Input)`
  font-family: ${mainFontFamily};
  box-shadow: ${mainBoxShadow};
  background-color: #f5f6f7;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
  }
`;

const InputFieldNumber = styled(InputMask)`
	width: 100%;
  font-family: 'JetBrains Mono',monospace;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  font-size: 16px;
  box-sizing: border-box;
  margin: 0;
  padding: 4px 11px;
  line-height: 1.5714285714285714;
  border-radius: 6px;
  transition: all 0.2s;
  outline: 0;
	border-width: 1px;
	
	&.error {
		border-color: #ff4d4f;
	}
	
`;

const OrderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalPrice = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-color);
`;

const FieldError = styled.div`
  color: red;
  font-size: 14px;
`;

const SendButton = styled(Button)`
  font-family: ${mainFontFamily};
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 5px 20px;
  height: 45px;
  font-weight: 600;

  &:disabled {
    color: var(--text-color);
  }
`;

const SelectField = styled(Select)`
  font-family: ${mainFontFamily};
  box-shadow: ${mainBoxShadow};
	
	&.custom-option {
		font-size: 40px;
	}
`;


export { FormBlock, FormItem, InputField, InputFieldNumber, FieldError, SendButton, OrderBlock, TotalPrice, SelectField};
