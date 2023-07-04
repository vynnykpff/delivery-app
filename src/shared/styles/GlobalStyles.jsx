import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1400px;
	margin: 0 auto;
  padding: 0 25px;
	flex: 1 1 auto;
	box-sizing: content-box;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 35px;
  color: var(--text-color);
  letter-spacing: 3px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 30px 0;
`;

export const Divider = styled.div`
  width: 2px;
	border-radius: 2px;
  height: 25px;
	background: var(--divider-color);
	margin-right: 10px;
`;