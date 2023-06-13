import styled from '@emotion/styled';

export const Header = styled.h1`
font-size: 36px;
color: black;
`;

export const HomeDiv = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #f2cc5a;
  width: 73%;
  padding: 30px;
  margin: 20px auto;
  border: 2px dashed #a5a2a2;
  border-radius: 4%;
  @media screen and (min-width: 760px) {
    padding: 20px 40px 80px 40px;
    width: 400px;
    height: 300px;
    margin: 30px auto;
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    margin: 30px auto;
    width: 500px;
    height: 500px;
    padding: 40px 80px 100px 80px;
  }
`;