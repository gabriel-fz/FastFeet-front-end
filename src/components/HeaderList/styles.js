import styled from 'styled-components';
import { darken } from 'polished';

export const HeaderL = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 34px;

  form {
    width: 237px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      margin: 0 5px 0 15px;
    }

    input {
      height: 100%;
      width: 100%;
      border: 0;
      &::placeholder {
        color: #999999;
      }
    }
  }

  a {
    width: 142px;
    height: 36px;
    background: #7d40e7;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#7d40e7')};
    }
  }
`;
