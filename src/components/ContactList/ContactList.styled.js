import styled from '@emotion/styled';

export const List = styled.ul`
margin: 12px;
padding: 0;
`;


export const ContactItem = styled.li`
    display: flex;
    gap: 20px;
    width: 350px;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const ContactName = styled.span`
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  font-weight: 500;
`;

export const ContactBtn = styled.button`
font-size: 16px;
height: 25px;
cursor: pointer;
  justify-content: flex-end;
  background-color: #fde6c1;
  color: black;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 1px 10px;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  :hover,
  :focus {
    color: white;
    background-color: #6b93b7;
  }
`;