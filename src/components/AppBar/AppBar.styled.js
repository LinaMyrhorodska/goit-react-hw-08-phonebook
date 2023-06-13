import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #f2cc5a;
  margin: 10px auto;
  border: 2px dashed #a5a2a2;
  border-radius: 5%;
  padding: 10px 10px;
  width: 85%;
  justify-content: space-between;

  @media screen and (min-width: 760px) {
    width: 440px;
    padding: 20px 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
    padding: 30px 30px;
  }
`;