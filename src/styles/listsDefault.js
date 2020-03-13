import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 34px;
  display: flex;
  flex-direction: column;

  strong {
    font-weight: bold;
    font-size: 24px;
    color: #444444;
  }
`;

export const LineTools = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 34px;

  button {
    width: 142px;
    height: 36px;
    background: #7d40e7;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#7d40e7')};
    }
  }
`;

export const SearchTool = styled.div`
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
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 21px;
  margin-top: -8px;

  thead th {
    color: #444444;
    text-align: left;
    padding: 12px 12px 0px 12px;

    &:last-child {
      text-align: right;
    }
  }

  tbody tr {
    background: #ffffff;
    height: 57px;
    margin-bottom: 30px;

    td {
      color: #666666;
      padding: 12px;

      &:last-child {
        text-align: right;
        padding-right: 23px;
      }
    }
  }
`;

export const OptionsButton = styled.button.attrs(props => ({
  type: 'submit',
}))`
  background: #fff;
  border: 0;
`;
