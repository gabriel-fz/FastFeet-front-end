import styled from 'styled-components';

export const InputAvatar = styled.label`
  display: flex;
  justify-content: center;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 1px dashed #dddddd;
    background: #fff;
  }

  input {
    display: none;
  }
`;
