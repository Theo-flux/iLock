import styled from "styled-components";
import {MdKeyboardBackspace} from 'react-icons/md'


export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    /* border: 1px solid magenta; */
`

export const InnerNav = styled.div`
    width: 100%;
    text-align: center;
`

export const StyledMdKeyboardBackspace = styled(MdKeyboardBackspace)`
    cursor: pointer;
    color: var(--primary);
    width: 20px;
    height: 20px;
    margin-right: 1rem;
`

export const MidContainer = styled.figure`
    display: flex;
    width: fit-content;
    /* border: 1px solid magenta; */
`

export const LogoImage = styled.img`
    width: 70%;
`