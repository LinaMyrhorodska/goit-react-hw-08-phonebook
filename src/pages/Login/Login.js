import { LoginForm } from 'components/LoginForm/LoginForm';
import {LogintDiv, StyledIoIosContacts, Header} from './Login.styled'

export default function Login() {
  return (
    <LogintDiv>
        <Header>Log In</Header>
      <LoginForm />
      <StyledIoIosContacts />
    </LogintDiv>
  );
}