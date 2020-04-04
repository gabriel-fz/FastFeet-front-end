import styled, { keyframes, css } from 'styled-components';

export const HeaderF = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 10px;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #444444;
  }

  > div {
    display: flex;
    flex-direction: row;

    a {
      width: 112px;
      height: 36px;
      background: #cccccc;
      border-radius: 4px;
      border: 0;
      font-weight: bold;
      color: #fff;
      margin: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const rotate = keyframes`
from {
  transform: rotate(0deg)
}

to {
  transform: rotate(360deg)
}
`;

export const ButtonSave = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  width: 112px;
  height: 36px;
  background: #7d40e7;
  border-radius: 4px;
  border: 0;
  font-weight: bold;
  color: #fff;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
