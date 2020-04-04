import styled from 'styled-components';

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

      p {
        white-space: nowrap;
        max-width: 825px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      &:last-child {
        text-align: right;
        padding-right: 23px;
      }
    }
  }
`;
