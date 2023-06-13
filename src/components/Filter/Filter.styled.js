import styled from "styled-components";

export const FilterLabel = styled.label`
  display: grid;
`;

export const FilterTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const FilterInput = styled.input`
height: 24px;
background: transparent;
outline: none;
border: 1px solid black;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
width: 350px;
:focus {
    outline: none;
  }
`;