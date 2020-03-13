import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 425px;
  background: #fff;
  padding: 60px 30px;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    input {
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      margin: 9px 0 15px;
      height: 45px;

      &::placeholder {
        color: #999999;
      }
    }

    button {
      height: 45px;
      font-weight: bold;
      color: #fff;
      border: 0;
      background: #7d40e7;
      border-radius: 4px;
      opacity: 1;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }
    }
  }
`;
