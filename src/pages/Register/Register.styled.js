import styled from '@emotion/styled';
import { IoIosContacts } from 'react-icons/io';

export const RegisterDiv = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
  color: black;
  background-color: #f2cc5a;
  width: 85%;
  padding: 10px;
  border: 2px dashed #a5a2a2;
  border-radius: 4%;
  @media screen and (min-width: 451px) {
    
  }
  @media screen and (min-width: 760px) {
  width: 500px;
  height: 500px;
  margin: 30px auto;
  padding: 40px 80px 100px 80px;
  }
`;

export const StyledIoIosContacts = styled(IoIosContacts)`
color: #587228;
  margin-top: 50px;

  @media screen and (min-width: 451px) {
    font-size: 6rem;
  }
  @media screen and (min-width: 760px) {
    font-size: 16rem;
  }
  
`;