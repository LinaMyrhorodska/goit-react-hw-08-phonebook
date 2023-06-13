import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigate = styled.nav`
  display: flex;
  gap: 10px;
  @media screen and (min-width: 760px) {
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    gap: 20px;
  }
`;

export const NavigateLink = styled(NavLink)`
  text-decoration: none;
  font-size: 12px;
  width: 50px;
  padding: 4px;
  text-align: center;
  color: black;
  background-color: #fde6c1;
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

  @media screen and (min-width: 760px) {
    width: 60px;
    padding: 6px;
  }

  @media screen and (min-width: 1200px) {
    width: 100px;
    height: 23px;
    font-size: 17px;

  }
`;