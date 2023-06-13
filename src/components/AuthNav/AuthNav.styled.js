import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigateLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: black;
  background-color: #fde6c1;
  width: 60px;
  font-size: 16px;
  padding: 4px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: #6b93b7;
  }

  :hover,
  :focus {
    color: white;
    background-color:  #6b93b7;
  }
  @media screen and (min-width: 451px) {
    
  }
  @media screen and (min-width: 760px) {
    width: 100px;
    padding: 7px;
    font-size: 17px;
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const AuthDiv = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (min-width: 451px) {
    gap: 20px;
  }
  @media screen and (min-width: 760px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;