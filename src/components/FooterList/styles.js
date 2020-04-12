import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 40px 0;

  div {
    width: 36px;
    height: 36px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #7d40e7;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-weight: bold;
      color: #7d40e7;
    }
  }

  button {
    width: 142px;
    height: 36px;
    background: #7d40e7;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#7d40e7')};
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
