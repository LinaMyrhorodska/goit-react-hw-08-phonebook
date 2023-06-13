import styled from '@emotion/styled';

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 20px auto;
  color: black;
  background-color: #f2cc5a;
  padding: 20px 10px;

  border: 2px dashed #a5a2a2;
  border-radius: 4%;

  @media screen and (min-width: 760px) {
width: 440px;
padding: 20px;
	}
	@media screen and (min-width: 1200px) {
    padding: 40px 80px 100px 80px;
    width: 500px;
    margin: 30px auto;
	}
`;