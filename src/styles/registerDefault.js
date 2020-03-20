import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

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

export const ButtonSave = styled.button`
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
`;

export const EditHeader = styled.div`
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
