import styled from "styled-components";
import {HiLockClosed, HiLockOpen} from 'react-icons/hi'


export const DoorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`

export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border: 9px solid var(--active);
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`

export const StyledLockClose = styled(HiLockClosed)`
    width: 60px;
    height: 60px;
`

export const StyledLockOpen = styled(HiLockOpen)`
    width: 60px;
    height: 60px;
`