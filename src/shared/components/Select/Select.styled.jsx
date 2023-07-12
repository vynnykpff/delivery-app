import styled from "@emotion/styled";

const Select = styled.select`
  width: 300px;
  height: 50px;
  padding: 10px;
  margin-top: 30px;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  color: var(--accent-color);
`
const Option = styled.option`
  padding: 3px 10px;
  font-weight: 600;
  color: #000;
`
export {Select, Option}