import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  padding: 0 30px;
  border: 1px solid #dddddd;
  opacity: 1;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin: 19px 30px;
      padding-right: 30px;
      border-right: 1px solid #eee;
      height: 26px;
    }

    a {
      font-weight: bold;
      color: #999999;
      margin-right: 21px;

      &:hover {
        color: #444444;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  text-align: right;
  margin-right: 30px;

  strong {
    display: block;
    color: #666666;
  }

  a {
    display: block;
    margin-top: 5px;
    color: #de3b3b;
  }
`;
