import {HomeDiv, Header} from './Home.styled'
import React from 'react';
import { StyledIoIosContacts } from 'pages/Login/Login.styled'; 

export default function Home() {
    return (
        <HomeDiv >
            <Header>Welcome to your phonebook!</Header>
            <StyledIoIosContacts />
        </HomeDiv>
    )
}