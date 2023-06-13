import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth'; 
import {UserDiv, UserP, ButtonLogout} from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserDiv>
      <UserP>Hi, {user.name}</UserP>
      <ButtonLogout type="button" onClick={() => dispatch(logOut())}>
        Log out
      </ButtonLogout>
    </UserDiv>
  );
};