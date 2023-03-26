import styled from "styled-components";
import {RiSettings5Fill, RiNotificationFill} from 'react-icons/ri';


export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    /* border: 1px solid magenta; */
`

export const InnerNav = styled.div``

export const StyledRiSettings5Fill = styled(RiSettings5Fill)`
    color: var(--primary);
    width: 20px;
    height: 20px;
    margin-right: 1rem;
`

export const StyledRiNotificationFill = styled(RiNotificationFill)`
    color: var(--primary);
    width: 20px;
    height: 20px;
`

export const MidContainer = styled.figure`
    display: flex;
    width: fit-content;
    /* border: 1px solid magenta; */
`

export const LogoImage = styled.img`
    width: 70%;
`