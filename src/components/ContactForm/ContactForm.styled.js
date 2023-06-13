import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 16px;
  border: 2px dashed #a5a2a2;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  display: contents;
`;

export const LabelName = styled.p`
  font-size: 18px;
  font-weight: 600; 
`;

export const FormInput = styled.input`
height: 24px;
background: transparent;
outline: none;
border: 1px solid black;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  :focus,
  :hover {
    outline: none;
    border-color: #6b93b7;
  }
`;

export const FormBtn = styled.button`
border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: 16px;
  color: black;
  font-size: 16px;
  height: 30px;
  background-color: #fde6c1;
  border: none;
  cursor: pointer;
  padding: 1px 10px;
  width: 150px;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: white;
    background-color: #6b93b7;
  }
`;