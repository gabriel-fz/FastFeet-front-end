import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 120px;
  font-weight: bold;
  padding: 4px 7px;
  border-radius: 50px;
  position: relative;

  ${props =>
    props.status === 'CANCELADA' &&
    css`
      background: #fab0b0;
      color: #de3b3b;

      &::before {
        position: absolute;
        margin-top: 4px;
        width: 8px;
        height: 8px;
        background: #de3b3b;
        content: '';
        border-radius: 50%;
      }
    `}

  ${props =>
    props.status === 'ENTREGUE' &&
    css`
      background: #dff0df;
      color: #2ca42b;

      &::before {
        position: absolute;
        margin-top: 4px;
        width: 8px;
        height: 8px;
        background: #2ca42b;
        content: '';
        border-radius: 50%;
      }
    `}

  ${props =>
    props.status === 'PENDENTE' &&
    css`
      background: #f0f0df;
      color: #c1bc35;

      &::before {
        position: absolute;
        margin-top: 4px;
        width: 8px;
        height: 8px;
        background: #c1bc35;
        content: '';
        border-radius: 50%;
      }
    `}

  ${props =>
    props.status === 'RETIRADA' &&
    css`
      background: #bad2ff;
      color: #4d85ee;

      &::before {
        position: absolute;
        margin-top: 4px;
        width: 8px;
        height: 8px;
        background: #4d85ee;
        content: '';
        border-radius: 50%;
      }
    `}

  span {
    margin-left: 15px;
  }
`;
