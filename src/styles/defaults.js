import styled from 'styled-components';

export const ContainerList = styled.div`
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

export const ContainerForm = styled.div`
  max-width: 900px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 9px 15px;

    label {
      font-weight: bold;
      color: #444444;
      margin-bottom: 10px;
    }

    input {
      height: 45px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 12px 15px;
      color: #999999 !important;
      -webkit-appearance: none;
    }

    span {
      color: red;
      font-weight: bold;
      margin-top: 5px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
