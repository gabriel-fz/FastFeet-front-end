import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const ActionsList = styled.div`
  position: absolute;
  z-index: 1;
  width: 200px;
  left: calc(50% - 70px);
  top: calc(100% + 14px);
  background: #fff;
  box-shadow: 0px 0px 2px #00000026;
  border-radius: 4px;
  padding: 15px 10px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 9px);
    top: -9px;
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #fff;
  }

  div {
    display: flex;
    align-items: center;

    & + div {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid #eeeeee;
    }

    button,
    a {
      font-size: 16px;
      border: 0;
      color: #999999;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
