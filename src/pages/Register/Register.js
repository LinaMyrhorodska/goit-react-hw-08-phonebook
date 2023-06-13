import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import {RegisterDiv, StyledIoIosContacts} from './Register.styled'


export default function Register() {
  return (
      <RegisterDiv>
        <h1>Registration</h1>
        <RegisterForm />
        <StyledIoIosContacts />
      </RegisterDiv>

  );
}